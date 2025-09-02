import { useState, useEffect } from "react";
import { Calendar, Tag, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  featured_image_url?: string;
  created_at: string;
  updated_at: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const categories = [
    { value: "all", label: "All Posts", count: 0 },
    { value: "recipes", label: "Recipes", count: 0 },
    { value: "humanitarian-aid", label: "Humanitarian Aid", count: 0 },
    { value: "company-news", label: "Company News", count: 0 }
  ];

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, selectedCategory, searchQuery]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = () => {
    let filtered = posts;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchQuery) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'recipes': return 'Recipes';
      case 'humanitarian-aid': return 'Humanitarian Aid';
      case 'company-news': return 'Company News';
      default: return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'recipes': return 'bg-green-100 text-green-800';
      case 'humanitarian-aid': return 'bg-blue-100 text-blue-800';
      case 'company-news': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryCounts = () => {
    const counts = categories.map(cat => ({
      ...cat,
      count: cat.value === "all" ? posts.length : posts.filter(post => post.category === cat.value).length
    }));
    return counts;
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading blog posts...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-wheat wheat-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6">
              Hayat Flour Mills Blog
            </h1>
            <div className="w-24 h-1 bg-brand-brown mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Discover recipes, learn about our community impact, and stay updated with the latest news from Hayat Flour Mills.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Search */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-serif">Search Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                        <Input
                          placeholder="Search articles..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                    </CardContent>
                  </Card>

                  {/* Categories */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg font-serif">Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {getCategoryCounts().map((category) => (
                          <Button
                            key={category.value}
                            variant={selectedCategory === category.value ? "default" : "ghost"}
                            className="w-full justify-between"
                            onClick={() => setSelectedCategory(category.value)}
                          >
                            <span>{category.label}</span>
                            <Badge variant="secondary">{category.count}</Badge>
                          </Button>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Blog Posts */}
              <div className="lg:col-span-3">
                {filteredPosts.length === 0 ? (
                  <Card>
                    <CardContent className="py-16 text-center">
                      <h3 className="text-xl font-serif text-muted-foreground mb-2">No posts found</h3>
                      <p className="text-muted-foreground">
                        {searchQuery || selectedCategory !== "all"
                          ? "Try adjusting your search or filter criteria."
                          : "Check back soon for new content!"}
                      </p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-8">
                    {filteredPosts.map((post) => (
                      <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <div className="grid md:grid-cols-3 gap-6">
                            {/* Featured Image Placeholder */}
                            <div className="md:col-span-1">
                              <div className="h-48 md:h-full bg-gradient-to-br from-brand-wheat to-brand-gold flex items-center justify-center">
                                <Tag className="h-12 w-12 text-white/60" />
                              </div>
                            </div>
                            
                            {/* Content */}
                            <div className="md:col-span-2 p-6">
                              <div className="flex items-center gap-4 mb-3">
                                <Badge className={getCategoryColor(post.category)}>
                                  {getCategoryLabel(post.category)}
                                </Badge>
                                <div className="flex items-center text-sm text-muted-foreground">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {formatDate(post.created_at)}
                                </div>
                              </div>
                              
                              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary mb-3 hover:text-brand-brown transition-colors">
                                {post.title}
                              </h3>
                              
                              {post.excerpt && (
                                <p className="text-muted-foreground mb-4 line-clamp-3">
                                  {post.excerpt}
                                </p>
                              )}
                              
                              <Button variant="outline" className="group">
                                Read More
                                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;