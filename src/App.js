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
import { Link } from '@mui/material';
import { CardMedia } from '@mui/material';

function App() {
  const [lightMode, setLightMode] = useState(false);
  const [items, setItems] = useState(
    Array.from(
      { length: 4 }, (_, i) => ({
        title: `Card ${i + 1}`,
        description: `Description for Card ${i + 1}`,
        imagePath: `ambiguity_in_compute_science_projects.jpeg`, // replace with your actual image paths
      })
    )
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

  const randomEvents = [
    {
      company: "Palantir Technologies",
      description: "Current Employer",
      icon: BusinessIcon,
      fontSize: 24,
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
    },
    {
      company: "Helitrak Inc.",
      description: "Programmed Autopilots and Safety Trigger for the Collective for R22 and R44 Helicopters.",
      icon: BusinessIcon,
      fontSize: 24,
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
      <Grid
        container
        direction="column"
        spacing={2}
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {/* Dark Mode Toggle */}
        <Grid item xs={12} style={{ width: '100%', textAlign: 'right', padding: '10px' }}>
          <IconButton onClick={() => setLightMode(!lightMode)} color="inherit">
            {lightMode ? <Brightness2Icon /> : <WbSunnyIcon />}
          </IconButton>
          <Switch checked={lightMode} onChange={() => setLightMode(!lightMode)} />
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
            <Typography variant="h8" gutterBottom>
              Senior Architect | Engineer | Nomad
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
              <Timeline position="alternate">
                {randomEvents.map((event, index) => (
                  <TimelineItem key={index}>
                    <TimelineSeparator>
                      <TimelineDot sx={{ bgcolor: 'primary.main' }}>
                        <event.icon sx={{ color: 'white', fontSize: event.fontSize }} />
                      </TimelineDot>
                      {index < randomEvents.length - 1 && <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ color: lightMode ? '#000000': '#ffffff'  }}>
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
        </Grid>
        <Typography variant="h4" gutterBottom>
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
                <Link href={`/${item.title.replace(' ', '-').toLowerCase()}`} target="_blank" style={{ textDecoration: 'none' }}>
                  <Card sx={{ minWidth: 275 }}>
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
                </Link>
              </Grid>
              ))}
            </Grid>
          </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;