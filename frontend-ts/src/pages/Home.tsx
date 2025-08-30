import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import OptionsTabs from "./components/Phase1/OptionsTabs";
import ToolbarAndMenu from "./components/ToolbarAndMenu";
import { Link } from "react-router-dom";
import SlideShowHomePage from "./components/SlideShowHomePage";
import SimpleFooterPages from "./components/SimpleFooterPages";
import GridHomePage from "./components/Home/GridHomePage";

import styles from './components/Home/HomePage.module.css';

function Home() {
    const { t } = useTranslation();

    return (
    <Box className={styles.colorbackground}>
        <ToolbarAndMenu />
        <SlideShowHomePage />
        <Container sx={{
            display: 'flex',
            flexDirection: 'row', // Alterado para 'row'
            flexWrap: 'wrap', // Adicionado para responsividade
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
        }}>
            <GridHomePage />
        </Container>
        <SimpleFooterPages />
    </Box>
);
}

export default Home;
