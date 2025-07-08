// This component is deprecated in App Router
// SEO is now handled by generateMetadata in page components
interface SEOHeadProps {
  title?: string
  description?: string
  slug?: string
}

export default function SEOHead({ title, description, slug }: SEOHeadProps) {
  // Component is kept for backward compatibility but does nothing
  // All SEO is handled by generateMetadata in App Router
  return null
}
