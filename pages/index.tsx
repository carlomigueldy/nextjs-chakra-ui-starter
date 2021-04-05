import { Button } from "@chakra-ui/button";
import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { Fade } from "@chakra-ui/transition";
import { useState } from "react";
import AppTable from "../components/AppTable";

export default function Home() {
  const [isLoading, setLoading] = useState<boolean>(true);

  // simulating an API call
  setTimeout(() => {
    setLoading(false);
  }, 1000);

  if (isLoading) {
    return (
      <Center
        height="100%"
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="teal.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <>
      <Fade in={!isLoading}>
        <Box>
          <Box display="flex" justifyContent="space-between" marginBottom="5">
            <Heading>Users</Heading>
            <Button colorScheme="teal" size="lg">
              Create
            </Button>
          </Box>
          <Box borderRadius="md">
            <AppTable></AppTable>
          </Box>
        </Box>
      </Fade>
    </>
  );
}

// Th, Fri, Saturday, 8AM
