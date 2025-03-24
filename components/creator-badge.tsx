"use client"

import { motion } from "framer-motion"
import { Github, Info } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export function CreatorBadge() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-4 right-4 z-50"
    >
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button size="icon" className="rounded-full shadow-lg">
            <Info className="h-4 w-4" />
            <span className="sr-only">Creator Info</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80" align="end">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Created by Sujit Bhanderi</h4>
              <p className="text-sm text-muted-foreground">
                Frontend Developer specializing in Next.js, React.js, Tailwind CSS, and Framer Motion
              </p>
            </div>
            <div className="grid gap-2">
              <div className="grid grid-cols-2 gap-2">
                <Link href="https://github.com/Mr-sujit-111" target="_blank">
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
                <Link href="https://sujit-cv.vercel.app" target="_blank">
                  <Button variant="outline" className="w-full">
                    Portfolio
                  </Button>
                </Link>
              </div>
              <Link href="https://linkedin.com/in/sujit-bhanderi331" target="_blank">
                <Button className="w-full">View LinkedIn Profile</Button>
              </Link>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </motion.div>
  )
}

