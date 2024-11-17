import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSiderbar";
import Header from "./Header";

function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />

        <div role="main" className="bg-background px-16 pb-20 pt-5">
          <div className="container mx-auto flex max-w-7xl flex-1 flex-col">
            <Outlet />
            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" /> */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default AppLayout;
