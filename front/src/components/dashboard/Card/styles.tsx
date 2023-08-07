import { Grid, styled } from "@mui/material";

export const CardWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: '2rem',
  borderRadius: '.5rem',
  boxShadow: theme.shadows[3],
}));