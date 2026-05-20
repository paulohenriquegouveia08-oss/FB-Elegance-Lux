import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, MoreHorizontal } from "lucide-react"

const ordersData = [
  { id: "PED-8893", customer: "Lucas Singi", amount: "R$ 499,90", method: "PIX", status: "Enviado", date: "20/05/2026", track: "NL123456789BR" },
  { id: "PED-8894", customer: "Amanda Tavares", amount: "R$ 299,90", method: "Cartão", status: "Pendente", date: "19/05/2026", track: "-" },
  { id: "PED-8895", customer: "Ricardo Silva", amount: "R$ 890,00", method: "PIX", status: "Pendente", date: "19/05/2026", track: "-" },
  { id: "PED-8896", customer: "Beatriz Oliveira", amount: "R$ 150,00", method: "Cartão", status: "Entregue", date: "18/05/2026", track: "NL987654321BR" },
  { id: "PED-8897", customer: "Carlos Mendes", amount: "R$ 1.200,00", method: "PIX", status: "Cancelado", date: "18/05/2026", track: "-" },
  { id: "PED-8898", customer: "Juliana Santos", amount: "R$ 350,00", method: "Boleto", status: "Entregue", date: "17/05/2026", track: "NL567890123BR" },
]

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Pedidos</h2>
          <p className="text-sm text-muted-foreground mt-1">Gerencie e rastreie todas as vendas da loja.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 bg-secondary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors border border-border">
            <Filter className="w-4 h-4" />
            Filtros
          </button>
        </div>
      </div>

      <Card>
        <CardHeader className="p-4 border-b border-border bg-secondary/20 flex flex-row items-center gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Buscar por cliente, pedido ou código..." 
              className="w-full bg-background border border-border rounded-full pl-10 pr-4 py-2 text-sm text-white focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-secondary/30 border-b border-border">
                <tr>
                  <th className="px-6 py-4 font-medium">Pedido</th>
                  <th className="px-6 py-4 font-medium">Cliente</th>
                  <th className="px-6 py-4 font-medium">Valor</th>
                  <th className="px-6 py-4 font-medium">Pagamento</th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium">Data</th>
                  <th className="px-6 py-4 font-medium">Rastreamento</th>
                  <th className="px-6 py-4 text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {ordersData.map((order) => (
                  <tr key={order.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{order.id}</td>
                    <td className="px-6 py-4 text-muted-foreground">{order.customer}</td>
                    <td className="px-6 py-4 font-medium text-white">{order.amount}</td>
                    <td className="px-6 py-4 text-muted-foreground">{order.method}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider ${
                        order.status === 'Entregue' ? 'bg-success/20 text-success' :
                        order.status === 'Cancelado' ? 'bg-destructive/20 text-destructive' :
                        order.status === 'Enviado' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-primary/20 text-primary'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{order.date}</td>
                    <td className="px-6 py-4 text-muted-foreground">{order.track}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-muted-foreground hover:text-primary transition-colors p-2">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
