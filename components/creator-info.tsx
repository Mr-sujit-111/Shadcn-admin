"use client"

import { motion } from "framer-motion"
import { Github, Globe, Linkedin } from "lucide-react"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"

export function CreatorInfo() {
  return (
    <div className="px-4 py-2">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="ghost" className="flex w-full items-center justify-start gap-2 px-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder-user.jpg" alt="Sujit Bhanderi" />
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
            <span className="text-xs">Created by Sujit Bhanderi</span>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent className="w-80" align="start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex justify-between space-x-4"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src="/placeholder-user.jpg" alt="Sujit Bhanderi" />
              <AvatarFallback>SB</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">Sujit Bhanderi</h4>
              <p className="text-xs">Frontend Developer specializing in Next.js, React.js, and Tailwind CSS</p>
              <div className="flex items-center gap-2 pt-2">
                <Link href="https://github.com/Mr-sujit-111" target="_blank">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/sujit-bhanderi331" target="_blank">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://sujit-cv.vercel.app" target="_blank">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Portfolio</span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </HoverCardContent>
      </HoverCard>
    </div>
  )
}

