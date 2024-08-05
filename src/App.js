import React, { useState } from 'react';
import { Container, AppBar, Toolbar, Typography, TextField, Button, Box, Grid } from '@mui/material';
import StockChart from './StockChart';

function App() {
  const [ticker, setTicker] = useState('');
  const [currentTicker, setCurrentTicker] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setCurrentTicker(ticker);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" component="div">
            Trends App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Box sx={{ mt: 2, mb: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <TextField
                  label="Enter Ticker"
                  variant="outlined"
                  value={ticker}
                  onChange={(e) => setTicker(e.target.value)}
                />
              </Grid>
              <Grid item>
                <Button variant="contained" color="primary" type="submit">
                  Show Chart
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
        {currentTicker && (
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12}>
              <Typography variant="h6" component="div">
                Stock Price Over Time for {currentTicker}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <StockChart ticker={currentTicker} />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default App;
