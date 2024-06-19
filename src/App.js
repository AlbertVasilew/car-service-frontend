import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Menu from './components/Menu';
import './styles/App.css';

const App = () => {
    return (
        <Box className="application-wrapper">
            <Menu />
            <Outlet />
        </Box>
    )
}

export default App;