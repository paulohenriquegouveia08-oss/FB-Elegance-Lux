import Link from "next/link"
import { Home, ShoppingBag, Box, BarChart3 } from "lucide-react"

const navItems = [
  { name: "Início", href: "/", icon: Home },
  { name: "Pedidos", href: "/orders", icon: ShoppingBag },
  { name: "Acervo", href: "/products", icon: Box },
  { name: "Análise", href: "/analytics", icon: BarChart3 },
]

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-background/90 backdrop-blur-lg border-t border-border z-40 px-6 pb-safe">
      <div className="flex justify-between items-center h-full max-w-md mx-auto">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex flex-col items-center justify-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <item.icon className="h-5 w-5" />
            <span className="text-[10px] font-medium uppercase tracking-wider">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
