"use client"

import { motion } from "framer-motion"
import { Github, Globe, Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/animations/motion"

export function CreatorFooter() {
  return (
    <FadeIn delay={0.5}>
      <div className="mt-8 border-t pt-8">
        <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:space-y-0">
          <div>
            <h3 className="text-lg font-semibold">Created by Sujit Bhanderi</h3>
            <p className="text-sm text-muted-foreground">
              Frontend Developer (Specializing in Next.js, React.js, and Tailwind CSS)
            </p>
            <p className="text-sm text-muted-foreground">4+ years experience • India</p>
            <p className="mt-2 text-sm">
              Passionate Frontend Developer with expertise in creating modern, responsive, and scalable web
              applications. Skilled in Next.js, React.js, Tailwind CSS, and Framer Motion, with a strong focus on UI/UX
              design and performance optimization.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="font-medium">Contact Information</h4>
            <div className="flex flex-col space-y-2">
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <Link href="mailto:sujitbhanderi331@gmail.com" className="text-sm hover:underline">
                  sujitbhanderi331@gmail.com
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <Link href="tel:+917359068984" className="text-sm hover:underline">
                  +91 7359068984
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <Linkedin className="h-4 w-4" />
                <Link
                  href="https://linkedin.com/in/sujit-bhanderi331"
                  target="_blank"
                  className="text-sm hover:underline"
                >
                  linkedin.com/in/sujit-bhanderi331
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <Github className="h-4 w-4" />
                <Link href="https://github.com/Mr-sujit-111" target="_blank" className="text-sm hover:underline">
                  github.com/Mr-sujit-111
                </Link>
              </motion.div>
              <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <Link href="https://sujit-cv.vercel.app" target="_blank" className="text-sm hover:underline">
                  sujit-cv.vercel.app
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

