import { FarmProducerDetailTemplate } from '@/templates/farm-producer';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { FarmProducerService } from '@/services';
import { useRouter } from 'next/router';

export default function FarmProducerDetail() {
  const farmProducerService = new FarmProducerService();
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery('findOneFarmProducer', () =>
    farmProducerService.findOne(id as string),{
      enabled: !!id,
    }
  );

  return (
    <>
      <Head>
        <title>Produtor Rural | Brain Agriculture</title>
        <meta name="description" content="Visualizar detalhes de um produtor rural" />
      </Head>
      <FarmProducerDetailTemplate
        data={data}
      />
    </>
  );
}
