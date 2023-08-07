import { CircularProgress, Container, Typography } from '@mui/material';
import { BaseTemplate } from '../../Base';
import { FarmProducer } from '@/domain/entity';
import { FarmProducerForm } from '@/components/farm-producer/Form';

type FarmProducerEditTemplateProps = {
  data: FarmProducer;
  handleSubmit: (data: FarmProducer) => void;
};

export function FarmProducerEditTemplate({
  data,
  handleSubmit,
}: FarmProducerEditTemplateProps) {
  return (
    <BaseTemplate>
      <Container>
        <Typography variant="h4" fontWeight="semibold" paddingY={2}>
          Editar | Produtor rural
        </Typography>
        {data ? (
          <FarmProducerForm onSubmit={handleSubmit} data={data} />
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
