import React, { useState, useEffect, useRef } from 'react';
import { Grid, Box, Card, CardContent, Typography, Avatar } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function App() {
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

  return (
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
            backgroundColor: '#f5f5f5',
            maxWidth: '1200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: '#f5f5f5',
          }}
        >
          <Typography variant="h4" gutterBottom>
            My Story
          </Typography>
        </Box>
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
          <Avatar
            alt="Placeholder"
            src="https://via.placeholder.com/150"
            sx={{ width: 100, height: 100, mb: 2 }}
          />
          <Timeline position="alternate">
            {randomEvents.map((event, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot sx={{ bgcolor: 'primary.main' }} />
                  {index < randomEvents.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="body1" paragraph>
                    {event}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
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
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Derivational Thinking
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            overflowX: 'auto',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1200px',
            p: 2,
          }}
          ref={scrollRef1}
        >
          <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            {items.map((item, index) => (
              <Card key={index} sx={{ height: '80%', minWidth: 200, mx: 1 }}>
                <CardContent>
                  <Typography variant="h6">{item}</Typography>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula ullamcorper sapien, ac pulvinar eros pharetra nec. Fusce efficitur felis nec libero fermentum, a cursus risus aliquam.
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Grid>

      {/* Third Row */}
      <Grid item xs={12} style={{ flex: 1, display: 'grid', gridTemplateRows: 'auto 1fr' }}>
        <Box
          sx={{
            p: 2,
            maxWidth: '1200px',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            backgroundColor: '#fff',
          }}
        >
          <Typography variant="h4" gutterBottom>
            Independent Thinking
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            overflowX: 'auto',
            display: 'flex',
            alignItems: 'center',
            maxWidth: '1200px',
            p: 2,
          }}
          ref={scrollRef2}
        >
          <Box sx={{ display: 'flex', height: '100%', width: '100%' }}>
            {items.map((item, index) => (
              <Card key={index} sx={{ height: '80%', minWidth: 200, mx: 1 }}>
                <CardContent>
                  <Typography variant="h6">{item}</Typography>
                  <Typography variant="body2">
                    Quisque lacinia, nulla nec luctus elementum, libero risus cursus libero, at condimentum orci nulla sed purus. Curabitur in lacus ac lorem interdum vestibulum ut a elit.
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
