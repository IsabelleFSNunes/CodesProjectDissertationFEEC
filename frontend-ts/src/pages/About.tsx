import { Box, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

// Map Provider
import AppBar from './components/AppBar';
import Drawer from "./components/Drawer";
import ToolbarAndMenu from "./components/ToolbarAndMenu";
import SimpleFooterPages from "./components/SimpleFooterPages";

function About() {
    const { t } = useTranslation();

    return (
        <Box>
            <ToolbarAndMenu />
            <Container>
                <Typography variant='h1'>{
                    t('About.Page.Title.text')
                }</Typography>
                <Typography variant='h5'>{
                    t('About.Page.Title.description')
                }</Typography>
            </Container>
            <SimpleFooterPages />
        </Box>
    );
}

export default About;
