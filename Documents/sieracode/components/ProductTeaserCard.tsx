"use client"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
type ProductTeaserCardProps = {
  dailyVolume?: string
  dailyVolumeLabel?: string
  headline?: string
  subheadline?: string
  description?: string
  videoSrc?: string
  posterSrc?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

// @component: ProductTeaserCard
export const ProductTeaserCard = (props: ProductTeaserCardProps) => {
  const {
    dailyVolume = "3er",
    dailyVolumeLabel = "LUGAR NACIONAL HACKATECNM 2025",
    headline = "Comunidad Tecnológica Estudiantil del ITSZ",
    subheadline = "Siera Code es un equipo multidisciplinario de estudiantes apasionados por la tecnología. Desarrollamos proyectos reales, participamos en competencias nacionales y formamos talento en la región de Zongolica, Veracruz.",
    description = "Más que un equipo de competencia, somos una comunidad que impulsa el crecimiento profesional de estudiantes del ITSZ mediante talleres, proyectos con empresas y mentorías personalizadas.",
    videoSrc = "https://cdn.sanity.io/files/1t8iva7t/production/a2cbbed7c998cf93e7ecb6dae75bab42b13139c2.mp4",
    posterSrc = "/images/design-mode/9ad78a5534a46e77bafe116ce1c38172c60dc21a-1069x1068.png",
    primaryButtonText = "Conoce más",
    primaryButtonHref = "",
    secondaryButtonText = "Ver Proyectos",
    secondaryButtonHref = "",
  } = props

  // @return
  return (
    <section className="w-full px-4 sm:px-8 pt-24 sm:pt-32 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-2">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
            }}
            className="col-span-12 lg:col-span-6 bg-[#e9e9e9] rounded-[40px] p-6 sm:p-12 lg:p-16 flex flex-col justify-end aspect-square overflow-hidden"
          >
            <a
              href={primaryButtonHref}
              onClick={(e) => e.preventDefault()}
              className="flex flex-col gap-1 text-[#9a9a9a]"
            >
              <motion.span
                initial={{
                  transform: "translateY(20px)",
                  opacity: 0,
                }}
                animate={{
                  transform: "translateY(0px)",
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.645, 0.045, 0.355, 1],
                  delay: 0.6,
                }}
                className="text-sm uppercase tracking-tight font-mono flex items-center gap-1"
                style={{
                  fontFamily: "var(--font-geist-mono), 'Geist Mono', ui-monospace, monospace",
                }}
              >
                {dailyVolumeLabel}
                <ArrowUpRight className="w-[0.71em] h-[0.71em]" />
              </motion.span>
              <span
                className="text-[32px] leading-[160px] tracking-tight bg-gradient-to-r from-[#202020] via-[#00517f] via-[#52aee3] to-[#9ed2fc] bg-clip-text text-transparent"
                style={{
                  fontFeatureSettings: '"clig" 0, "liga" 0',
                  height: "98px",
                  marginBottom: "0px",
                  paddingTop: "",
                  display: "none",
                }}
              >
                {dailyVolume}
              </span>
            </a>

            <h1
              className="text-[32px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-tight text-[#202020] max-w-[520px] mb-4 sm:mb-6"
              style={{
                fontWeight: "500",
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {headline}
            </h1>

            <p
              className="text-base sm:text-lg leading-6 sm:leading-7 text-[#404040] max-w-[520px] mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-figtree), Figtree",
              }}
            >
              {subheadline}
            </p>

            <div className="max-w-[520px] mb-0">
              <p
                className="text-base leading-5"
                style={{
                  display: "none",
                }}
              >
                {description}
              </p>
            </div>

            <ul className="flex gap-1.5 flex-wrap mt-6 sm:mt-10">
              <li>
                <a
                  href={primaryButtonHref}
                  onClick={(e) => e.preventDefault()}
                  className="block cursor-pointer text-white bg-[#0988f0] rounded-full px-4 sm:px-[18px] py-3 sm:py-[15px] text-sm sm:text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                  style={{
                    background: "#156d95",
                  }}
                >
                  {primaryButtonText}
                </a>
              </li>
              <li>
                <a
                  href={secondaryButtonHref}
                  onClick={(e) => e.preventDefault()}
                  className="block cursor-pointer text-[#202020] border border-[#202020] rounded-full px-4 sm:px-[18px] py-3 sm:py-[15px] text-sm sm:text-base leading-4 whitespace-nowrap transition-all duration-150 ease-[cubic-bezier(0.455,0.03,0.515,0.955)] hover:rounded-2xl"
                >
                  {secondaryButtonText}
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              ease: [0.645, 0.045, 0.355, 1],
              delay: 0.2,
            }}
            className="col-span-12 lg:col-span-6 bg-white rounded-[40px] flex justify-center items-center aspect-square overflow-hidden"
            style={{
              backgroundImage:
                "url(https://storage.googleapis.com/storage.magicpath.ai/user/282171029206482944/assets/882ef3dd-3459-4fd8-a939-52ceada51d5c.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: "1",
            }}
          >
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              poster={posterSrc}
              className="block w-full h-full object-cover"
              style={{
                backgroundImage:
                  "url(https://storage.googleapis.com/storage.magicpath.ai/user/282171029206482944/assets/38855cdf-b40a-445b-a17c-c2bbb35c884e.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: "1",
                display: "none",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
