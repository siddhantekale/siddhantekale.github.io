import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { CssBaseline, Grid, Box, IconButton, Switch, AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Avatar } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import BusinessIcon from '@mui/icons-material/Business';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AmbiguityThought from './AmbiguityThought';
import { Link as RouterLink } from 'react-router-dom';
import { CardMedia } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// Add these new imports for the icons
import PersonIcon from '@mui/icons-material/Person';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import useMediaQuery from '@mui/material/useMediaQuery';
import Thoughts from './Thoughts';
import EB1Journey from './EB1Journey';
import { useTheme } from '@mui/material/styles';

function AppContent() {
  const [lightMode, setLightMode] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [items, setItems] = useState([]);
  const isMobile = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const location = useLocation();

  // ... rest of the component logic ...

  const menuItems = [
    { text: 'About Me', icon: <PersonIcon />, path: '/' },
    { text: 'Thoughts', icon: <LightbulbIcon />, path: '/thoughts' },
    { text: 'EB-1 Journey', icon: <FlightTakeoffIcon />, path: '/eb1-journey' },
  ];

  const drawer = (
    <Box onClick={() => setDrawerOpen(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem button key={item.text} component={RouterLink} to={item.path}>
            <ListItemIcon sx={{ color: lightMode ? 'black' : 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleScroll = (containerRef) => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    if (scrollLeft + clientWidth >= scrollWidth) {
      setItems((prevItems) => [...prevItems, ...Array.from({ length: 10 }, (_, i) => `Card ${prevItems.length + i + 1}`)]);
    }
  };

  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const container1 = scrollRef1.current;
    const container2 = scrollRef2.current;

    if (container1) container1.addEventListener('scroll', () => handleScroll(scrollRef1));
    if (container2) container2.addEventListener('scroll', () => handleScroll(scrollRef2));

    return () => {
      if (container1) container1.removeEventListener('scroll', () => handleScroll(scrollRef1));
      if (container2) container2.removeEventListener('scroll', () => handleScroll(scrollRef2));
    };
  }, []);

  const handleArrowClick = (ref, direction) => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      ref.current.scrollTo({
        left: scrollLeft + (direction === 'left' ? -clientWidth : clientWidth),
        behavior: 'smooth',
      });
    }
  };
  
  const [displayedText, setDisplayedText] = useState('');
  const fullName = 'Siddhant Ekale';

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < fullName.length) {
          index++;
          return fullName.slice(0, index);
        }
        clearInterval(intervalId);
        return prev;
      });
    }, 150); // Adjust this value to control the speed of the animation

    return () => clearInterval(intervalId);
  }, []);

  const workEvents = [
    {
      company: "Palantir Technologies",
      description: "Current Employer",
      icon: BusinessIcon,
      fontSize: 24,
      logo: lightMode ? "/palantir_logo_light_mode.png" : "/palantir_logo_dark_mode.jpeg",
    },
    {
      company: "",
      description: "[2021-2024] Currently lead a team of engineers and compliance specialists who develop Palantir's GxP platform for clinical use-cases ranging from site-selection to RWE analysis.",
      icon: AddCircleIcon,
      fontSize: 2,
    },
    {
      company: "",
      description: "[2021-2024] Currently lead a team of extremely talented architects and account managers to build product demos (Titan Industries) that show end to end product capability for Palantir's AI Platform.",
      icon: AddCircleIcon,
      fontSize: 2,
    },
    {
      company: "",
      description: "[2020-2021] Developed applications for the NHS at the brink of and through COVID-19 that allowed for equitable allocation of ICU nad PPE equipment.",
      icon: AddCircleIcon,
      fontSize: 2,
    },
    {
      company: "",
      description: "[2019-2020] Developed User applications that are currently thwarting nation state cyber-security attacks.",
      icon: AddCircleIcon,
      fontSize: 2,
    },
    {
      company: "",
      description: "[2019-2020] Wrote data pipelines and models that detected fraud amongst trillion row transaction datasets.",
      icon: AddCircleIcon,
      fontSize: 2,
    },
    {
      company: "Digital Control Inc.",
      description: "Programmed a custom transmitter / reciever for directional drilling.",
      icon: BusinessIcon,
      fontSize: 24,
      logo: "/digital_control_incorporated_logo.jpeg"
    },
    {
      company: "Helitrak Inc.",
      description: "Programmed Autopilots and Safety Trigger for the Collective for R22 and R44 Helicopters.",
      icon: BusinessIcon,
      fontSize: 24,
      logo: "/helitrak.png"
    },
  ];

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#121212',
        paper: '#1d1d1d',
      },
      text: {
        primary: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
      <CssBaseline />
      <AppBar 
          position="static" 
          elevation={0} 
          sx={{ 
            backgroundColor: 'transparent',
            boxShadow: 'none'
          }}
        >
          <Toolbar>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={() => setDrawerOpen(true)}
                  sx={{ mr: 2, color: lightMode ? 'black' : 'white' }}
                >
                  <MenuIcon />
                </IconButton>
                <Box sx={{ flexGrow: 1 }} />
              </>
            ) : (
              <Box sx={{ flexGrow: 1, display: 'flex' }}>
                {menuItems.map((item) => (
                  <Button 
                    key={item.text}
                    color="inherit" 
                    component={RouterLink} 
                    to={item.path} 
                    startIcon={item.icon}
                    selected={location.pathname === item.path}
                    sx={{ 
                      color: lightMode ? 'black' : 'white',
                      '&.Mui-selected': {
                        backgroundColor: lightMode ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                      },
                      '&:hover': {
                        backgroundColor: lightMode ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.2)',
                      },
                      mx: 2, // Add horizontal margin
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
            <IconButton 
              onClick={() => setLightMode(!lightMode)} 
              color="inherit"
              sx={{ color: lightMode ? 'black' : 'white' }}
            >
              {lightMode ? <WbSunnyIcon /> : <Brightness2Icon />}
            </IconButton>
            <Switch 
              checked={lightMode} 
              onChange={() => setLightMode(!lightMode)} 
              color="default"
            />
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          {drawer}
        </Drawer>
        <Routes>
          <Route path="/thoughts" element={<Thoughts />} />
          <Route path="/eb1-journey" element={<EB1Journey />} />
          <Route path="/" element={
            <Grid
              container
              direction="column"
              spacing={2}
              style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {/* First Row */}
              <Grid item xs={12} style={{ flex: 1, display: 'grid', gridTemplateRows: 'auto 1fr' }}>
                <Box
                  sx={{
                    p: 2,
                    maxWidth: '1200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    backgroundColor: 'transparent',
                  }}
                >
                  <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', letterSpacing: 1 }}>
                    Siddhant Ekale
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', letterSpacing: 1 }}>
                    Senior Architect | Engineer
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    gutterBottom 
                    sx={{ 
                      textAlign: 'center', 
                      fontStyle: 'italic', 
                      maxWidth: '600px', 
                      margin: '0 auto',
                      [theme.breakpoints.down('sm')]: {
                        fontSize: '0.875rem',
                        '& br': {
                          display: 'none',
                        }
                      },
                    }}
                  >
                    The tech maverick who makes computers help doctors,
                    <br />
                    catch bad guys, and solve really big problems
                  </Typography>
                  <Box
                    sx={{
                      width: '100%',
                      maxWidth: '800px',
                      bgcolor: 'background.paper',
                      flexGrow: 1,
                      overflowX: 'auto',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      p: 2,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        alt="Placeholder"
                        src="/sidekale.png"
                        sx={{ width: 150, height: 150, mr: 2 }}
                      />
                      <Box>
                        <IconButton href="https://x.com/sidekale" target="_blank" aria-label="Twitter">
                          <TwitterIcon />
                        </IconButton>
                        <IconButton href="https://www.linkedin.com/in/siddhantekale/" target="_blank" aria-label="LinkedIn">
                          <LinkedInIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'left', mb: 2, width: '100%' }}>
                      <Timeline position="right" sx={{ width: '100%' }}>
                        {workEvents.map((event, index) => (
                          <TimelineItem key={index} sx={{ '&:before': { display: 'none' } }}>
                            <TimelineSeparator>
                              <TimelineDot 
                                sx={{ 
                                  bgcolor: 'transparent', 
                                  padding: 0, 
                                  overflow: 'visible',
                                  width: 40, 
                                  height: 40, 
                                  display: 'flex', 
                                  justifyContent: 'center', 
                                  alignItems: 'center',
                                  boxShadow: 'none',
                                }}
                              >
                                {event.logo ? (
                                  <Box
                                    sx={{
                                      width: 40,
                                      height: 40,
                                      borderRadius: '50%',
                                      overflow: 'hidden',
                                    }}
                                  >
                                    <CardMedia
                                      component="img"
                                      src={event.logo}
                                      alt={event.company}
                                      sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                      }}
                                    />
                                  </Box>
                                ) : (
                                  <Box
                                    sx={{
                                      width: 24,
                                      height: 24,
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      bgcolor: 'primary.main',
                                      borderRadius: '50%',
                                    }}
                                  >
                                    <event.icon sx={{ color: 'white', fontSize: 16 }} />
                                  </Box>
                                )}
                              </TimelineDot>
                              {index < workEvents.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                              <Typography variant="h6" sx={{ color: lightMode ? '#000000': '#ffffff' }}>
                                {event.company}
                              </Typography>
                              <Typography variant="body2" sx={{ color: lightMode ? '#000000': '#ffffff' }}>
                                {event.description}
                              </Typography>
                            </TimelineContent>
                          </TimelineItem>
                        ))}
                      </Timeline>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              {/* <Typography variant="h4" gutterBottom>
                Thoughts
              </Typography>
              <Grid item xs={12}>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  sx={{ overflowX: 'auto', p: 2, maxWidth: '1200px', flexWrap: 'nowrap' }}
                >
                  {items.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                      <RouterLink 
                        to={item.url} 
                        style={{ textDecoration: 'none' }}
                      >
                        <Card 
                          sx={{ 
                            minWidth: 275, 
                            transition: '0.3s', 
                            '&:hover': { 
                              transform: 'scale(1.05)', 
                              boxShadow: '5px 5px 15px rgba(0,0,0,0.3)', 
                            } 
                          }}
                        >
                          <CardMedia
                            component="img"
                            height="140"
                            image={item.imagePath}
                            alt={item.title}
                          />
                          <CardContent>
                            <Typography variant="h5" component="div">
                              {item.title}
                            </Typography>
                            <Typography variant="body2">
                              {item.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </RouterLink>
                    </Grid>
                  ))}
                </Grid>
              </Grid> */}
            </Grid>
          } />
        </Routes>
      </ThemeProvider>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;