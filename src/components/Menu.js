import { Box, Drawer, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { drawerStyles } from '../styles/styles';

import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import { useLocation, useNavigate } from 'react-router-dom';

const Menu = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const menus = [
        { name: "Employees", path: "/employees", icon: <SupervisedUserCircleIcon /> }
    ];

    const isActive = path => path === pathname;

    return (
        <Drawer variant="permanent" PaperProps={{sx: drawerStyles.paper}} sx={drawerStyles.drawer}>
            <Box className="menu-container">
                <MenuList>
                    {menus.map(menu => (
                        <MenuItem
                            key={menu.name}
                            onClick={() => navigate(menu.path)}
                            className={`menu-container__item ${isActive(menu.path) ? 'active' : ''}`}
                        >
                            <ListItemIcon>{menu.icon}</ListItemIcon>
                            <ListItemText>{menu.name}</ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Box>
        </Drawer>
    )
}

export default Menu;