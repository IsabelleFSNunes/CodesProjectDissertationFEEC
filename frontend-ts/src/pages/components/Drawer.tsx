import {
  Box, Divider,
  Drawer as MUIDrawer,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  List
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useMenu, useMenuUpdate } from './MenuProvider';
import { useTranslation } from 'react-i18next';
import GroupsIcon from '@mui/icons-material/Groups';
// import HomeIcon from '@mui/icons-material/HomeIcon';
import SsidChartRoundedIcon from '@mui/icons-material/SsidChartRounded';
// const navItemsV1 = ['Home', 'About', 'Contact'];

function Drawer() {
  const { t, i18n } = useTranslation();
  const openedMenu = useMenu();
  const updateMenu = useMenuUpdate();

  // var navItems = [];
  // navItems.append();
  // let navItems = [t('Home.Tab.title'), t('About.Tab.title'), t('Phase1.Tab.title')];

  let navItems: Array<string> = [
    'home',
    'about',
    'phase1',
  ]; //.map(item => t(`App Bar.${item}` as const));
  return (
    <Box component='nav'>
      <MUIDrawer
        open={openedMenu}
        onClose={updateMenu}
      >
        <Box
          sx={{ textAlign: 'center' }}
        >
          <Typography variant="h6" sx={{ my: 2 }}>
            Menu
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding >
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/${item}`}
                  sx={{ textAlign: 'left' }}
                >
                  <GroupsIcon />
                  <ListItemText primary={t(`App Bar.${item}` as const)} />
                  
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </MUIDrawer >
    </Box >
  );
}

export default Drawer;
