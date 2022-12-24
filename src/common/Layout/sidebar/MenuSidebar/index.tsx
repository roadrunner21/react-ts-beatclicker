import React from 'react';
import { Box } from '@mui/material';
import { LogoIcon } from '../../../LogoIcon';
import { MobileMenu } from '../../menu/MobileMenu';

function MenuSidebar() {
    return (
        <Box p={2}>
            <Box display={'flex'} justifyContent={'center'}>
                <LogoIcon/>
            </Box>
            <MobileMenu/>
        </Box>
    );
}

export { MenuSidebar };