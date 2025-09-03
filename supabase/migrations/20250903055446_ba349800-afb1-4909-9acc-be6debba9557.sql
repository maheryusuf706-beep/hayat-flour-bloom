-- Fix RLS policies for contact_submissions table
-- Drop the restrictive policy that's blocking inserts
DROP POLICY IF EXISTS "Deny anonymous read/update/delete" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow anonymous to insert contact submissions" ON public.contact_submissions;

-- Create proper policies
CREATE POLICY "Allow anonymous insert" 
ON public.contact_submissions 
FOR INSERT 
TO anon 
WITH CHECK (true);

CREATE POLICY "Deny public access to contact submissions" 
ON public.contact_submissions 
FOR SELECT 
TO anon
USING (false);