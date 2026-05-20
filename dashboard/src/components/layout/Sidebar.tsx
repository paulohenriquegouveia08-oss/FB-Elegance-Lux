import Link from "next/link"
import { Home, ShoppingBag, Box, BarChart3, Settings, LogOut } from "lucide-react"

const navItems = [
  { name: "Visão Geral", href: "/", icon: Home },
  { name: "Pedidos", href: "/orders", icon: ShoppingBag },
  { name: "Acervo", href: "/products", icon: Box },
  { name: "Financeiro", href: "/analytics", icon: BarChart3 },
  { name: "Configurações", href: "/settings", icon: Settings },
]

export function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen border-r border-border bg-background fixed left-0 top-0 pt-6 z-40">
      <div className="px-6 pb-8">
        <h1 className="text-xl font-bold tracking-tighter text-white">FB Elegance Lux</h1>
        <p className="text-xs text-primary mt-1 uppercase tracking-widest">Dashboard</p>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium text-muted-foreground hover:text-white hover:bg-secondary transition-all"
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="flex w-full items-center gap-3 px-3 py-2.5 rounded-full text-sm font-medium text-destructive hover:bg-destructive/10 transition-all">
          <LogOut className="h-4 w-4" />
          Sair
        </button>
      </div>
    </aside>
  )
}
