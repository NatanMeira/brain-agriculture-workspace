import { Container, Typography } from '@mui/material';
import { BaseTemplate } from '../../Base';
import { FarmProducerForm } from '@/components/farm-producer/Form';
import { FarmProducer } from '@/domain/entity';
import { CreateFormProducerValidation } from '@/components/farm-producer/Form/helper';

type FarmProducerCreateTemplateProps = {
  handleSubmit: (data: FarmProducer) => void;
}

export function FarmProducerCreateTemplate({handleSubmit}: FarmProducerCreateTemplateProps) {
  return (
    <BaseTemplate>
      <Container>
        <Typography variant="h4" fontWeight="semibold" paddingY={2}>
          Adicionar | Produtor rural
        </Typography>
        <FarmProducerForm onSubmit={handleSubmit} validationSchema={CreateFormProducerValidation}/>
      </Container>
    </BaseTemplate>
  );
}
