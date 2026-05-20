import { Card, CardContent } from "@/components/ui/card"
import { Search, Plus } from "lucide-react"

const products = [
  { id: 1, name: "Jaqueta Couro Premium", category: "Vestuário", price: "R$ 899,90", stock: 12, status: "Disponível", img: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60" },
  { id: 2, name: "Sneaker Elegance X", category: "Calçados", price: "R$ 1.299,00", stock: 4, status: "Em breve", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop&q=60" },
  { id: 3, name: "Óculos de Sol Minimal", category: "Lifestyle", price: "R$ 399,00", stock: 0, status: "Esgotado", img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60" },
  { id: 4, name: "Camiseta High Cotton", category: "Vestuário", price: "R$ 189,90", stock: 45, status: "Disponível", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60" },
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Acervo</h2>
          <p className="text-sm text-muted-foreground mt-1">Gerencie os produtos da sua loja.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative hidden md:flex">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Buscar no acervo..." 
              className="bg-secondary border border-border rounded-full pl-9 pr-4 py-2 text-sm text-white focus:border-primary focus:outline-none transition-colors w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            <Plus className="w-4 h-4" />
            Novo Produto
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden group cursor-pointer hover:border-primary/50">
            <div className="aspect-[3/4] relative overflow-hidden bg-secondary">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider backdrop-blur-md ${
                  product.status === 'Disponível' ? 'bg-black/50 text-white' :
                  product.status === 'Esgotado' ? 'bg-destructive/80 text-white' :
                  'bg-primary/80 text-black'
                }`}>
                  {product.status}
                </span>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-xs uppercase tracking-widest text-primary mb-1 font-medium">{product.category}</p>
              <h3 className="font-semibold text-white truncate">{product.name}</h3>
              <div className="flex items-center justify-between mt-3">
                <p className="text-muted-foreground text-sm">{product.price}</p>
                <p className="text-xs text-muted-foreground">{product.stock} un</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
