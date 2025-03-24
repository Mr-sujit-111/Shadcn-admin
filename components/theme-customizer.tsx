"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Check, Paintbrush } from "lucide-react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const themes = [
  {
    name: "Default",
    primaryColor: "hsl(222.2 47.4% 11.2%)",
    secondaryColor: "hsl(217.2 32.6% 17.5%)",
  },
  {
    name: "Slate",
    primaryColor: "hsl(222.2 47.4% 11.2%)",
    secondaryColor: "hsl(215.4 16.3% 46.9%)",
  },
  {
    name: "Stone",
    primaryColor: "hsl(60 9.1% 97.8%)",
    secondaryColor: "hsl(25 5.3% 44.7%)",
  },
  {
    name: "Gray",
    primaryColor: "hsl(0 0% 9%)",
    secondaryColor: "hsl(0 0% 43.9%)",
  },
  {
    name: "Zinc",
    primaryColor: "hsl(240 5.9% 10%)",
    secondaryColor: "hsl(240 5.2% 33.9%)",
  },
  {
    name: "Neutral",
    primaryColor: "hsl(0 0% 9%)",
    secondaryColor: "hsl(0 0% 43.9%)",
  },
  {
    name: "Blue",
    primaryColor: "hsl(221.2 83.2% 53.3%)",
    secondaryColor: "hsl(210 40% 96.1%)",
  },
  {
    name: "Green",
    primaryColor: "hsl(142.1 76.2% 36.3%)",
    secondaryColor: "hsl(141.4 84.1% 92.5%)",
  },
  {
    name: "Violet",
    primaryColor: "hsl(262.1 83.3% 57.8%)",
    secondaryColor: "hsl(260 60% 98%)",
  },
  {
    name: "Rose",
    primaryColor: "hsl(346.8 77.2% 49.8%)",
    secondaryColor: "hsl(355.7 100% 97.3%)",
  },
]

export function ThemeCustomizer() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [primaryColor, setPrimaryColor] = useState("")
  const [secondaryColor, setSecondaryColor] = useState("")
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Load custom colors from localStorage
    const storedPrimary = localStorage.getItem("primaryColor")
    const storedSecondary = localStorage.getItem("secondaryColor")

    if (storedPrimary) setPrimaryColor(storedPrimary)
    if (storedSecondary) setSecondaryColor(storedSecondary)

    // Apply stored colors if they exist
    if (storedPrimary || storedSecondary) {
      applyCustomColors(storedPrimary || "", storedSecondary || "")
    }
  }, [])

  // Don't render component until mounted to avoid hydration mismatch
  if (!mounted) return null

  function applyTheme(primaryColor: string, secondaryColor: string, themeName?: string) {
    document.documentElement.style.setProperty("--primary", primaryColor)
    document.documentElement.style.setProperty("--secondary", secondaryColor)

    // Calculate RGB values for primary
    const primaryRgb = hexToRgb(primaryColor)
    if (primaryRgb) {
      document.documentElement.style.setProperty("--primary-rgb", `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`)
    }

    // Set theme name if provided
    if (themeName) {
      setTheme(themeName.toLowerCase())
    }
  }

  function applyCustomColors(primary: string, secondary: string) {
    if (!primary && !secondary) return

    localStorage.setItem("primaryColor", primary)
    localStorage.setItem("secondaryColor", secondary)

    applyTheme(primary, secondary)
  }

  function hexToRgb(hex: string) {
    // Remove the # if it exists
    hex = hex.replace(/^#/, "")

    // Parse the hex values
    const bigint = Number.parseInt(hex, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255

    return { r, g, b }
  }

  function handleApplyCustomColors() {
    applyCustomColors(primaryColor, secondaryColor)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Paintbrush className="h-4 w-4" />
          <span className="sr-only">Customize theme</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Customize Theme</DialogTitle>
          <DialogDescription>Select a preset theme or create your own custom color scheme.</DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="presets">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="presets">Presets</TabsTrigger>
            <TabsTrigger value="custom">Custom</TabsTrigger>
          </TabsList>
          <TabsContent value="presets" className="mt-4 space-y-4">
            <div className="grid grid-cols-3 gap-2">
              {themes.map((theme) => (
                <div key={theme.name} className="text-center">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "h-auto w-full flex-col justify-start gap-1 p-2",
                          theme.name.toLowerCase() === "default" && "border-primary",
                        )}
                        style={
                          {
                            "--theme-primary": theme.primaryColor,
                          } as React.CSSProperties
                        }
                        onClick={() => applyTheme(theme.primaryColor, theme.secondaryColor, theme.name)}
                      >
                        <div
                          className="flex h-5 w-full items-center justify-center rounded-full"
                          style={{ backgroundColor: theme.primaryColor }}
                        >
                          {theme.name.toLowerCase() === "default" && <Check className="h-4 w-4 text-white" />}
                        </div>
                        <span className="mt-1 text-xs">{theme.name}</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-2" align="center">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full" style={{ backgroundColor: theme.primaryColor }} />
                          <span className="text-xs">Primary</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full" style={{ backgroundColor: theme.secondaryColor }} />
                          <span className="text-xs">Secondary</span>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Select a preset theme to apply it.</span>
            </div>
          </TabsContent>
          <TabsContent value="custom" className="mt-4 space-y-4">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="primary-color">Primary Color</Label>
                <div className="flex gap-2">
                  <div className="h-9 w-9 rounded-md border" style={{ backgroundColor: primaryColor || "#000000" }} />
                  <Input
                    id="primary-color"
                    type="text"
                    placeholder="#000000"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                  />
                  <Input
                    type="color"
                    value={primaryColor || "#000000"}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="h-9 w-9 p-0"
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="secondary-color">Secondary Color</Label>
                <div className="flex gap-2">
                  <div className="h-9 w-9 rounded-md border" style={{ backgroundColor: secondaryColor || "#000000" }} />
                  <Input
                    id="secondary-color"
                    type="text"
                    placeholder="#000000"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                  />
                  <Input
                    type="color"
                    value={secondaryColor || "#000000"}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="h-9 w-9 p-0"
                  />
                </div>
              </div>
            </div>
            <Button className="w-full" onClick={handleApplyCustomColors}>
              Apply Custom Colors
            </Button>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}

