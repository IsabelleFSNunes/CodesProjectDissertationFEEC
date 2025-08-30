import React, { EventHandler, useState } from 'react';
import {
  AppBar as MUIAppBar,
  Button,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useMenuUpdate } from './MenuProvider';
import { useTranslation } from 'react-i18next';

const languages = ['en', 'pt'];

interface Props {
  children: React.ReactElement;
}

function HideOnScroll({ children }: Props) {
  const trigger = useScrollTrigger({
    threshold: 0,
  });

  return (
    <Slide in={!trigger}>
      {children}
    </Slide>
  );
}

function AppBar() {
  const { t, i18n } = useTranslation();
  const toggleMenu = useMenuUpdate();

  return (
    <HideOnScroll>
      <MUIAppBar component={'nav'}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            sx={{ mr: 2 }}
            color="inherit"
            aria-label='menu'
            onClick={toggleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>
            {t('App Bar.title')}
          </Typography>
          {/* Put buttons iterating in i18n file to put the languages */}
          {languages.map((language) => {
            return (
              <Button
                key={language}
                color="inherit"
                onClick={() => {
                  // console.log(language);
                  i18n.changeLanguage(language);
                }} disabled={i18n.resolvedLanguage === language}
              >
                {language}
              </Button>
            );
          })}
        </Toolbar>
      </MUIAppBar>
    </HideOnScroll>
  );
}

export default AppBar;
