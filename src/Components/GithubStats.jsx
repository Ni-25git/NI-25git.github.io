// GithubStats.jsx
import React from 'react';
import { Box, Image, Heading, Flex } from '@chakra-ui/react';

const GithubStats = () => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      p={8}
      bg="gray.100"
      minH="100vh"
      id="github-stats"
    >
      <Heading as="h2" size="xl" color="red.500" mb={8} textAlign="center">
        GitHub Stats
      </Heading>
      <Box>
        <Image
          src="https://camo.githubusercontent.com/358faf17a3d5507020487b0cebf2baeb4e5ffff944a05e33c3da85a2ac0a47ba/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6e692d32356769742673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374"
          alt="GitHub Stats"
          mb={4}
        />
      </Box>
      <Box>
        <Image
          src="https://camo.githubusercontent.com/6179016a7071163966b14690202b72a112d28cbe75e6e63b4bff730378ecaec6/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6e692d32356769742673686f775f69636f6e733d74727565266c6f63616c653d656e"
          alt="GitHub Stats"
          mb={4}
        />
      </Box>
      <Box>
        <Image
          src="https://camo.githubusercontent.com/a9cb46196e7031248ebbcb9bb1e83b8521f35ec8580b3bfd2e679b76f1b1e306/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6e692d323567697426"
          alt="GitHub Stats"
          mb={4}
        />
      </Box>
      
    </Flex>
  );
};

export default GithubStats;
