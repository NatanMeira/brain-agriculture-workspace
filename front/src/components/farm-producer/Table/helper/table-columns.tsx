import { GridColDef } from '@mui/x-data-grid';
import { TableOption } from './table-option';
import { AddCpfOrCnpjMask } from '@/utils/forms/masks';

export function FarmProducerTableColumns(options: any): GridColDef[] {
  return [
    {
      field: 'id',
      headerName: 'id',
      disableColumnMenu: true,
    },
    {
      field: 'cpfOrCnpj',
      headerName: 'CPF ou CNPJ',
      flex: .8,
      valueFormatter: ({ value }) => AddCpfOrCnpjMask(value || ''),
    },
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
    },
    {
      field: 'farmName',
      headerName: 'Nome da fazenda',
      flex: 1,
    },
    {
      field: 'city',
      headerName: 'Cidade',
      flex: 0.8,
    },
    {
      field: 'state',
      headerName: 'Estado',
      flex: 0.3,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      headerAlign: 'center',
      width: 150,
      align: 'center',
      renderCell: ({ row }) => TableOption({ row, options }),
    },
  ];
}
