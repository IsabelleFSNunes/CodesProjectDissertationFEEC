
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React, { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';



import OptionsTabs from './components/Phase1/OptionsTabs';
import GoogleMap from './GoogleMap';

import { useMap, useMapDispatch } from './components/MapProvider';
import ToolbarAndMenu from './components/ToolbarAndMenu';
import SimpleFooterPages from './components/SimpleFooterPages';

import styles from './Phase1.module.css';
import GhiNearbyCities, {GHIHandles} from './components/Phase1/GhiNearbyCities';
import AbacusesTabs from './components/Phase1/AbacusesTabs';
import PoaNearbyCities, { POAHandles } from './components/Phase1/PoaNearbyCities';
import Contour2Histogram, { AbacusHandles } from './components/Phase1/Contour2Histogram';
import axios from 'axios';
import { SelectedCityProvider } from './components/Phase1/PoaTypes';


function Phase1() {
    const { t } = useTranslation();
    const map = useMap();
    const dispatch = useMapDispatch();
    const buttonRefGHI = useRef<GHIHandles>(null);
    const buttonRefPOA = useRef<POAHandles>(null);
    const buttonRefAbacus = useRef<AbacusHandles>(null);

    
    // const handleUpdateMap = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     handleLatitude(event);
    //     handleLongitude(event);
    //     handleZoom(event);
    // };
    
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

    const handleGHIRender = useCallback(() => {
        buttonRefGHI.current?.handleGHI();
    }, [buttonRefGHI]);

    const handlePOARender = useCallback(() => {
        buttonRefPOA.current?.handlePOA();
    }, [buttonRefPOA]);

    const handleAbacusRender = useCallback(() => {
        buttonRefAbacus.current?.handleAbacus();
    }, [buttonRefAbacus]);

    const initialization_api = async () => {
        try {
            const resp = await axios.get(`http://localhost:8000/api/initializing/?lat=${map.position.lat}&lon=${map.position.lng}&n_cities=3`).then((response) => {
                console.log(response);
                // setPlot1(response.data);
            });
            console.log(resp);
        } catch (err) {
            console.log(err);
        }} 

    const buttonClicked = () => {
        initialization_api();
        handleGHIRender();
        handlePOARender();
        handleAbacusRender();
    }
    
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

                        {/* // botao para inicializar a chamada e encontrar os pontos mais próximos  */}
                        <Button variant='contained' color='primary' onClick={buttonClicked}>{t('Phase1.Button.title')}</Button>
                        
                    </Container>
                    
                    {/* mostra a seção de ghi, tabelas e graficos  */}
                    <GhiNearbyCities ref={buttonRefGHI}/>
                    
                    {/* mostra a seção de poas com suas respectivas tabelas e graficos */}
                    <SelectedCityProvider>
                        <PoaNearbyCities ref={buttonRefPOA} />
                    </SelectedCityProvider>
                    
                    {/* Mostra o grafico 2d do abaco de irradiancia */}
                    <Contour2Histogram ref={buttonRefAbacus}/>

                </Container>
            </Box>
            {/* <SimpleFooterPages />
             */}
        </Box >
    );
}

export default Phase1;
