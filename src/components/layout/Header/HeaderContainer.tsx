import { siteConfig } from '@/constants';
import { Box, Typography } from '@mui/material';
import React from 'react';

function LogoName() {

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            paddingTop: 3,
            paddingButton: 3,
        }}>
            <Box component='img' src='/images/logo.webp' sx={{ height: 50 }} />
            <Typography variant='h1'>
                {siteConfig.name}
            </Typography>
        </Box>
    )
}

export const HeaderContainer: React.FC = () => {
  return (
    <header>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}>
            <LogoName />

        </Box>
    </header>
  );
};
