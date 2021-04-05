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
  Center,
  Heading,
  Icon,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";

const DRAWER_WIDTH = "325px";
const SIDEBAR_PADDING = "3";
const SIDEBAR_LIST_TILE_MARGIN = "5px 0px 5px 0px";
const APP_NAME = "🌩️ App Name";

function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main
        style={{
          height: "100vh",
          display: "flex",
        }}
      >
        <_AppDrawer></_AppDrawer>

        <Box marginLeft={DRAWER_WIDTH} width="100%" padding="10">
          {children}
        </Box>
      </main>
    </>
  );
}

export default AdminLayout;

function _AppDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [width, height] = useWindowSize();

  return (
    <>
      {/* <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button> */}

      <Box
        height="100%"
        width={DRAWER_WIDTH}
        bgColor="white"
        padding={SIDEBAR_PADDING}
        outline="solid 1px"
        outlineColor="gray.300"
        position="fixed"
      >
        <Center>
          <Heading size="lg">{APP_NAME}</Heading>
        </Center>

        <Box marginTop="16" />

        <_SidebarListTile margin={SIDEBAR_LIST_TILE_MARGIN} />
        <_SidebarListTile margin={SIDEBAR_LIST_TILE_MARGIN} />
        <_SidebarListTile margin={SIDEBAR_LIST_TILE_MARGIN} />
        <_SidebarListTile margin={SIDEBAR_LIST_TILE_MARGIN} />

        <_AppSidebarAvatar></_AppSidebarAvatar>
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

function _SidebarListTile({ label = "Label", margin = null }) {
  return (
    <Box
      backgroundColor="gray.50"
      borderRadius="md"
      padding="3"
      display="flex"
      cursor="pointer"
      margin={margin}
      _hover={{
        color: "white",
        backgroundColor: "teal.500",
      }}
    >
      <Center>
        <Icon />
      </Center>
      <Box width="5" />
      <Text>{label}</Text>
    </Box>
  );
}

function _AppSidebarAvatar() {
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
      padding={SIDEBAR_PADDING}
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
