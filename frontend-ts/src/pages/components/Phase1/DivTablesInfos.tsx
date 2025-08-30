import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import { useMap } from "../MapProvider";
import React from "react";
import Contour2Histogram from "./Contour2Histogram";
import axios from 'axios';

type Data = {
  id: number;
  country: string;
  lon: number;
  lat: number;
  annual: number;
  jan: number;
  feb: number;
  mar: number;
  apr: number;
  may: number;
  jun: number;
  jul: number;
  aug: number;
  sep: number;
  oct: number;
  nov: number;
  dec: number;
};

type DataGraph = Omit<Data, 'id' | 'country' | 'lon' | 'lat' | 'annual'>;

type Props = {
  data: DataGraph[];
};

const LineChart: React.FC<Props> = ({ data }) => {
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const endpoints = ["GHI", "Direct Normal", "Diffuse", "PAR", "GTI"]; // subtitles

  const chartData = {
    labels: months,
    datasets: data.map((item, index) => ({
      label: endpoints[index],
      data: Object.values(item).slice(5),
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16), // generate a random color
      fill: false,
    })),
  };

  return <Line data={chartData} />;
};


const columns: GridColDef[] = [
  // { field: "name", headerName: "Name", width: 200 },
  { field: "id", headerName: "ID", width: 90 },
  { field: "country", headerName: "Country", width: 130 },
  { field: "lat", headerName: "Latitude", width: 130 },
  { field: "lon", headerName: "Longitude", width: 130 },
  { field: "annual", headerName: "Annual", width: 130 },
  { field: "jan", headerName: "Jan", width: 130 },
  { field: "feb", headerName: "Feb", width: 130 },
  { field: "mar", headerName: "Mar", width: 130 },
  { field: "apr", headerName: "Apr", width: 130 },
  { field: "may", headerName: "May", width: 130 },
  { field: "jun", headerName: "Jun", width: 130 },
  { field: "jul", headerName: "Jul", width: 130 },
  { field: "aug", headerName: "Aug", width: 130 },
  { field: "sep", headerName: "Sep", width: 130 },
  { field: "oct", headerName: "Oct", width: 130 },
  { field: "nov", headerName: "Nov", width: 130 },
  { field: "dec", headerName: "Dec", width: 130 },
];

const App = () => {
  const [idData, setIdData] = useState<string[]>([]);
  const [data, setData] = useState<Data[]>([]);

  const [idGhiList, setIdGhiList] = useState<string[]>([]);
  const [ghiList, setGhiList] = useState<Data[]>([]); // List for GHI table

  const [idGhi005, setIdGhi005] = useState<string[]>([]);
  const [ghi005, setGhi005] = useState<Data[]>([]);   // GHI default dist 0.05

  const [idGhi01, setIdGhi01] = useState<string[]>([]);
  const [ghi01, setGhi01] = useState<Data[]>([]);     // GHI dist 0.1

  const [idGhi05, setIdGhi05] = useState<string[]>([]);
  const [ghi05, setGhi05] = useState<Data[]>([]);     // GHI dist 0.5

  const [direct, setDirect] = useState<Data[]>([]);
  const [diffuse, setDiffuse] = useState<Data[]>([]);
  const [par, setPar] = useState<Data[]>([]);
  const [tilted, setTilted] = useState<Data[]>([]);

  const map = useMap();

  useEffect(() => {
    const endpoints = ["ghi", "direct", "diffuse", "par", "tilted"];

    const distances = 3;

    // const responseAPI =async (params:type) => {
    //   try {
    //     const response = await axios.get(`/api/extracting_data/?lat=${map.position.lat}&lon=${map.position.lng}&n_cities=${distances}`);
    //     console.log(response.data);
    //     setGhiList(response.data);
    //   }
    //   catch (error) {
    //     console.log(error);
    //   }
    // }

    // Promise.all(
    //   let response = await fetch(`/api/extracting_data/?lat=${map.position.lat}&lon=${map.position.lng}&dist=${distance}`);
    //   return await response.json();
    // ).then((values) => {

    //   setGhi005(values[0] as Data[]);
    //   setGhi01(values[1] as Data[]);
    //   setGhi05(values[2] as Data[]);
    //   console.log(values);
    //   setGhiList(values);
    // });

    const dist = 0.05;
    Promise.all(
      endpoints.map(async (endpoint) => {
        const response = await fetch(`http://localhost:3333/${endpoint}?lat=${map.position.lat}&lon=${map.position.lng}&dist=${dist}`);
        return await response.json();
      })
    ).then((values) => {
      setDirect(values[0] as Data[]);
      setDiffuse(values[1] as Data[]);
      setPar(values[2] as Data[]);
      setTilted(values[3] as Data[]);
      console.log(values);
      setData(values);
    });
  }, [map.position.lat, map.position.lng]);

  return (
    <div style={{ height: 600, width: "100%" }}>
      <Typography>{ghiList.toString()}</Typography>
      <Typography>All</Typography>
      <DataGrid rows={data.map((item, index) => ({ ...item, id: index }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]} />
      <LineChart data={data.flat()} />

      <Typography>GHI</Typography>
      <DataGrid rows={ghi005}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]} />

      <Typography>Direct</Typography>
      <DataGrid rows={direct} columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]} />

      <Typography>Diffuse</Typography>
      <DataGrid rows={diffuse}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]} />

      <Typography>Par</Typography>
      <DataGrid rows={par} columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]} />

      <Typography>Tilted</Typography>
      <DataGrid rows={tilted} columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]} />
      <Contour2Histogram />
    </div>
  );
};

export default App;
