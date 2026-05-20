import { Sidebar } from "@/components/layout/Sidebar"
import { Topbar } from "@/components/layout/Topbar"
import { BottomNav } from "@/components/layout/BottomNav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 w-full min-h-screen">
        <Topbar />
        <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 w-full max-w-7xl mx-auto overflow-x-hidden">
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  )
}
