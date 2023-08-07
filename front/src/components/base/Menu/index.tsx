import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material';
import { Dashboard, Agriculture } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const menuItems = [
  {
    label: 'Dashboard',
    href: '/',
    icon: <Dashboard />,
  },
  {
    label: 'Produtores Rurais',
    href: '/farm-producer',
    icon: <Agriculture />,
  },
];

export function Menu() {
  const theme = useTheme();
  const router = useRouter();

  function isActive(href: string) {
    return router.pathname === href;
  }

  return (
    <aside style={{
      height: '100%',
    }}>
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: theme.palette.secondary.main,
          height: '100%',
        }}
      >
        <List>
          {menuItems.map((item) => (
            <Link
              href={item.href}
              key={item.label}
              style={{
                textDecoration: 'none',
              }}
            >
              <ListItem
                disablePadding
                sx={{
                  backgroundColor: isActive(item.href)
                    ? theme.palette.secondary.light
                    : 'inherit',
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText>
                    <Typography color="black" fontWeight="semibold">
                      {item.label}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </aside>
  );
}
