import { Outlet } from 'react-router-dom';
import { Box, ThemeProvider, createTheme } from '@mui/material';

import Menu from './components/Menu';

import theme from './styles/theme';
import './styles/App.css';

const App = () => (
    <ThemeProvider theme={createTheme(theme)}>
        <Box className="application-wrapper">
            <Menu />
            <Box className="page-container">
                <Outlet />
            </Box>
        </Box>
    </ThemeProvider>
)

export default App;