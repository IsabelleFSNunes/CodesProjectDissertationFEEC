import React from 'react'
import { Line } from "react-chartjs-2";
import { useMap } from "../MapProvider";
import { DataGHI, DataTable, DataTotal, GHIContext, Props } from './GhiTypes';
import Chart from 'chart.js/auto';
import {CategoryScale} from 'chart.js'; 
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
Chart.register(CategoryScale);



function PlotGHI() {
  const {t} = useTranslation();
  
  const LineChart: React.FC<{ data: DataGHI[] }> = ({ data }) => {
      const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
      // const colors = [ "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3", "#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF"];
      const colors = [
          "#004488", // Azul Escuro
          "#6699CC", // Azul Médio
          "#EECC66", // Amarelo Dourado
          "#CCBB44", // Amarelo Queimado
          "#AA3377", // Púrpura
          "#66CCEE", // Azul Claro
          "#228833", // Verde Escuro
          "#99BB11", // Verde Claro
          "#DDDDDD", // Cinza Claro
          "#000000", // Preto
          "#BBBBBB", // Cinza Médio
          "#882255"  // Vinho
        ];
      // console.log(data);
      const dataPlot= data.map<DataTable>((item : DataGHI) => ({
        jan : item.jan,
        feb : item.feb,
        mar : item.mar,
        apr : item.apr,
        may : item.may,
        jun : item.jun,
        jul : item.jul,
        aug : item.aug,
        sep : item.sep,
        oct : item.oct,
        nov : item.nov,
        dec : item.dec,
      }));
      // console.log(dataPlot);
      const chartData = {
        labels: months,
        datasets: dataPlot.map((item:DataTable, index) => ({
          label:  `${t(`Phase1.Page.Table GHI.Table IDs.p${index}`)}`,
          data: Object.values(item),
          borderColor: colors[index], 
          // borderColor: // "#" + Math.floor(Math.random() * 16777215).toString(16), // generate a random color
          fill: false,
        })),
      };
    
      return <Line data={chartData} />;
    };

  
  return (
    <div>
      <Typography variant="h5">{t(`Phase1.Page.Graph GHI.text`)}</Typography>
      <Typography variant="body1">{t(`Phase1.Page.Graph GHI.subtitles`)}</Typography>
      <GHIContext.Consumer>
        {(data: DataGHI[]) => {
          return <LineChart data={data.flat()} />;
        }}
      </GHIContext.Consumer>
    </div>
  )
}

export default PlotGHI
