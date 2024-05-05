import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialLinkedin,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';
const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All the skills you need in one place" color={'white'} />
          <Heading
            fontFamily={'body'}
            size="sm"
            children="@Vidyalaya"
            color={'yellow.400'}
          />
        </VStack>

        <HStack
          spacing={['2', '10']}
          justifyContent="center"
          color={'white'}
          fontSize="50"
        >
          <a href="https://www.youtube.com/channel/UCXAg8nFrtgRjPFUxETwgneQ" target={'blank'}> {/* we set target = blank to open new page when this icon clicked */}
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.linkedin.com/in/vanshika-aggarwal-ab3415289/" target={'blank'}>
            <TiSocialLinkedin />
          </a>
          <a href="https://github.com/VanshikaAggarwal21" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
