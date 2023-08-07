import { FarmProducerEditTemplate } from '@/templates/farm-producer';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { FarmProducerService } from '@/services';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { UpdateFarmProducerDto } from '@/services/farm-producer/dto';
import { FarmProducer } from '@/domain/entity';

export default function FarmProducerEdit() {
  const farmProducerService = new FarmProducerService();
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery('findOneFarmProducer', () =>
    farmProducerService.findOne(id as string),{
      enabled: !!id,
    }
  );
  async function handleSubmit(data: FarmProducer) {
    try {
      await farmProducerService.update(data.id!, data as UpdateFarmProducerDto);
      toast.success('Produtor rural atualizado com sucesso!');
      router.push('/farm-producer')
    } catch (error: any) {
      toast.error(error.message || 'Erro ao atualizar produtor rural!');
    }
  }

  return (
    <>
      <Head>
        <title>Produtor Rural | Brain Agriculture</title>
        <meta name="description" content="Editar um produtor rural" />
      </Head>
      <FarmProducerEditTemplate data={data} handleSubmit={handleSubmit}/>
    </>
  );
}
