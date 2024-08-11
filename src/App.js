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
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
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
    "The team successfully completed the initial project phase, marking a significant milestone.",
    "A major bug was identified and fixed, which improved the overall system performance.",
    "User feedback indicated a need for additional features, leading to a new development sprint.",
    "The client requested urgent changes to the project scope, necessitating immediate adjustments.",
    "An unexpected server outage occurred, but the team managed to restore service promptly.",
    "New integrations were added to enhance the product's functionality and user experience.",
    "The project team held a review meeting to discuss progress and outline the next steps.",
    "A comprehensive testing phase concluded with positive results, validating the project's success."
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
                  <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
                    <InstagramIcon />
                  </IconButton>
                </Box>
              </Box>
              <Timeline position="alternate">
                {randomEvents.map((event, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: 'primary.main' }}>
                        <BusinessIcon sx={{ color: 'white' }} />
                      </TimelineDot>
                      {index < randomEvents.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="body1" paragraph sx={{ color: darkMode ? '#ffffff' : '#000000' }}>
                        {event}
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
