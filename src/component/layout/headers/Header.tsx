import { useState } from "preact/hooks";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { PyrenzMenu } from "~/theme";

interface HeaderProps {
  onHomeClick: () => void;
  onPortfolioClick: () => void;
  onContactClick: () => void;
}

export function Header({ onHomeClick, onPortfolioClick, onContactClick }: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const pages = [
    { name: "Home", onClick: onHomeClick },
    { name: "Portfolio", onClick: onPortfolioClick },
    { name: "Contact", onClick: onContactClick },
  ];

  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "none",
        color: "#fff",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, sm: 4 } }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            letterSpacing: 2,
            background: "linear-gradient(90deg, #ff7eb3, #65d6ce)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
            "&:hover": { opacity: 0.8 },
          }}
        >
          WZ
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleOpenMenu}
            >
              <MenuIcon />
            </IconButton>
            <PyrenzMenu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    handleCloseMenu();
                    page.onClick();
                  }}
                >
                  {page.name}
                </MenuItem>
              ))}
            </PyrenzMenu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={page.onClick}
                sx={{
                  fontWeight: "bold",
                  color: "rgba(255,255,255,0.85)",
                  position: "relative",
                  "&:hover:after": { width: "100%" },
                  "&:hover": { color: "#fff" },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
