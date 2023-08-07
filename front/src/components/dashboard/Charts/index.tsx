import { Grid, Typography, useTheme } from '@mui/material';
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';
import * as S from './styles';
import { CustomizedLabel } from './helper';
import { Translate } from '@/utils/lang';
import { getRandomColorBasedOn } from '@/utils/functions';

type ChartsProps = {
  totalArableAreaInHectares: number;
  totalVegetationAreaInHectares: number;
  farmsByState: { name: string; value: number }[];
  farmsByPlantedCrops: { name: string; value: number }[];
};

export function Charts({
  farmsByPlantedCrops,
  farmsByState,
  totalArableAreaInHectares,
  totalVegetationAreaInHectares,
}: ChartsProps) {
  const theme = useTheme()
  const translatedPlantedCropsData = farmsByPlantedCrops.map((item) => ({
    name: Translate(item.name),
    value: item.value,
  }));
  const usefulAreaData = [
    {
      name: 'Área agricultável',
      value: totalArableAreaInHectares,
    },
    {
      name: 'Área de vegetação',
      value: totalVegetationAreaInHectares,
    },
  ]
  return (
    <Grid
      container
      display="grid"
      gridTemplateColumns="1fr 1fr 1fr"
      gap={2}
      paddingY={2}
    >
      <S.ChartWrapper>
        <Typography fontWeight="bold" textAlign="center">
          Qtds de fazendas por estado
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              dataKey="value"
              data={farmsByState}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill={theme.palette.secondary.light}
              label={CustomizedLabel}
              labelLine={false}
            >
              {farmsByState.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getRandomColorBasedOn(theme.palette.primary.main)} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
      <S.ChartWrapper>
        <Typography fontWeight="bold" textAlign="center">
          Qtds de fazendas por cultura
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              data={translatedPlantedCropsData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill={theme.palette.secondary.main}
              label={CustomizedLabel}
              labelLine={false}
            >
              {translatedPlantedCropsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getRandomColorBasedOn(theme.palette.primary.main)} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
      <S.ChartWrapper>
        <Typography fontWeight="bold" textAlign="center">
          Uso do solo das fazendas
        </Typography>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              dataKey="value"
              isAnimationActive={true}
              data={usefulAreaData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill={theme.palette.secondary.dark}
              label={CustomizedLabel}
              labelLine={false}
            >
              {usefulAreaData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getRandomColorBasedOn(theme.palette.primary.main)} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout='vertical'/>
          </PieChart>
        </ResponsiveContainer>
      </S.ChartWrapper>
    </Grid>
  );
}
