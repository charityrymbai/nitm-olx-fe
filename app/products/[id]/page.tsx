import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/site-header"
import SiteFooter from "@/components/site-footer"
import { products } from "@/lib/data"

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) || products[0]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container py-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to listings</span>
          </Link>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.title}</h1>
                <div className="mt-2 flex items-center gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-3xl font-bold text-primary">₹{product.price}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Description</h2>
                <p className="mt-2 text-muted-foreground">{product.description}</p>
              </div>
              <div>
                <h2 className="text-xl font-semibold">Seller Information</h2>
                <p className="mt-2 text-muted-foreground">{product.seller}</p>
                <p className="text-muted-foreground">{product.location}</p>
              </div>
              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  Contact Seller
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  Save Listing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
