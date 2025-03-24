"use client"

import { Github, Globe, Linkedin, Mail, MapPin, Phone, User } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/animations/motion"

export default function AboutPage() {
  const skills = [
    { name: "Next.js", level: "Expert" },
    { name: "React.js", level: "Expert" },
    { name: "Tailwind CSS", level: "Expert" },
    { name: "Framer Motion", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    { name: "JavaScript", level: "Expert" },
    { name: "HTML/CSS", level: "Expert" },
    { name: "UI/UX Design", level: "Advanced" },
    { name: "Responsive Design", level: "Expert" },
    { name: "Performance Optimization", level: "Advanced" },
    { name: "Git/GitHub", level: "Advanced" },
    { name: "RESTful APIs", level: "Advanced" },
  ]

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Solutions Inc.",
      period: "2020 - Present",
      description:
        "Developing modern, responsive web applications using Next.js, React, and Tailwind CSS. Leading UI/UX initiatives and implementing performance optimizations.",
    },
    {
      title: "Web Developer",
      company: "Digital Creations",
      period: "2018 - 2020",
      description:
        "Created responsive websites and web applications. Collaborated with designers to implement pixel-perfect interfaces.",
    },
    {
      title: "Freelance Developer",
      company: "Self-employed",
      period: "2017 - 2018",
      description:
        "Worked with various clients to develop websites and web applications. Gained experience in client communication and project management.",
    },
  ]

  const projects = [
    {
      title: "Admin Dashboard",
      description: "A comprehensive admin panel built with Next.js, Tailwind CSS, and shadcn/ui components.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment integration.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Stripe", "MongoDB"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills with smooth animations.",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      link: "https://sujit-cv.vercel.app",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
      </div>

      <FadeIn>
        <Card className="overflow-hidden">
          <div className="relative h-40 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(var(--primary-rgb),0.2),transparent_60%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(var(--primary-rgb),0.1),transparent_50%)]" />
            </motion.div>
          </div>
          <div className="relative mx-6 -mt-12 flex flex-col items-center sm:flex-row sm:items-end sm:justify-between">
            <ScaleIn>
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src="/placeholder-user.jpg" alt="Sujit Bhanderi" />
                <AvatarFallback className="text-xl">SB</AvatarFallback>
              </Avatar>
            </ScaleIn>
            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-0">
              <Link href="https://github.com/Mr-sujit-111" target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/sujit-bhanderi331" target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
              <Link href="https://sujit-cv.vercel.app" target="_blank">
                <Button variant="outline" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  Portfolio
                </Button>
              </Link>
            </div>
          </div>
          <CardHeader className="pt-6">
            <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
              <CardTitle className="text-2xl">Sujit Bhanderi</CardTitle>
              <CardDescription className="text-base">
                Frontend Developer (Specializing in Next.js, React.js, and Tailwind CSS)
              </CardDescription>
              <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>India</span>
                <span className="mx-1">•</span>
                <User className="h-4 w-4" />
                <span>4+ years experience</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Profile Summary</h3>
                <p className="mt-1 text-muted-foreground">
                  Passionate Frontend Developer with expertise in creating modern, responsive, and scalable web
                  applications. Skilled in Next.js, React.js, Tailwind CSS, and Framer Motion, with a strong focus on
                  UI/UX design and performance optimization.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <Link href="mailto:sujitbhanderi331@gmail.com" className="text-sm hover:underline">
                    sujitbhanderi331@gmail.com
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <Link href="tel:+917359068984" className="text-sm hover:underline">
                    +91 7359068984
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </FadeIn>

      <Tabs defaultValue="skills" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="skills" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
              <CardDescription>My expertise and proficiency in various technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <StaggerContainer className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                {skills.map((skill) => (
                  <StaggerItem key={skill.name}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center rounded-lg border p-3 text-center"
                    >
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="mt-2">
                        {skill.level}
                      </Badge>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="experience" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>My professional journey and career highlights</CardDescription>
            </CardHeader>
            <CardContent>
              <StaggerContainer className="space-y-6">
                {experiences.map((exp, index) => (
                  <StaggerItem key={index}>
                    <div className="relative border-l pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-primary before:content-['']">
                      <h3 className="font-semibold">{exp.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span>{exp.period}</span>
                      </div>
                      <p className="mt-2 text-sm">{exp.description}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Featured Projects</CardTitle>
              <CardDescription>Showcase of my recent work and accomplishments</CardDescription>
            </CardHeader>
            <CardContent>
              <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <StaggerItem key={index}>
                    <motion.div whileHover={{ y: -5 }} className="flex h-full flex-col rounded-lg border">
                      <div className="flex-1 p-4">
                        <h3 className="font-semibold">{project.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-1">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="border-t p-4">
                        <Link href={project.link} target="_blank">
                          <Button variant="outline" size="sm" className="w-full">
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

