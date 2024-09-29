import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardMedia, Divider, useMediaQuery, useTheme } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

// Sample data for thoughts with dates
const thoughts = [
  {
    id: 1,
    title: '[Coming Soon...] Embracing Ambiguity - A Recipe for Success',
    description: 'I tried conformance - it didn\'t work',
    image: '/embracing_ambiguity.png',
    date: '2023-04-15',
  },
  {
    id: 2,
    title: '[Coming Soon...] Return of the Dev Environment',
    description: 'I became a business person.. what?',
    image: '/non_tech_person.jpeg',
    date: '2023-04-15',
  },
  {
    id: 3,
    title: '[Coming Soon...] Clinical Data Management',
    description: 'Why is it so broken? Are we slowing down drug development?',
    image: '/clinical_data_management.jpeg',
    date: '2023-04-14',
  },
  {
    id: 4,
    title: '[Coming Soon...] Sytems Thinking Reinvented',
    description: '...',
    image: '/ambiguity_in_compute_science_projects.jpeg',
    date: '2023-04-14',
  },
  // Add more thought objects as needed
];

function Thoughts() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Group thoughts by date
  const groupedThoughts = thoughts.reduce((acc, thought) => {
    (acc[thought.date] = acc[thought.date] || []).push(thought);
    return acc;
  }, {});

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {Object.entries(groupedThoughts).map(([date, dateThoughts]) => (
        <React.Fragment key={date}>
          <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
            {new Date(date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Typography>
          <Divider sx={{ mb: 2 }} />
          <Grid container spacing={3}>
            {dateThoughts.map((thought) => (
              <Grid item xs={12} key={thought.id}>
                <Card sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', height: '100%' }}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: isMobile ? '100%' : 151,
                      height: isMobile ? 200 : 'auto',
                    }}
                    image={thought.image}
                    alt={thought.title}
                  />
                  <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="h2" variant="h6" gutterBottom>
                      {thought.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {thought.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </Container>
  );
}

export default Thoughts;