import { useEffect, useState } from 'react';
import { FarmProducerListTemplate } from '@/templates/farm-producer';
import Head from 'next/head';
import { useQuery } from 'react-query';
import { FarmProducerService } from '@/services';

export default function FarmProducerList() {
  const farmProducerService = new FarmProducerService();
  const [name, setName] = useState('');
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 8,
    page: 0,
  });
  
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  const { data, refetch } = useQuery('findAllFarmProducer', () =>
    farmProducerService.findAll({
      name,
      limit: paginationModel.pageSize,
      offset: paginationModel.page * paginationModel.pageSize,
    }),
  );

  useEffect(() => {
    refetch();
  }, [paginationModel.page, refetch]);

  async function handleDelete(id: string) {
    await farmProducerService.delete(id);
    refetch();
  }

  return (
    <>
      <Head>
        <title>Produtor Rural | Brain Agriculture</title>
        <meta name="description" content="Área de produtor rural" />
      </Head>
      <FarmProducerListTemplate
        data={data}
        refetch={refetch}
        handleNameChange={handleNameChange}
        name={name}
        paginationModel={paginationModel}
        setPaginationModel={setPaginationModel}
        handleDelete={handleDelete}
      />
    </>
  );
}
