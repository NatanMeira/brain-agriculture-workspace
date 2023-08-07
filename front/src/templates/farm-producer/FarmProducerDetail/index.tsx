import { Button, CircularProgress, Container, Grid, Link, Typography } from '@mui/material';
import { BaseTemplate } from '../../Base';
import { FarmProducer } from '@/domain/entity';
import { FarmProducerForm } from '@/components/farm-producer/Form';
import { Edit } from '@mui/icons-material';

type FarmProducerDetailTemplateProps = {
  data: FarmProducer;
};

export function FarmProducerDetailTemplate({
  data,
}: FarmProducerDetailTemplateProps) {
  return (
    <BaseTemplate>
      <Container>
        <Typography variant="h4" fontWeight="semibold" paddingY={2}>
          Detalhes | Produtor rural
        </Typography>
        <Grid container justifyContent="end">
          <Grid item>
            <Link href={`/farm-producer/edit/${data?.id}`}>
              <Button
                variant="contained"
                size="medium"
                sx={{
                  height: '100%',
                }}
                >
                <Edit
                  sx={{
                    marginRight: '0.5rem',
                  }}
                />
                Editar
              </Button>
            </Link>
          </Grid>
        </Grid>
        {data ? (
          <FarmProducerForm disabled={true} data={data} />
        ) : (
          <>
            <CircularProgress />
            <Typography>Carregando...</Typography>
          </>
        )}
      </Container>
    </BaseTemplate>
  );
}
