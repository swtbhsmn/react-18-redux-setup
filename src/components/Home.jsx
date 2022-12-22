import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Header from './Header'
import Footer from './Footer';
import { Paper } from '@mui/material';
export default function Home() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header />
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />

                <Paper variant="outlined" sx={{ m: 1, p: 2 }}>
                    <Box sx={{ my: 2 }}>
                        {[...new Array(12)]
                            .map(
                                () => `Cras mattis consectetur purus sit amet fermentum.
        Cras justo odio, dapibus ac facilisis in, egestas eget quam.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                            )
                            .join('\n')}
                    </Box>
                    <Footer />
                </Paper>

            </Box>
        </Box>

    )
}
