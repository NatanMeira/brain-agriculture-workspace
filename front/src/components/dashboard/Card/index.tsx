import { Grid, Typography} from '@mui/material';
import * as S from './styles';

type CardProps = {
  title: string;
  icon: React.ReactNode;
  count: string;
};

export function Card({ icon, title, count }: CardProps) {
  return (
    <S.CardWrapper item>
      <Grid container spacing={2} alignItems="center">
        <Grid item>{icon}</Grid>
        <Grid item>
          <Typography fontWeight="semibold" fontSize="1.5rem">
            {title}
          </Typography>
          <Typography fontWeight="bold" fontSize="2rem">
            {count}
          </Typography>
        </Grid>
      </Grid>
    </S.CardWrapper>
  );
}
