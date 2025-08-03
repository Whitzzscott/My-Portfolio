import { useIntersectionObserver } from "@components"
import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  useTheme,
  useMediaQuery
} from "@mui/material"
import {
  TimelineContainer,
  VerticalLine,
  Branch,
  Dot
} from "~/theme"
import { motion } from "framer-motion"

const experienceData = [
  {
    period: "August 2025 - Present",
    description:
      "Continued the creation of PyrenzAI, developed other projects to improve my skills, and contributed to the development of YourChat."
  },
  {
    period: "February 2025 - August 2025",
    description:
      "Created my first successful project, PyrenzAI. What started as a simple chat app has now become a customizable, rich-content AI website."
  },
  {
    period: "February 2024 - January 2025",
    description:
      "Created my first extension, 'Better Sakura,' and learned how to build extensions"
  }
]

interface ExperienceProps {
  id: string
  dataWatchId?: string
}

interface MobileDotProps {
  style?: React.CSSProperties
}

const MobileDot = ({ style }: MobileDotProps) => (
  <Box
    sx={{
      position: "absolute",
      width: 12,
      height: 12,
      backgroundColor: "#4da3ff",
      borderRadius: "50%",
      transform: "translateX(-50%)",
      boxShadow: "0 0 8px 2px rgba(77, 163, 255, 0.7)",
      zIndex: 2,
      ...style
    }}
  />
)

const MobileConnectingLine = () => (
  <Box
    sx={{
      width: 2,
      height: 85,
      backgroundColor: "#4da3ff",
      position: "absolute",
      left: "50%",
      bottom: -75,
      transform: "translateX(-50%)",
      zIndex: 1
    }}
  >
    <MobileDot style={{ top: 0, left: "50%" }} />
    <MobileDot style={{ bottom: 0, left: "50%" }} />
  </Box>
)

export function Experience({ id, dataWatchId }: ExperienceProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>(
    {},
    { threshold: 0.3 }
  )
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Box
      id={id}
      data-watch-id={dataWatchId}
      ref={ref}
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        color: "#fff",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Container
        maxWidth="md"
        sx={{ px: { xs: 1, md: 0 }, position: "relative" }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: theme.spacing(4),
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "3rem" }
          }}
        >
          My Experience
        </Typography>
        <TimelineContainer>
          {!isMobile && <VerticalLine />}
          <List
            sx={{ maxWidth: "700px", mx: "auto", position: "relative" }}
          >
            {experienceData.map(({ period, description }, idx) => {
              const side = idx % 2 === 0 ? "left" : "right"
              return (
                <ListItem
                  key={idx}
                  sx={{
                    mb: theme.spacing(8),
                    position: "relative",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    justifyContent: isMobile
                      ? "center"
                      : side === "left"
                      ? "flex-start"
                      : "flex-end",
                    alignItems: isMobile ? "center" : "flex-start",
                    px: { xs: 1, md: 2 }
                  }}
                >
                  {!isMobile && <Dot />}
                  {!isMobile && <Branch side={side} />}
                  <motion.div
                    whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 40, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.2,
                      type: "spring",
                      stiffness: 80
                    }}
                    style={{
                      zIndex: 3,
                      position: "relative",
                      width: isMobile ? "100%" : "auto"
                    }}
                  >
                    <Box
                      sx={{
                        bgcolor: "rgba(77, 163, 255, 0.15)",
                        borderRadius: 2,
                        p: { xs: 2, md: 3 },
                        maxWidth: { xs: "100%", md: 300 },
                        textAlign: isMobile
                          ? "center"
                          : side === "left"
                          ? "right"
                          : "left",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        ml: isMobile
                          ? 0
                          : side === "left"
                          ? { xs: 0, md: -10 }
                          : theme.spacing(2),
                        mr: isMobile
                          ? 0
                          : side === "left"
                          ? theme.spacing(2)
                          : { xs: 0, md: -10 }
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontStyle: "italic",
                          color: "gray",
                          mb: 1,
                          fontSize: {
                            xs: "0.75rem",
                            md: "0.875rem"
                          }
                        }}
                      >
                        {period}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          opacity: 0.85,
                          fontSize: {
                            xs: "0.75rem",
                            md: "0.875rem"
                          }
                        }}
                      >
                        {description}
                      </Typography>
                    </Box>
                  </motion.div>
                  {isMobile &&
                    idx < experienceData.length - 1 && (
                      <MobileConnectingLine />
                    )}
                </ListItem>
              )
            })}
          </List>
        </TimelineContainer>
      </Container>
    </Box>
  )
}
