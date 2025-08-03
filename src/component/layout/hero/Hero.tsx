import { Box, Typography, IconButton } from "@mui/material"
import GitHubIcon from "@mui/icons-material/GitHub"
import { FaDiscord } from "react-icons/fa"
import Typewriter from "typewriter-effect"
import { PyrenzBlueButton } from "~/theme"
import { useIntersectionObserver } from "@components"
import { motion } from "framer-motion"

interface HeroProps {
  id: string
  onMyCreationsClick: () => void
  onMyExperienceClick: () => void
  dataWatchId?: string
}

export function Hero({
  id,
  onMyCreationsClick,
  onMyExperienceClick,
  dataWatchId
}: HeroProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>(
    {},
    { threshold: 0.3, watchId: dataWatchId }
  )

  return (
    <Box
      id={id}
      data-watch-id={dataWatchId}
      ref={ref}
      sx={{
        textAlign: "left",
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, sm: 6, md: 8 },
        mt: 6,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.8s ease, transform 0.8s ease"
      }}
    >
      <Typography
        variant="h2"
        gutterBottom
        sx={{
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          gap: "0.4em",
          fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3rem" },
          flexWrap: "wrap"
        }}
      >
        <motion.span
          style={{ display: "inline-block" }}
          animate={{
            rotate: [0, 20, -10, 20, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 2
          }}
        >
          👋
        </motion.span>
        Hi, I’m
        <Box
          component="span"
          sx={{
            background: "linear-gradient(180deg, #4da3ff 55%, #4da3ff 100%)",
            padding: "0.1em 0.35em",
            borderRadius: "4px",
            boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.15)",
            color: "#fff",
            display: "inline-block",
            fontSize: { xs: "1.6rem", sm: "2rem", md: "2.5rem" }
          }}
        >
          Whitzscott
        </Box>
      </Typography>

      <Typography
        variant="h6"
        sx={{
          opacity: 0.9,
          fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
          mt: 1,
          minHeight: "3.2rem",
          maxWidth: "600px",
          whiteSpace: "normal",
          wordWrap: "break-word"
        }}
      >
        <Typewriter
          options={{
            strings: [
              "Hey there, I'm a passionate dev from the Philippines.",
              "I create cool and functional web apps.",
              "Let’s build something amazing together!"
            ],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 20
          }}
        />
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          mt: 3
        }}
      >
        <PyrenzBlueButton
          sx={{
            flex: 1,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            py: { xs: 1.2, sm: 1.5 }
          }}
          onClick={onMyCreationsClick}
        >
          My Creations
        </PyrenzBlueButton>
        <PyrenzBlueButton
          sx={{
            flex: 1,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            py: { xs: 1.2, sm: 1.5 }
          }}
          onClick={onMyExperienceClick}
        >
          My Experience
        </PyrenzBlueButton>
      </Box>

      <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
        <IconButton
          component="a"
          href="https://github.com/Whitzzscott/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.4)"
            }
          }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://discord.gg/zTcyP4WB8h"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#fff",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "scale(1.1)",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.4)"
            }
          }}
        >
          <FaDiscord size={28} />
        </IconButton>
      </Box>
    </Box>
  )
}
