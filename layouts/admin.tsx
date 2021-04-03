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
import React, { Component } from "react";

function AdminLayout({ children }: { children: React.ReactNode }) {
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
          width="400px"
          bgColor="white"
          padding="5"
          outline="solid 1px"
          outlineColor="gray.300"
        >
          <Heading>Hello World</Heading>

          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Open
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
            size="xs"
          >
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
          </Drawer>
        </Box>
        <Box width="100%" padding="10">
          {children}
        </Box>
      </main>
    </>
  );
}

export default AdminLayout;
