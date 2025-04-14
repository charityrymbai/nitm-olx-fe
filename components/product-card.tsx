import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import type { Product } from '@/lib/data'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="h-full overflow-hidden transition-all hover:shadow-md">
        <div className="relative aspect-square">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.title}
            fill
            className="object-cover transition-all hover:scale-105"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold line-clamp-1">{product.title}</h3>
          <p className="mt-1 text-lg font-bold text-primary">
            ₹{product.price}
          </p>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </Link>
  )
}
