
import { Box, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';



import OptionsTabs from './components/Phase1/OptionsTabs';
import GoogleMap from './GoogleMap';

import { useMap, useMapDispatch } from './components/MapProvider';
import ToolbarAndMenu from './components/ToolbarAndMenu';
import SimpleFooterPages from './components/SimpleFooterPages';

import styles from './Phase1.module.css';
import TabGridConnected from './components/Phase2/TabGridConnected';
function Phase2() {
    const { t } = useTranslation();
    const map = useMap();
    const dispatch = useMapDispatch();

    const handleLongitude = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "lgn",
            payload: {
                position: {
                    lng: +event.target.value,
                },
            },
        });
    };

    const handleLatitude = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "lat",
            payload: {
                position: {
                    lat: +event.target.value,
                },
            },
        });
    };

    const handleZoom = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: "zoom",
            payload: {
                zoom: +event.target.value,
            },
        });
    };

    return (
        <Box className={styles.main}>
            <Box>
                <ToolbarAndMenu />
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                }}>
                    {/* <MapProvider> */}
                    <GoogleMap />
                    {/* TODO: colocar uma div (box) com display flex e flexidirection row para todos os inputs */}
                    <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '10px' }}>
                        <TextField
                            id='longitude'
                            label='Longitude'
                            type={'number'}
                            value={map.position.lng}
                            onChange={handleLongitude}
                        />
                        <TextField
                            id='latitude'
                            label='Latitude'
                            type={'number'}
                            value={map.position.lat}
                            onChange={handleLatitude}
                        />
                        <TextField
                            id='zoom'
                            label='Zoom'
                            type={'number'}
                            value={map.zoom}
                            onChange={handleZoom}
                        />
                    </Container>
                    {/* </MapProvider> */}
                    <Container  /*sx={{ border: 0.5, borderRadius: '18px'}}*/>
                        <Typography variant='h5'>{
                            t('Phase2.Tab.title')
                        }</Typography>

                        <TabGridConnected/>

                    </Container>
                </Container>
            </Box>
            <SimpleFooterPages />
        </Box >
    );
}

export default Phase2;
