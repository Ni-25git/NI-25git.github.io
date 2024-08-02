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
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/16ffVIvFC5pZ4jONvTtewxubzltg6guSf/view?usp=sharing';
    link.target = '_blank'; // Open link in a new tab/window
    link.download = 'nipun_resume.pdf'; // Desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Box
        bg="gray.800"
        px={4}
        position="fixed"
        width="100%"
        top="0"
        zIndex="1000"
      >
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
            justify="center"
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
      <Box mt="16"> {/* Add this to add margin top to your main content */}
        {/* Your main content here */}
      </Box>
    </>
  );
};

export default Nav;
    