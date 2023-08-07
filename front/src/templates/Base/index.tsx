import { Header, Menu } from '@/components/base';
import { Grid } from '@mui/material';

type BaseTemplateProps = {
  children: React.ReactNode;
};

export function BaseTemplate({ children }: BaseTemplateProps) {
  return (
    <>
      <Header />
      <Grid container height="100%" display="flex">
        <Grid item xs={2} height="100%">
          <Menu />
        </Grid>
        <Grid item xs={10} height="100%">
          {children}
        </Grid>
      </Grid>
    </>
  );
}
