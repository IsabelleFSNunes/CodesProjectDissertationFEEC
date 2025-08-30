import { Box, Container, Typography } from '@mui/material';
import React, { forwardRef, useCallback, useImperativeHandle, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Plot from 'react-plotly.js';
import { useMap } from '../MapProvider';
import axios from "axios";

export interface AbacusHandles {
    handleAbacus: () => void;
  }

// function Contour2Histogram() {
const Contour2Histogram = forwardRef<AbacusHandles>((props, ref) => {
    const {t} = useTranslation();
    const map = useMap();
    const [plot1, setPlot1] = useState<number[]>([]);
    
    // const responseAbacuses = async () => {
    const handleAbacus = useCallback(async () => {
        try {
          const resp = await axios.get(
            `http://localhost:8000/api/abacuses/`,{
                timeout: 60000
            }).then((response) => { 
                console.log(response.data);
                console.log(map.position.lat, map.position.lng);
                setPlot1(response.data);
            });
            console.log(resp);
        }
        catch (error) {
          console.log(error);
        }
      },[ref]);
    
    //   responseAbacuses(); // Call the API
    useImperativeHandle(ref, () => {
        return {
            handleAbacus
        }
    });

    var layout = {
        title: '2D Abacus',
        height: 600,
        weight: 800,
        xaxis: {
                // tickvals:['-180', '-150', '-120', '-90', '-60', '-30', '0', '30', '60', '90', '120', '150', '180'],
                // ticktext : ['-180', '-150', '-120', '-90', '-60', '-30', '0', '30', '60', '90', '120', '150', '180'],
                tickvals:['-180', '0', '180', '360', '540', '720', '900', '1080', '1260', '1440', '1620', '1800', '1980'],
                ticktext: ['-180', '-150', '-120', '-90', '-60', '-30', '0', '30', '60', '90', '120', '150', '180'],
                // type: 'category',
                title: 'Azimuth Angle (degrees)',
                tick0: 0,
                // dtick: 300,
                range: [-180, 1980],
                showticklabels: true
            },
        yaxis: {
            tickvals:['0', '20', '40', '60', '80', '100', '120', '140', '160', '180'],
            ticktext :['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
            // type: 'category',
            title: 'Tilt Angles (degrees)',
            // dtick: 100
        },
        // rangemode: 'tozero',
        // xaxis: { range : [-180, 180], },
        // yaxis: { range : [0, 90] },
        // xaxis: {domain: [-180, 180]},
        // yaxis: {domain: [0, 90]}
        // autosize: true,
    };

    return (
        <Box> 
            {/* <Typography variant='h6' align='center'> Contour2Histogram </Typography> */}
        <Plot
            data={[{
                // y : [0, 10, 20, 30, 40, 50, 60, 70, 80, 90],
                // x : [-180, -150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150, 180],
                y: ['0', '10', '20', '30', '40', '50', '60', '70', '80', '90'],
                x: ['-180', '-150', '-120', '-90', '-60', '-30', '0', '30', '60', '90', '120', '150', '180'],
                z: plot1,
                type: 'contour',
                contours: {
                    // showlabels: true,
                    labelfont: {
                        family: 'Raleway',
                        size: 16,
                        color: 'black',
                      },
                    // start: 0,
                    // end: 6,
                    // size: 0.15,
                },
                colorbar: {
                    ticks: 'outside',
                    dtick: 1,
                    tickwidth: 2,
                    ticklen: 10,
                    tickcolor: 'grey',
                    showticklabels: true,
                    tickfont: {
                        family: 'Arial',
                        size: 12,
                        color: 'grey'
                    },
                    xpad: 50
                }
            }]}
            layout={layout}
        />
        </Box>
    );
});

export default Contour2Histogram;
