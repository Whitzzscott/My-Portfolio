import { Box, Container, Typography, Avatar, Stack } from "@mui/material";
import { motion } from "framer-motion";
import { PyrenzBlueButton } from "~/theme";

const creations = [
  {
    title: "PyrenzAI",
    description: "A customizable, rich-content AI website that started as a chat app.",
    date: "February 2025",
    buttons: [
      {
        title: "Live Demo",
        link: "https://pyrenzai.com",
        image: "/images/pyrenzai.png",
      },
      {
        title: "GitHub",
        link: "https://github.com/whitzzscott/pyrenzai",
        image: "/images/pyrenzai.png",
      },
    ],
  },
  {
    title: "Better Sakura",
    description: "My first browser extension to enhance user experience on Sakura School.",
    date: "February 2024",
  },
  {
    title: "YourChat",
    description: "Collaborative messaging platform similar to pyrenzai but more on chatting with alot of models, ranging from free to premium models",
    date: "August 2025",
    buttons: [
      {
        title: "Preview",
        link: "https://yourchat.pro",
        image: "/images/logo.svg",
      },
      {
        title: "GitHub",
        link: "https://github.com/yourchat-pro",
        image: "/images/logo.svg",
      },
    ],
  },
];

interface ButtonType {
  title: string;
  link: string;
  image: string;
}

interface CreationItem {
  title: string;
  description: string;
  date: string;
  buttons?: ButtonType[]; 
}

interface MyCreationsProps {
  id: string;
  dataWatchId?: string;
  creationsList?: CreationItem[]; 
}

export function MyCreations({
  id,
  dataWatchId,
  creationsList = creations,
}: MyCreationsProps) {
  return (
    <Box
      id={id}
      data-watch-id={dataWatchId}
      sx={{
        minHeight: "100vh",
        py: { xs: 4, md: 6 },
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 6,
            textAlign: "center",
            fontSize: { xs: "1.5rem", md: "3rem" },
          }}
        >
          My Creations
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {creationsList.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1, ease: "easeOut" }}
              style={{
                flex: "1 1 280px",
                maxWidth: "320px",
                borderRadius: "16px",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                padding: "20px",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  background: "linear-gradient(to right, #4da3ff, #89c4ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#cfd8dc", mb: 2, fontSize: "0.95rem", lineHeight: 1.6 }}
              >
                {item.description}
              </Typography>
              <Typography variant="caption" sx={{ color: "#90a4ae", fontStyle: "italic" }}>
                {item.date}
              </Typography>

              {item.buttons && item.buttons.length > 0 && (
                <Stack spacing={1.5} mt={3}>
                  {item.buttons.map((btn, i) => (
                    <PyrenzBlueButton
                      key={i}
                      href={btn.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={
                        <Avatar
                          src={btn.image}
                          sx={{
                            width: 24,
                            height: 24,
                            backgroundColor: "transparent",
                          }}
                          alt={btn.title}
                        />
                      }
                      sx={{
                        justifyContent: "flex-start",
                        fontSize: "0.9rem",
                        px: 2,
                        py: 1.1,
                      }}
                    >
                      {btn.title}
                    </PyrenzBlueButton>
                  ))}
                </Stack>
              )}
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
