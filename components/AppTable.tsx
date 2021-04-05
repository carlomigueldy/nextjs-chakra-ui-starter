import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  IconButton,
  HStack,
} from "@chakra-ui/react";

export type AppTableProps<T> = {
  headers: string[];
  items: object[];
};

const PlaceholderItem = () => (
  <Tr>
    <Td>inches</Td>
    <Td>millimetres (mm)</Td>
    <Td>25.4</Td>
    <Td>
      <HStack spacing="5px">
        <IconButton aria-label="Search database" icon={<ViewIcon />} />
        <IconButton aria-label="Search database" icon={<EditIcon />} />
        <IconButton aria-label="Search database" icon={<DeleteIcon />} />
      </HStack>
    </Td>
  </Tr>
);

function AppTable() {
  return (
    <>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th>multiply by</Th>
            <Th>actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
          <PlaceholderItem />
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </>
  );
}

export default AppTable;
