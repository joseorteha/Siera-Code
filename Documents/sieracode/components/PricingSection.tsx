"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface TeamMember {
  name: string
  role: string
  description: string
  skills: string[]
  featured?: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: "David Valdez López",
    role: "Desarrollador Full Stack",
    description: "Especializado en desarrollo backend y arquitectura de sistemas.",
    skills: ["Node.js", "React", "Bases de Datos", "API REST"],
  },
  {
    name: "Guillermo Díaz Ramos",
    role: "Desarrollador Full Stack",
    description: "Experto en interfaces de usuario y experiencia del usuario.",
    skills: ["React", "TypeScript", "Tailwind CSS", "UI/UX"],
  },
  {
    name: "Jesús Alberto Rodríguez",
    role: "Desarrollador Full Stack",
    description: "Coordinación de equipos y gestión de proyectos tecnológicos.",
    skills: ["Gestión Ágil", "Arquitectura", "DevOps", "Liderazgo"],
  },
  {
    name: "Saúl Reyes Pérez",
    role: "Desarrollador Full Stack",
    description: "Enfocado en lógica de negocio y optimización de rendimiento.",
    skills: ["Python", "Java", "SQL", "Microservicios"],
  },
  {
    name: "José Bernardino Tleauctle",
    role: "Desarrollador Full Stack",
    description: "Creación de aplicaciones móviles multiplataforma.",
    skills: ["React Native", "Flutter", "Mobile UI", "APIs"],
  },
  {
    name: "Mtro. Ricardo García Castro",
    role: "Asesor Académico",
    description: "Profesor de Ingeniería en Sistemas que guía al equipo.",
    skills: ["Mentoría", "Ingeniería", "Educación", "Liderazgo"],
    featured: true,
  },
]

export function PricingSection() {
  const [selectedMember, setSelectedMember] = React.useState<number>(2)

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-figtree text-[40px] font-normal leading-tight mb-4">Nuestro Equipo 2025</h2>
          <p className="font-figtree text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce a los integrantes activos de Siera Code, estudiantes de ISC 7º semestre comprometidos con la
            excelencia.
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {teamMembers.map((member, index) => (
            <button
              key={member.name}
              type="button"
              onClick={() => setSelectedMember(index)}
              className={cn(
                "relative p-8 rounded-2xl text-left transition-all border-2 hover:shadow-lg",
                selectedMember === index
                  ? "border-[#156d95] bg-[#156d95]/5 shadow-md"
                  : "border-border hover:border-[#156d95]/50",
              )}
            >
              {member.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#167E6C] text-white px-4 py-1 rounded-full text-sm font-figtree">
                  Asesor
                </span>
              )}
              <div className="mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#156d95] to-[#167E6C] flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="font-figtree text-xl font-medium mb-1">{member.name}</h3>
                <p className="font-figtree text-sm text-[#156d95] font-medium mb-3">{member.role}</p>
                <p className="font-figtree text-sm text-muted-foreground mb-4">{member.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary rounded-full text-xs font-figtree text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Member Details */}
        <div className="border border-border rounded-2xl overflow-hidden bg-card p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-figtree text-3xl font-medium mb-2">{teamMembers[selectedMember].name}</h3>
              <p className="font-figtree text-xl text-[#156d95] mb-4">{teamMembers[selectedMember].role}</p>
              <p className="font-figtree text-lg text-muted-foreground mb-6">
                {teamMembers[selectedMember].description}
              </p>
              <div className="space-y-3">
                <h4 className="font-figtree text-sm font-medium text-foreground uppercase tracking-wide">
                  Tecnologías
                </h4>
                <div className="flex flex-wrap gap-3">
                  {teamMembers[selectedMember].skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-[#156d95] text-white rounded-lg text-sm font-figtree font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-2xl bg-gradient-to-br from-[#156d95] to-[#167E6C] flex items-center justify-center text-white text-8xl font-bold shadow-2xl">
                {teamMembers[selectedMember].name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="font-figtree text-lg text-muted-foreground mb-6">
            ¿Quieres unirte al equipo o colaborar con nosotros?
          </p>
          <button
            type="button"
            className="px-8 py-4 bg-[#156d95] text-white rounded-full font-figtree text-lg font-medium hover:bg-[#156d95]/90 transition-colors shadow-lg"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </section>
  )
}
  