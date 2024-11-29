"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  DollarSign,
  GraduationCap,
  Home,
  Menu,
  Settings,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";

const routes = [
  {
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Grades",
    icon: GraduationCap,
    href: "/grades",
    color: "text-violet-500",
  },
  {
    label: "Tuition",
    icon: DollarSign,
    color: "text-pink-700",
    href: "/tuition",
  },
  {
    label: "Courses",
    icon: BookOpen,
    color: "text-orange-500",
    href: "/courses",
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="md:hidden fixed left-4 top-4 z-50"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-[#111827]">
          <SidebarContent pathname={pathname} />
        </SheetContent>
      </Sheet>

      <aside className="hidden md:flex h-screen w-64 flex-col bg-[#111827] text-white">
        <SidebarContent pathname={pathname} />
      </aside>
    </>
  );
}

function SidebarContent({ pathname }: { pathname: string }) {
  return (
    <div className="space-y-4 py-4 flex flex-col h-full">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-center pl-3 mb-14">
          <UserButton />
        </div>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="px-3 py-2">
        <Link
          href="/settings"
          className={cn(
            "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
            pathname === "/settings"
              ? "text-white bg-white/10"
              : "text-zinc-400",
          )}
        >
          <div className="flex items-center flex-1">
            <Settings className="h-5 w-5 mr-3 text-emerald-500" />
            Settings
          </div>
        </Link>
      </div>
    </div>
  );
}
