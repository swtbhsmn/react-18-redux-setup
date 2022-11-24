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
                    <Footer />
                </Paper>

            </Box>
        </Box>

    )
}
