"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Bell,
  ChevronDown,
  CreditCard,
  Home,
  Layers,
  LayoutDashboard,
  LogOut,
  Mail,
  MessageSquare,
  PanelLeft,
  Search,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"

import { motion } from "framer-motion"
import { PageTransition, SlideIn } from "@/components/animations/motion"
import { CreatorInfo } from "@/components/creator-info"
import { CreatorBadge } from "@/components/creator-badge"
import { ThemeCustomizer } from "@/components/theme-customizer"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  submenu?: NavItem[]
  badge?: string
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/dashboard/users",
    icon: Users,
    badge: "New",
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },

  {
    title: "Components",
    href: "#",
    icon: Layers,
    submenu: [
      {
        title: "Forms",
        href: "/dashboard/components/forms",
        icon: Mail,
      },
      {
        title: "Cards",
        href: "/dashboard/components/cards",
        icon: CreditCard,
      },
      {
        title: "Tables",
        href: "/dashboard/components/tables",
        icon: Layers,
      },
    ],
  },
  {
    title: "About",
    href: "/dashboard/about",
    icon: User,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setIsCommandOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const toggleSubmenu = (title: string) => {
    setOpenSubmenu(openSubmenu === title ? null : title)
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Mobile Navigation */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden fixed left-4 top-4 z-40">
            <PanelLeft className="h-4 w-4" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <div className="flex h-16 items-center border-b px-4">
            <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
              <Layers className="h-6 w-6" />
              <span>Admin Panel</span>
            </Link>
          </div>
          <nav className="grid gap-2 p-4">
            {navItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <div className="space-y-2">
                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => toggleSubmenu(item.title)}
                    >
                      <div className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </div>
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", openSubmenu === item.title && "rotate-180")}
                      />
                    </Button>
                    {openSubmenu === item.title && (
                      <div className="ml-4 grid gap-1">
                        {item.submenu.map((subItem) => (
                          <Button
                            key={subItem.title}
                            variant="ghost"
                            asChild
                            className={cn("justify-start", pathname === subItem.href && "bg-muted font-medium")}
                          >
                            <Link href={subItem.href} className="flex items-center gap-2">
                              <subItem.icon className="h-4 w-4" />
                              <span>{subItem.title}</span>
                            </Link>
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Button
                    variant="ghost"
                    asChild
                    className={cn(
                      "w-full justify-start transition-all hover:translate-x-1",
                      pathname === item.href && "bg-muted font-medium",
                    )}
                  >
                    <Link href={item.href} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                      {item.badge && (
                        <Badge variant={item.badge === "New" ? "default" : "secondary"} className="ml-auto">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div
        className={cn(
          "fixed inset-y-0  left-0 z-20 hidden w-64 flex-col border-r bg-background transition-transform md:flex h-full",
          !isSidebarOpen && "-translate-x-full",
        )}
      >
        <SlideIn className="h-full">
          <div className="flex  h-full flex-col bg-background group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow">
            <div className="flex h-16 items-center border-b px-4">
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                <Layers className="h-6 w-6" />
                <span>Admin Panel</span>
              </Link>
              <Button variant="ghost" size="icon" className="ml-auto" onClick={() => setIsSidebarOpen(false)}>
                <PanelLeft className="h-4 w-4" />
                <span className="sr-only">Toggle Sidebar</span>
              </Button>
            </div>
            <nav className="flex-1 overflow-auto p-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <div key={item.title}>
                    {item.submenu ? (
                      <div className="space-y-2">
                        <Button
                          variant="ghost"
                          className="w-full justify-between"
                          onClick={() => toggleSubmenu(item.title)}
                        >
                          <div className="flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            <span>{item.title}</span>
                          </div>
                          <ChevronDown
                            className={cn("h-4 w-4 transition-transform", openSubmenu === item.title && "rotate-180")}
                          />
                        </Button>
                        {openSubmenu === item.title && (
                          <div className="ml-4 grid gap-1">
                            {item.submenu.map((subItem) => (
                              <Button
                                key={subItem.title}
                                variant="ghost"
                                asChild
                                className={cn("justify-start", pathname === subItem.href && "bg-muted font-medium")}
                              >
                                <Link href={subItem.href} className="flex items-center gap-2">
                                  <subItem.icon className="h-4 w-4" />
                                  <span>{subItem.title}</span>
                                </Link>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Button
                        variant="ghost"
                        asChild
                        className={cn(
                          "w-full justify-start transition-all hover:translate-x-1",
                          pathname === item.href && "bg-muted font-medium",
                        )}
                      >
                        <Link href={item.href} className="flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                          {item.badge && (
                            <Badge variant={item.badge === "New" ? "default" : "secondary"} className="ml-auto">
                              {item.badge}
                            </Badge>
                          )}
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </nav>
            <div className="border-t p-4">
              <Button variant="outline" asChild className="w-full justify-start">
                <Link href="/login" className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  <span>Log out</span>
                </Link>
              </Button>
              <div className="mt-4">
                <CreatorInfo />
              </div>
            </div>
          </div>
        </SlideIn>
      </div>

      {/* Main Content */}
      <div className={cn("flex flex-1 flex-col", isSidebarOpen ? "md:pl-64" : "md:pl-0")}>
        {/* Top Navbar */}
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Button variant="outline" size="icon" className="hidden md:flex" onClick={() => setIsSidebarOpen(true)}>
            <PanelLeft className="h-4 w-4" />
            <span className="sr-only">Toggle Sidebar</span>
          </Button>
          <div className="flex-1 md:grow-0">
            <Button
              variant="outline"
              className="w-full justify-start md:w-[240px]"
              onClick={() => setIsCommandOpen(true)}
            >
              <Search className="mr-2 h-4 w-4" />
              <span>Search...</span>
              <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
            <CommandDialog open={isCommandOpen} onOpenChange={setIsCommandOpen}>
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Type a command or search..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    <CommandItem>
                      <Home className="mr-2 h-4 w-4" />
                      <span>Dashboard</span>
                    </CommandItem>
                    <CommandItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Users</span>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </CommandItem>
                  </CommandGroup>
                  <CommandSeparator />
                  <CommandGroup heading="Settings">
                    <CommandItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Mail</span>
                      <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </CommandDialog>
          </div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <ModeToggle />
            <ThemeCustomizer />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-4 w-4" />
                  <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px]">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="grid gap-2">
                  <div className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">
                        <span className="font-semibold">John Doe</span> mentioned you in a comment
                      </p>
                      <p className="text-xs text-muted-foreground">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <UserPlus className="h-4 w-4" />
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">
                        <span className="font-semibold">5 new users</span> registered today
                      </p>
                      <p className="text-xs text-muted-foreground">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Settings className="h-4 w-4" />
                    </div>
                    <div className="grid gap-1">
                      <p className="text-sm font-medium">
                        <span className="font-semibold">System update</span> completed successfully
                      </p>
                      <p className="text-xs text-muted-foreground">1 day ago</p>
                    </div>
                  </div>
                </div>
                <DropdownMenuSeparator />
                <Button variant="ghost" className="w-full justify-center">
                  View all notifications
                </Button>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
                    <AvatarFallback>SB</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56" forceMount asChild>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">Sujit Bhanderi</p>
                      <p className="text-xs leading-none text-muted-foreground">admin@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                      <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/login">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Link>
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <PageTransition>
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </PageTransition>
      </div>
      <CreatorBadge />
    </div>
  )
}

