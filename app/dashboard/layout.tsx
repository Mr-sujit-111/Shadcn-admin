"use client"

import type React from "react"

import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

import { DashboardLayout } from "@/components/dashboard-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <DashboardLayout>
      <AnimatePresence mode="wait">
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </DashboardLayout>
  )
}

