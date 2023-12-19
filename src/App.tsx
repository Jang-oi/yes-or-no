import {Route, Routes} from 'react-router-dom';

import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Sidebar from './components/menu/Sidebar';
import Header from './components/menu/Header';

import {CssVarsProvider} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';

export default function App() {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline/>
            <Box sx={{display: 'flex', minHeight: '100dvh'}}>
                <Header/>
                <Sidebar/>
                <Box component="main" className="MainContent" sx={{
                    px: {xs: 2, md: 6},
                    pt: {xs: 'calc(12px + var(--Header-height))', sm: 'calc(12px + var(--Header-height))', md: 3},
                    pb: {xs: 2, sm: 2, md: 3},
                    flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, height: '100dvh', gap: 1,
                }}
                >
                    <Box sx={{margin: '30px'}}>
                        <Routes>
                            <Route path='/' element={<Main/>}/>
                            <Route path='*' element={<NotFound/>}/>
                        </Routes>
                    </Box>
                </Box>
            </Box>
        </CssVarsProvider>
    );
}