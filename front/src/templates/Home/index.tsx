import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { BaseTemplate } from '../Base';
import { Card, Charts } from '@/components/dashboard';
import { Agriculture, House } from '@mui/icons-material';
import { GetDashboardDataDto } from '@/services/dashboard/dto';

type HomeTemplateProps = {
  data?: GetDashboardDataDto;
  isLoading?: boolean;
};

export function HomeTemplate({ data, isLoading }: HomeTemplateProps) {
  return (
    <BaseTemplate>
      <Container>
        <Typography variant="h4" fontWeight="semibold" paddingY={2}>
          Dashboard
        </Typography>
        {isLoading || !data ? (
          <>
            <CircularProgress />
            <Typography>Carregando...</Typography>
          </>
        ) : (
          <>
            <Grid
              container
              display="grid"
              gridTemplateColumns="1fr 1fr"
              gap={2}
            >
              <Card
                title="Total de fazendas"
                icon={<House sx={{ width: '5rem', height: '5rem' }} />}
                count={String(data.totalFarms)}
              />
              <Card
                title="Área total de fazendas"
                icon={<Agriculture sx={{ width: '5rem', height: '5rem' }} />}
                count={data.totalFarmsAreaInHectares + ' ha'}
              />
            </Grid>
            <Charts 
              farmsByPlantedCrops={data.farmsByPlantedCrops}
              farmsByState={data.farmsByState}
              totalArableAreaInHectares={data.totalArableAreaInHectares}
              totalVegetationAreaInHectares={data.totalVegetationAreaInHectares}
            />
          </>
        )}
      </Container>
    </BaseTemplate>
  );
}
