import { Checkbox, Container, FormControl, FormControlLabel, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import React from 'react';

import csvToJson from "csvtojson";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { useMap } from "../MapProvider";
import DivTablesInfos from './DivTablesInfos';
import Contour2Histogram from './Contour2Histogram';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin
);

interface DataProps {
  id: number;
  year: number;
  day: number;
  min: number;
  glo_avg: number; // global horizontal
  dir_avg: number; // direta normal
  diff_avg: number; // onda curta difusa
  lw_avg: number; // onda longa descendente
  par_avg: number; // par
  lux_avg: number; // iluminância
  tp_sfc: number; // temperatura do ar
  humid: number; // umidade relativa
  press: number; // pressão atmoférica
  rain: number; // precipitação acumulada
  ws_10m: number; // velocidade do vento
  wd_10m: number; // direção do vento
  "Wind Speed": number;
  "Solar Zenith Angle": number;
}

const rangeDef = 16;
const startYearDef = 2005;
const YearEndDef = startYearDef + rangeDef;
const years = Array.from({ length: rangeDef }, (_, i) => i + startYearDef);

export default function TabMonthlyData() {
  const [nameDatabaseSolarRadiation, setNameDatabaseSolarRadiation] = React.useState<string>("DbPvgisNsrdb");
  const [startYear, setStartYear] = React.useState<number>(startYearDef);
  const [endYear, setEndYear] = React.useState<number>(startYear);
  const [isghi, setIsGhi] = React.useState<boolean>(false);
  const [isdni, setIsDni] = React.useState<boolean>(false);
  const [isghiOptimumAngle, setIsGhiOptimumAngle] = React.useState<boolean>(false);
  const [isghiWithAngle, setIsGhiWithAngle] = React.useState<boolean>(false);
  const [ghiDegree, setGhiDegree] = React.useState<number>(0);

  const [data, setData] = React.useState<DataProps[]>([]);
  const map = useMap();

  const handleDatabaseSolarRadiation = (event: SelectChangeEvent<string>) => {
    setNameDatabaseSolarRadiation(event.target.value as string);
  };

  const handleStartYear = (event: SelectChangeEvent<number>) => {
    setStartYear(event.target.value as number);
  };

  const handleEndYear = (event: SelectChangeEvent<number>) => {
    setEndYear(event.target.value as number);
  };

  const handleGhi = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGhi(!event.target.checked);
  };

  const handleDni = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDni(!event.target.checked);
  };

  const handleIsghiOptimumAngle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGhiOptimumAngle(!event.target.checked);
  };

  const handleIsGhiWithAngle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsGhiWithAngle(!event.target.checked);
  };

  const handleGhiDegree = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setGhiDegree((prev) => +event.target.value || prev);
  };

  React.useEffect(() => {
    console.log("test");
    const apiUrl =
      "https://cors-anywhere.herokuapp.com/https://developer.nrel.gov/api/nsrdb/v2/solar/psm3-download.csv?api_key=KCxLcU8qlEMRCc1k4VqYxy8W61izK8dEgg0ZcWrF";
    const params = new URLSearchParams();

    console.log(map);
    // params.append('api_key', 'KCxLcU8qlEMRCc1k4VqYxy8W61izK8dEgg0ZcWrF ');
    params.append(
      "wkt",
      `POINT(${map.position.lng} ${map.position.lat})`
    );
    params.append("names", "2019");
    params.append("leap_day", "false");
    params.append("interval", "30");
    params.append("utc", "false");
    params.append("full_name", "John Doe");
    params.append("email", "test@test.com");
    params.append("affiliation", "Example Inc.");
    params.append("mailing_list", "false");
    params.append("reason_for_use", "Research");
    // params.append('attributes', 'ghi,dhi,dni,wind_speed_10m_nwp,surface_air_temperature_nwp,solar_zenith_angle');
    console.log(`${apiUrl}&${params.toString()}`);

    fetch(`${apiUrl}&${params.toString()}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/x-www-form-url",
      },
    })
      .then((response) => response.text())
      .then((csvData) => {
        const csvWithoutFirstTwoLines = csvData.slice(csvData.indexOf("Year"));
        console.log(csvWithoutFirstTwoLines);
        csvToJson({
          delimiter: ",",
        })
          .fromString(csvWithoutFirstTwoLines)
          .then((jsonObject: unknown) => {
            console.log(jsonObject);
            setData(jsonObject as unknown as DataProps[]);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [map]);

  return (
    <Container
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <DivTablesInfos></DivTablesInfos>
    </Container>
  );
}
