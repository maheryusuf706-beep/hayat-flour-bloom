-- Create contact_submissions table to store all contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert contact submissions
CREATE POLICY "Allow anonymous to insert contact submissions" 
ON public.contact_submissions 
FOR INSERT 
TO anon
WITH CHECK (true);

-- Deny all other operations to anonymous users
CREATE POLICY "Deny anonymous read/update/delete" 
ON public.contact_submissions 
FOR ALL 
TO anon
USING (false);

-- Create blog_posts table for the blog functionality
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('recipes', 'humanitarian-aid', 'company-news')),
  featured_image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security for blog posts
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Allow public read access to published blog posts
CREATE POLICY "Allow public read of published blog posts" 
ON public.blog_posts 
FOR SELECT 
TO anon
USING (published = true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates on blog posts
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, published) VALUES
('Traditional Ugali Recipe', 'traditional-ugali-recipe', 'Learn how to make perfect ugali using our premium maize flour', 
 '<h2>Ingredients</h2><ul><li>2 cups Hayat maize flour</li><li>3 cups water</li><li>Pinch of salt</li></ul><h2>Instructions</h2><p>Boil water in a heavy-bottomed pot. Gradually add maize flour while stirring continuously to avoid lumps. Cook for 15-20 minutes, stirring frequently until the ugali pulls away from the sides of the pot.</p>', 
 'recipes', true),

('Community Impact: Building Wells', 'community-impact-building-wells', 'Our humanitarian fund has helped build 5 new water wells in rural communities', 
 '<p>Through our humanitarian aid fund, we''ve successfully completed the construction of 5 new water wells in underserved rural communities. These wells now provide clean, safe drinking water to over 2,000 families.</p><p>The project was completed in partnership with local community leaders and international aid organizations.</p>', 
 'humanitarian-aid', true),

('New Milling Facility Opens', 'new-milling-facility-opens', 'Hayat Flour Mills expands operations with state-of-the-art facility', 
 '<p>We are excited to announce the opening of our new milling facility in Nairobi. This expansion doubles our production capacity and incorporates the latest in grain processing technology.</p><p>The new facility will create 150 new jobs and help us better serve our growing customer base across East Africa.</p>', 
 'company-news', true);