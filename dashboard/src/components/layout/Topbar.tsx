import { Search, Bell, User } from "lucide-react"

export function Topbar() {
  return (
    <header className="h-16 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-4 md:px-8">
      <div className="flex-1 max-w-md hidden md:flex items-center relative">
        <Search className="h-4 w-4 absolute left-3 text-muted-foreground" />
        <input 
          type="text" 
          placeholder="Buscar pedidos, clientes ou produtos... (Cmd+K)" 
          className="w-full bg-secondary border border-border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors text-white placeholder:text-muted-foreground"
        />
      </div>
      
      <div className="md:hidden flex-1">
         <h2 className="text-lg font-bold text-white tracking-tighter">FB Elegance</h2>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-muted-foreground hover:text-primary transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full border border-background"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-secondary border border-border flex items-center justify-center text-primary cursor-pointer">
          <User className="h-4 w-4" />
        </div>
      </div>
    </header>
  )
}
