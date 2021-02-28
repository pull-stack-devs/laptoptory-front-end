import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/lib/less/index.less'; // or 'rsuite-table/dist/css/rsuite-table.css'

const dataList = [
  { id: 1, brand: 'a', cpu: 'i', ram: '4', storage: '12', storage_type: 'hd', display_resolution: '19' },
  { id: 2, brand: 'b', cpu: 'i', ram: '8', storage: '51', storage_type: 'ss', display_resolution: '21' },
  { id: 3, brand: 'c', cpu: 'i', ram: '12', storage: '25', storage_type: '', display_resolution: '13' }
];

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

export const TableShow = () => (
  <Table data={dataList}>
    <Column width={100} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Brand</HeaderCell>
      <Cell dataKey="brand" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>CPU</HeaderCell>
      <Cell dataKey="cpu" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Ram</HeaderCell>
      <ImageCell dataKey="ram" />
    </Column>
    
    <Column width={100} sortable resizable>
      <HeaderCell>Storage</HeaderCell>
      <ImageCell dataKey="storage" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Storage Type</HeaderCell>
      <ImageCell dataKey="storage_type" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Display Resolution</HeaderCell>
      <ImageCell dataKey="display_resolution" />
    </Column>
  </Table>
);