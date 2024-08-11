import React, { useState, useEffect, useRef } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Grid, Box, Card, CardContent, Typography, Avatar, IconButton, Switch } from '@mui/material';
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

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [items, setItems] = useState(Array.from({ length: 10 }, (_, i) => `Card ${i + 1}`));

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

  const randomEvents = [
    {
      company: "Company A",
      description: "Led a team of engineers to develop a cloud-based solution.",
      icon: AddCircleIcon,
    },
    {
      company: "",
      description: "Currently lead a team of engineers and compliance specialists who develop Palantir's GxP platform for clinical use-cases ranging from site-selection to RWE analysis.",
      icon: AddCircleIcon,
    },
    {
      company: "",
      description: "Currently lead a team of extremely talented architects and account managers to build out product demos (Titan Industries) that show end to end product capability for Palantir's AI Platform.",
      icon: AddCircleIcon,
    },
    {
      company: "",
      description: "Developed applications for the NHS at the brink of and through COVID-19 that allowed for equitable allocation of ICU nad PPE equipment.",
      icon: AddCircleIcon,
    },
    {
      company: "",
      description: "Developed User applications that are currently thwarting nation state cyber-security attacks.",
      icon: AddCircleIcon,
    },
    {
      company: "",
      description: "Wrote data pipelines and models that detected fraud amongst trillion row transaction datasets.",
      icon: AddCircleIcon,
    },
    {
      company: "Digital Control Inc.",
      description: "Programmed a custom transmitter / reciever for directional drilling.",
      icon: BusinessIcon,
    },
    {
      company: "Helitrak Inc.",
      description: "Programmed Autopilots and Safety Trigger for the Collective for R22 and R44 Helicopters.",
      icon: BusinessIcon,
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
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Grid
        container
        direction="column"
        spacing={2}
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Dark Mode Toggle */}
        <Grid item xs={12} style={{ width: '100%', textAlign: 'right', padding: '10px' }}>
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <WbSunnyIcon /> : <Brightness2Icon />}
          </IconButton>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Grid>

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
            <Typography variant="h4" gutterBottom>
              Siddhant Ekale
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
                  src="https://via.placeholder.com/150"
                  sx={{ width: 100, height: 100, mr: 2 }}
                />
                <Box>
                  <IconButton href="https://twitter.com" target="_blank" aria-label="Twitter">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </IconButton>
                </Box>
              </Box>
              <Timeline position="alternate">
                {randomEvents.map((event, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: 'primary.main' }}>
                        <event.icon sx={{ color: 'white', fontSize: 10 }} />
                      </TimelineDot>
                      {index < randomEvents.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ color: darkMode ? '#ffffff' : '#000000' }}>
                        {event.company}
                      </Typography>
                      <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#000000' }}>
                        {event.description}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Box>
          </Box>
        </Grid>

        {/* Second Row */}
        <Grid item xs={12} style={{ flex: 1, display: 'grid', gridTemplateRows: 'auto 1fr' }}>
          <Box
            sx={{
              p: 2,
              maxWidth: '1200px',
              position: 'sticky',
              top: 0,
              zIndex: 1,
              backgroundColor: 'background.paper',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Derivational Thinking
            </Typography>
          </Box>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '1200px',
              p: 2,
            }}
          >
            <IconButton onClick={() => handleArrowClick(scrollRef1, 'left')}>
              <ArrowBackIosIcon />
            </IconButton>
            <Box
              sx={{
                height: '100%',
                overflowX: 'auto',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
              ref={scrollRef1}
            >
              <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
                {items.map((item, index) => (
                  <Card key={index} sx={{ height: '80%', minWidth: 200, mx: 1 }}>
                    <CardContent>
                      <Typography variant="h6">{item}</Typography>
                      <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#000000' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ullamcorper sapien, ac pulvinar eros pharetra nec. Fusce efficitur felis nec libero fermentum, a cursus risus aliquam.
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
            <IconButton onClick={() => handleArrowClick(scrollRef1, 'right')}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Third Row */}
        <Grid item xs={12} style={{ flex: 1, display: 'grid', gridTemplateRows: 'auto 1fr' }}>
        <Typography variant="h4" gutterBottom>
              Independent Thinking
            </Typography>
          <Box
            sx={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              maxWidth: '1200px',
              p: 2,
            }}
          >
            <IconButton onClick={() => handleArrowClick(scrollRef2, 'left')}>
              <ArrowBackIosIcon />
            </IconButton>
            <Box
              sx={{
                height: '100%',
                overflowX: 'auto',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
              }}
              ref={scrollRef2}
            >
              <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
                {items.map((item, index) => (
                  <Card key={index} sx={{ height: '80%', minWidth: 200, mx: 1 }}>
                    <CardContent>
                      <Typography variant="h6">{item}</Typography>
                      <Typography variant="body2" sx={{ color: darkMode ? '#ffffff' : '#000000' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ullamcorper sapien, ac pulvinar eros pharetra nec. Fusce efficitur felis nec libero fermentum, a cursus risus aliquam.
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Box>
            </Box>
            <IconButton onClick={() => handleArrowClick(scrollRef2, 'right')}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
