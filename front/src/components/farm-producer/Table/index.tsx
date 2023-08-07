import { Grid, MenuItem, Typography, useTheme } from '@mui/material';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import { FarmProducerTableColumns } from './helper';
import { PaginatedFarmProducerDto } from '@/services/farm-producer/dto';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/router';

type TableProps = {
  data: PaginatedFarmProducerDto;
  paginationModel: DataGridProps['paginationModel'];
  setPaginationModel: Dispatch<
    SetStateAction<{
      pageSize: number;
      page: number;
    }>
  >;
  handleDelete: (id: string) => void;
};

export function Table({
  data,
  paginationModel,
  setPaginationModel,
  handleDelete
}: TableProps) {
  const theme = useTheme();
  const router = useRouter();

  const menuOptions = [
    {
      render: (row, key) => (
        <MenuItem
          onClick={() => router.push(`/farm-producer/${row.id}`)}
          {...{ key }}
        >
          <Typography >Visualizar</Typography>
        </MenuItem>
      ),
    },
    {
      render: (row, key) => (
        <MenuItem
          onClick={() => router.push(`/farm-producer/edit/${row.id}`)}
          {...{ key }}
        >
          <Typography >Editar</Typography>
        </MenuItem>
      ),
    },
    {
      render: (row, key) => (
        <MenuItem {...{ key }}
          onClick={() => handleDelete(row.id)}
        >
          <Typography >Deletar</Typography>
        </MenuItem>
      ),
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <DataGrid
          autoHeight
          rows={data?.data || []}
          columns={FarmProducerTableColumns(menuOptions)}
          rowCount={data.totalCount || 0}
          sx={{
            '.MuiDataGrid-columnHeader': {
              backgroundColor: theme.palette.primary.main,
              color: '#fff',
            },
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: theme.palette.primary.main,
            },
          }}
          columnVisibilityModel={{
            id: false,
          }}
          paginationMode="server"
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
        />
      </Grid>
    </Grid>
  );
}
