import { Grid, styled } from "@mui/material";

export const ChartWrapper = styled(Grid)(() => ({
  border: '1px solid #ccc',
  borderRadius: '0.5rem',
  padding: '1rem 0',
  height: 350,
  ".recharts-legend-item-text": {
    color: '#000 !important',
  }
}));