import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Users, ShoppingBag } from "lucide-react"
import { SalesChart } from "@/components/dashboard/SalesChart"
import { RecentOrders } from "@/components/dashboard/RecentOrders"

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">Visão Geral</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Acompanhe o desempenho da FB Elegance Lux em tempo real.
        </p>
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {/* KPI Cards */}
        <Card className="hover:-translate-y-1 transition-transform">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Faturamento (Mês)</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">R$ 45.231,89</div>
            <p className="text-xs text-success mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +20.1% em relação ao mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="hover:-translate-y-1 transition-transform">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Novos Pedidos</CardTitle>
            <ShoppingBag className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">+145</div>
            <p className="text-xs text-muted-foreground mt-1">
              8 pedidos aguardando envio
            </p>
          </CardContent>
        </Card>

        <Card className="hover:-translate-y-1 transition-transform">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ticket Médio</CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">R$ 311,94</div>
            <p className="text-xs text-success mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +5% este mês
            </p>
          </CardContent>
        </Card>

        <Card className="hover:-translate-y-1 transition-transform">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Taxa de Conversão</CardTitle>
            <Users className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">3.2%</div>
            <p className="text-xs text-success mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              +1.1% últimos 7 dias
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Gráficos e Tabelas */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4 min-h-[400px]">
          <CardHeader>
            <CardTitle className="text-white">Faturamento (Últimos 7 dias)</CardTitle>
          </CardHeader>
          <CardContent>
            <SalesChart />
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3 min-h-[400px]">
          <CardHeader>
            <CardTitle className="text-white">Pedidos Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentOrders />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
