import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import './StockChart.css';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, zoomPlugin);

const StockChart = ({ ticker }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy previous chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Sample data for demonstration purposes
    const labels = Array.from({ length: 100 }, (_, i) => `Day ${i + 1}`);
    const data = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);

    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: `Stock Price of ${ticker}`,
          data,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          x: {
            title: {
              display: true,
              text: 'Day'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Price (USD)'
            }
          }
        },
        plugins: {
          zoom: {
            pan: {
              enabled: true,
              mode: 'x' // Only allow panning in the x direction
            },
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true
              },
              mode: 'x' // Only allow zooming in the x direction
            }
          }
        }
      }
    });

    // Cleanup on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [ticker]);

  return (
    <Box sx={{ p: 2 }}>
      <div className="chart-container">
        <canvas ref={chartRef} />
      </div>
    </Box>
  );
};

export default StockChart;
