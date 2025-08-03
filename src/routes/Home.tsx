import { Box, Container } from "@mui/material";
import { Header, Hero, AboutMe, Experience, MyCreations, BlueCursor } from "@components";

export function Portfolio() {
  const ids = ["introduction", "about", "contact", "creations", "experience"];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleContactClick = () => {
    const discordInvite = "https://discord.gg/zTcyP4WB8h";
    window.open(discordInvite, "_blank", "noopener,noreferrer");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box sx={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <Header
          onHomeClick={() => scrollToSection(ids[0])}
          onPortfolioClick={() => scrollToSection(ids[1])}
          onContactClick={handleContactClick}
        />
      </Box>
      <Box component="main" sx={{ flex: 1, overflow: 'auto' }}>
        <Container
          maxWidth="md"
          sx={{
            py: { xs: 6, md: 8 },
            textAlign: "center",
            color: "#fff"
          }}
        >
          <Hero
            id={ids[0]}
            onMyCreationsClick={() => scrollToSection(ids[3])}
            onMyExperienceClick={() => scrollToSection(ids[4])}
            dataWatchId="hero-trigger"
          />
        </Container>
        <Box id={ids[1]} data-watch-id="about-trigger" sx={{ mt: 12 }}>
          <AboutMe id={ids[1]} dataWatchId="about-trigger" />
        </Box>
        <Box id={ids[3]} data-watch-id="creations-trigger" sx={{ mt: 12 }}>
          <MyCreations id={ids[3]} dataWatchId="creations-trigger" />
        </Box>
        <Box id={ids[4]} data-watch-id="experience-trigger" sx={{ mt: 12 }}>
          <Experience id={ids[4]} dataWatchId="experience-trigger" />
        </Box>
      </Box>
      <BlueCursor />
    </Box>
  );
}
