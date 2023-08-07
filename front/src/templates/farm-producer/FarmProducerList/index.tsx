import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { BaseTemplate } from '../../Base';
import { DataGridProps } from '@mui/x-data-grid';
import { AddBox } from '@mui/icons-material';
import { Table } from '@/components/farm-producer/Table';
import { PaginatedFarmProducerDto } from '@/services/farm-producer/dto';
import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';

type FarmProducerListTemplateProps = {
  name: string;
  handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  data: PaginatedFarmProducerDto;
  refetch: () => void;
  paginationModel: DataGridProps['paginationModel'];
  setPaginationModel: Dispatch<
    SetStateAction<{
      pageSize: number;
      page: number;
    }>
  >;
  handleDelete: (id: string) => void;
};

export function FarmProducerListTemplate({
  handleNameChange,
  name,
  data,
  refetch,
  paginationModel,
  setPaginationModel,
  handleDelete,
}: FarmProducerListTemplateProps) {
  return (
    <BaseTemplate>
      <Container>
        <Typography variant="h4" fontWeight="semibold" paddingY={2}>
          Produtor rural
        </Typography>
        <Grid container justifyContent="space-between">
          <Grid item display="flex">
            <TextField
              id="outlined-basic"
              label="Nome do produtor rural"
              variant="outlined"
              value={name}
              name="name"
              onChange={handleNameChange}
              fullWidth
              size="small"
            />
            <Button
              variant="contained"
              size="medium"
              sx={{
                marginLeft: '1rem',
              }}
              onClick={() => refetch()}
            >
              Pesquisar
            </Button>
          </Grid>
          <Grid item>
            <Link href="/farm-producer/create">
              <Button
                variant="contained"
                size="medium"
                sx={{
                  height: '100%',
                }}
                >
                <AddBox
                  sx={{
                    marginRight: '0.5rem',
                  }}
                />
                Adicionar novo
              </Button>
            </Link>
          </Grid>
        </Grid>
        <Grid container marginTop={3}>
          <Table
            data={data || []}
            paginationModel={paginationModel}
            setPaginationModel={setPaginationModel}
            handleDelete={handleDelete}
          />
        </Grid>
      </Container>
    </BaseTemplate>
  );
}
