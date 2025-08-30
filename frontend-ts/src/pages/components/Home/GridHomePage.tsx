import * as React from 'react';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
// import HighlightedCode from 'docs/src/modules/components/HighlightedCode';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Paper from '@mui/material/Paper';

import styles from './GridHomePage.module.css';
import { Button, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';




function GridHomePage() {
  const {t} = useTranslation();

  const links = ["phase1", "phase2"];
  const listCount = [0, 1];

    return (
       <Container className={styles.gridBody}>
        {listCount.map((value) => (
          // <Grid key={value}>
            <Paper elevation={4} className={styles.paper}>
              {/* <Container className={styles.paper} className={styles.individualGrid} > */}
                <Typography variant="h5" className={styles.individualTitle}>{t(`Home.Grids.Grid ${value}.title` as const)}</Typography>
                <Typography variant="body1" className={styles.individualElements} >{t(`Home.Grids.Grid ${value}.subtitle` as const)}</Typography>
                <Button href={`/${links[value]}`} variant="contained" className={styles.individualElements} >{t(`Home.Grids.Grid ${value}.button` as const)}</Button>
              {/* </Container> */}
            </Paper>
          // </Grid>
        ))}
        </Container>
    );
}

export default GridHomePage;
