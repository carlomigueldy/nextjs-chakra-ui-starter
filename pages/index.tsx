import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Box, Button, Heading, Input, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
// import styles from "../styles/Home.module.css";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <main
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <Box
          height="100%"
          width="300px"
          bgColor="white"
          padding="5"
          position="fixed"
          outline="solid 1px"
          outlineColor="gray.300"
        >
          <Heading>Hello World</Heading>

          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody>
                  <Input placeholder="Type here..." />
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
      </main>
    </>
  );
}
