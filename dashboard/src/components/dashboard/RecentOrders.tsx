import { cn } from "@/lib/utils"

const recentOrders = [
  {
    id: "PED-8893",
    customer: "Lucas Singi",
    email: "lucas@singi.com",
    amount: "R$ 499,90",
    status: "Enviado",
    date: "Há 2 horas",
  },
  {
    id: "PED-8894",
    customer: "Amanda Tavares",
    email: "amanda@tavares.com",
    amount: "R$ 299,90",
    status: "Pendente",
    date: "Há 5 horas",
  },
  {
    id: "PED-8895",
    customer: "Ricardo Silva",
    email: "ricardo@silva.com",
    amount: "R$ 890,00",
    status: "Pendente",
    date: "Há 1 dia",
  },
  {
    id: "PED-8896",
    customer: "Beatriz Oliveira",
    email: "bia@oliveira.com",
    amount: "R$ 150,00",
    status: "Entregue",
    date: "Há 1 dia",
  },
]

export function RecentOrders() {
  return (
    <div className="space-y-4">
      {recentOrders.map((order) => (
        <div key={order.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center font-bold text-primary text-sm">
              {order.customer.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-medium text-white">{order.customer}</p>
              <p className="text-xs text-muted-foreground">{order.email}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-white">{order.amount}</p>
            <div className="flex items-center justify-end gap-2 mt-1">
              <span className={cn(
                "text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full",
                order.status === "Entregue" ? "bg-success/20 text-success" : 
                order.status === "Pendente" ? "bg-primary/20 text-primary" : 
                "bg-blue-500/20 text-blue-400"
              )}>
                {order.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
