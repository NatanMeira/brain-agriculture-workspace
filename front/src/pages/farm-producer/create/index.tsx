import { FarmProducer } from '@/domain/entity';
import { FarmProducerService } from '@/services';
import { FarmProducerCreateTemplate } from '@/templates/farm-producer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function FarmProducerCreate() {
  const farmProducerService = new FarmProducerService();
  const router = useRouter();
  
  async function handleSubmit(data: FarmProducer) {
    try {
      await farmProducerService.create(data);
      toast.success('Produtor rural cadastrado com sucesso!');
      router.push('/farm-producer')
    } catch (error: any) {
      toast.error(error.message || 'Erro ao cadastrar produtor rural!');
    }
  }
  return (
    <>
      <Head>
        <title>Produtor Rural | Brain Agriculture</title>
        <meta name="description" content="Adicionar um produtor rural" />
      </Head>
      <FarmProducerCreateTemplate handleSubmit={handleSubmit}/>
    </>
  );
}
