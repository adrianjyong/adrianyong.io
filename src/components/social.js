import React from 'react';
import social from '../data/social';
import { Box } from '@chakra-ui/core';

export const SocialIcons = () => (
    <Box
    style={{
      height: 40,
      width: social.length * 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    {social.map(({ url, Icon }) => (
        <a href={url} target="_blank" withUnderline={false}>
            <Icon />
        </a>
    ))}
</Box>
);