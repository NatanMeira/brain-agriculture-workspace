import { Typography, Toolbar, Box, AppBar } from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture';

export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <AgricultureIcon sx={{
            width: '3rem',
            height: '3rem',
          }} />
          <Typography variant="h5" fontWeight="bold" marginLeft={1}>
            Brain Agriculture
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
