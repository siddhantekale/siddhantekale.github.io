import React from 'react';
import { Typography, Container, Paper, Grid } from '@mui/material';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

function EB1Journey() {
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
                            EB1 Journey
                        </Typography>
                    </Grid>
                </Grid>
                <Typography variant="body1" paragraph>
                    Welcome to my EB1 Journey. Here, I provide a detailed account of my journey to becoming an EB1 immigrant.
                </Typography>
                {/* Add more content here as needed */}
            </Paper>
        </Container>
    );
}

export default EB1Journey;