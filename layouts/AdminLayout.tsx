import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import {
  Avatar,
  Box,
  Button,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const DRAWER_WIDTH = "325px";

function AppDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [width, height] = useWindowSize();

  return (
    <>
      <Box
        height="100%"
        width={DRAWER_WIDTH}
        bgColor="white"
        padding="5"
        outline="solid 1px"
        outlineColor="gray.300"
        position="fixed"
      >
        <Heading>App Name</Heading>

        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Open
        </Button>

        <AppSidebarAvatar></AppSidebarAvatar>
      </Box>

      {/* The Drawer Component */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
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
    </>
  );
}

function AppSidebarAvatar() {
  function onClickAvatarTile() {}

  return (
    <Box
      position="absolute"
      onClick={onClickAvatarTile}
      display="flex"
      bottom="15"
      left="2"
      right="2"
      cursor="pointer"
      borderRadius="md"
      padding="3"
      _hover={{
        color: "white",
        backgroundColor: "teal.500",
      }}
    >
      <Avatar></Avatar>
      <Box width="5" />
      <Box>
        <Text fontWeight="bold">Full Name</Text>
        <Text>user@email.com</Text>
      </Box>
    </Box>
  );
}

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <AppDrawer></AppDrawer>

        <Box marginLeft={DRAWER_WIDTH} width="100%" padding="10">
          {children}
        </Box>
      </main>
    </>
  );
}

export default AdminLayout;
