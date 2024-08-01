import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Image } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1AsIE4OVNgQAhFOf7GnPYxFEdnL1mR5kM/view?usp=sharing",
      "_blank"
    );
  };

  return (
    <>
      <Box bg="gray.800" px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <Image
            borderRadius='full'
            boxSize='50px'
            src='https://tse2.mm.bing.net/th?id=OIP.YPvcPsTqXPMqq9SqAnPzcgHaHa&pid=Api&P=0&h=180'
            alt='Logo'
          />
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            as="nav"
            spacing={8}
            alignItems="center"
            display={{ base: 'none', md: 'flex' }}
            flex="1"
            justify="center" // Center the nav items horizontally
          >
            <ScrollLink to="home" smooth={true} duration={500}>
              <Button variant="link" color="white">
                Home
              </Button>
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500}>
              <Button variant="link" color="white">
                About
              </Button>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500}>
              <Button variant="link" color="white">
                Skills
              </Button>
            </ScrollLink>
            <ScrollLink to="project" smooth={true} duration={500}>
              <Button variant="link" color="white">
                Projects
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button variant="link" color="white">
                Contact
              </Button>
            </ScrollLink>
            <Button colorScheme="blue" onClick={openResume}>
              Resume
            </Button>
          </HStack>
        </Flex>

        {isOpen ? (
          <Drawer placement="top" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <Stack as="nav" spacing={4} align="center">
                  <ScrollLink to="home" smooth={true} duration={500} onClick={onClose}>
                    <Button variant="link" color="black">
                      Home
                    </Button>
                  </ScrollLink>
                  <ScrollLink to="about" smooth={true} duration={500} onClick={onClose}>
                    <Button variant="link" color="black">
                      About
                    </Button>
                  </ScrollLink>
                  <ScrollLink to="skills" smooth={true} duration={500} onClick={onClose}>
                    <Button variant="link" color="black">
                      Skills
                    </Button>
                  </ScrollLink>
                  <ScrollLink to="project" smooth={true} duration={500} onClick={onClose}>
                    <Button variant="link" color="black">
                      Projects
                    </Button>
                  </ScrollLink>
                  <ScrollLink to="contact" smooth={true} duration={500} onClick={onClose}>
                    <Button variant="link" color="black">
                      Contact
                    </Button>
                  </ScrollLink>
                  <Button colorScheme="blue" onClick={() => {
                    openResume();
                    onClose();
                  }}>
                    Resume
                  </Button>
                </Stack>
              </DrawerBody>
            </DrawerContent>
            
          </Drawer>
        ) : null}
        
      </Box>
    </>
  );
};

export default Nav;
