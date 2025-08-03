import { Box, Container, Typography } from "@mui/material"
import { useIntersectionObserver } from "@components"
import { motion } from "framer-motion"

interface AboutMeProps {
  id: string
  dataWatchId?: string
}

const techStack = [
  "https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E",
  "https://img.shields.io/badge/typescript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white",
  "https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54",
  "https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white",
  "https://img.shields.io/badge/express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB",
  "https://img.shields.io/badge/mongodb-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white",
  "https://img.shields.io/badge/mysql-4479A1.svg?style=flat&logo=mysql&logoColor=white",
  "https://img.shields.io/badge/firebase-%23039BE5.svg?style=flat&logo=firebase",
  "https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white",
  "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white",
  "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=flat&logo=bootstrap&logoColor=white",
  "https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat&logo=figma&logoColor=white",
  "https://img.shields.io/badge/socket.io-black?style=flat&logo=socket.io&badgeColor=010101",
  "https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens",
  "https://img.shields.io/badge/render-%46E3B7.svg?style=flat&logo=render&logoColor=white",
  "https://img.shields.io/badge/netlify-%23000000.svg?style=flat&logo=netlify&logoColor=#00C7B7",
  "https://img.shields.io/badge/vercel-%23000000.svg?style=flat&logo=vercel&logoColor=white"
]

export function AboutMe({ id, dataWatchId }: AboutMeProps) {
  const { isVisible } = useIntersectionObserver<HTMLDivElement>(
    {},
    { threshold: 0.2, watchId: dataWatchId }
  )

  return (
    <motion.div
      id={id}
      data-watch-id={dataWatchId}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: { xs: 6, md: 10 },
          color: "#fff"
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              mb: 2
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: { xs: "2rem", md: "3rem" }
              }}
            >
              About Me
            </Typography>
            <motion.span
              style={{ display: "inline-block", fontSize: "2rem", originY: 0.6 }}
              animate={{
                rotate: [0, 20, -10, 20, -5, 0]
              }}
              transition={{
                repeat: Infinity,
                repeatType: "loop",
                duration: 1.5,
                ease: "easeInOut"
              }}
            >
              👋
            </motion.span>
          </Box>

          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              opacity: 0.9,
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 4,
              maxWidth: "700px",
              mx: "auto"
            }}
          >
Hi, I’m Whitzscott — a passionate web developer from the Philippines 🇵🇭.
I specialize in building clean, modern, and functional web applications. From robust and secure backend APIs to intuitive UI/UX with rich yet optimized animations and real-time interactivity, I'm driven to craft digital experiences that are both purposeful and impactful in today’s digital era.
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 3,
              textAlign: "center"
            }}
          >
            My Tech Stack
          </Typography>

          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.2
                }
              }
            }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "12px"
            }}
          >
            {techStack.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`tech-${index}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.85, y: 20 },
                  visible: { opacity: 1, scale: 1, y: 0 }
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                style={{
                  height: 30,
                  width: "auto",
                  maxWidth: "100%"
                }}
              />
            ))}
          </motion.div>
        </Container>
      </Box>
    </motion.div>
  )
}
