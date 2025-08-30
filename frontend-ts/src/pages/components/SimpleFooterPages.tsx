import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Container, Grid, IconButton, Typography } from "@mui/material";

import React from 'react';
import styles from './SimpleFooterPages.module.css';
import { useTranslation } from "react-i18next";

function SimpleFooterPages() {
    const { t } = useTranslation();
    return (
        <footer className={styles.footer}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4} >
                        <Typography variant="h6" color="textPrimary" gutterBottom className="styles.gridTexts">
                            {t('Footer.About Us.title')}
                        </Typography>
                        <Typography variant="body2" color="textSecondary " className="styles.gridTexts">
                            {t('Footer.About Us.description')}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" color="textPrimary" gutterBottom >
                            {t('Footer.Connect Us.title')}
                        </Typography>
                        <IconButton aria-label="Facebook" className={styles.socialIcons}>
                            <Facebook />
                        </IconButton>
                        <IconButton aria-label="Twitter" className={styles.socialIcons}>
                            <Twitter />
                        </IconButton>
                        <IconButton aria-label="Instagram" className={styles.socialIcons}>
                            <Instagram />
                        </IconButton>
                        <IconButton aria-label="LinkedIn" className={styles.socialIcons}>
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="textPrimary" gutterBottom>
                            {t('Footer.Contact Us.title')} {/* Contact Us */}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {t('Footer.Contact Us.address')}: {t('Footer.Contact Us.address_address')}{/* 1234 Main Street, Suite 101, Anytown, USA 12345 */}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {t('Footer.Contact Us.email')} : {t('Footer.Contact Us.email_address')} {/* Email: info@example.com */}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {t('Footer.Contact Us.phone')} : {t('Footer.Contact Us.number_phone')}
                            {/* Phone: (123) 456-7890 */}
                        </Typography>
                    </Grid>
                </Grid>
                <p className={styles.copy_right}>
                    <span> LESF Unicamp</span> &copy; 2023
                </p>
            </Container>
        </footer >
    );
}

export default SimpleFooterPages;
