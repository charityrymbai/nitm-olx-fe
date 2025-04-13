import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header' 
import ProductGrid from '@/components/product-grid'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col px-10">
      <SiteHeader />
      <main className="flex-1">
        <section className="container py-6 md:py-10">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Browse Listings</h1>
            <p className="text-muted-foreground">Find what you need from our wide selection of products</p>
          </div>
          <div className="mt-8">
            <ProductGrid />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
