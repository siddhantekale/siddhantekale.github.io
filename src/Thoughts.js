import React from 'react';
import { Typography, Container, Paper, Grid } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function Thoughts() {
    console.log('Thoughts component rendered');
    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>
                        <LightbulbIcon fontSize="large" color="primary" />
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Thoughts
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body1" paragraph>
                    Welcome to my thoughts page. Here, I share my ideas, reflections, and insights on various topics.
                </Typography>
                {/* Add more content here as needed */}
            </Paper>
        </Container>
    );
}

export default Thoughts;