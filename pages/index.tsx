import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import AppTable from "../components/AppTable";

import AdminLayout from "../layouts/AdminLayout";

export default function Home() {
  return (
    <>
      <AdminLayout>
        <Box>
          <Box display="flex" justifyContent="flex-end" marginBottom="5">
            <Button colorScheme="teal" size="lg">
              Create
            </Button>
          </Box>
          <Box borderRadius="md">
            <AppTable></AppTable>
          </Box>
        </Box>
      </AdminLayout>
    </>
  );
}

// Th, Fri, Saturday, 8AM
