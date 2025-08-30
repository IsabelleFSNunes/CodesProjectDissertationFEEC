import React from 'react';
import { useTranslation } from 'react-i18next';
import { POA, POAContext, POATable } from './PoaTypes';
import { Line } from 'react-chartjs-2';
import { Typography } from '@mui/material';

function PoaPlots() {
  const { t } = useTranslation();

  const LineChart: React.FC<{ data: POA[] }> = ({ data }) => {
    const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

    if (data.length === 0) {
      return null;
    } else {
      const chartData = {
        labels: months,
        datasets: data.map((item: POA, index: number) => ({
          label: `${t(`Phase1.Page.Table GHI.Table IDs.p${index}`)}`,
          data: [item.jan, item.feb, item.mar, item.apr, item.may, item.jun, item.jul, item.aug, item.sep, item.oct, item.nov, item.dec],
          borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
          fill: false,
        })),
      };
      return <Line data={chartData} />;
    }
  };

  return (
    <div>
      <Typography variant="h5">{t(`Phase1.Page.Graph POA.text`)}</Typography>
      <Typography variant="body1">{t(`Phase1.Page.Graph POA.subtitles`)}</Typography>
      <POAContext.Consumer>
        {(data: POA[]) => {
          return <LineChart data={data} />;
        }}
      </POAContext.Consumer>
    </div>
  );
}

export default PoaPlots;