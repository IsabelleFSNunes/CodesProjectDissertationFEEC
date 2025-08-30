import { Container, Typography } from '@mui/material'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { useMap } from '../MapProvider';
import axios from 'axios';
import { DataGHI, DataTotal, GHIContext } from './GhiTypes';
import PlotGHI from './GhiPlots';
import { Line } from 'react-chartjs-2';

export interface GHIHandles {
  handleGHI: () => void;
}

// function GhiNearbyCities() {
const GhiNearbyCities = forwardRef<GHIHandles>((props, ref) => {
  const {t} = useTranslation();
  const map = useMap();

  const columns: GridColDef[] = [
    // { field: "name", headerName: "Name", width: 200 },
    { field: "id", headerName: `${t("Phase1.Tables.id")}`, width: 100 },
    { field: "name", headerName: `${t("Phase1.Tables.cityname")}`, width: 180 },
    // { field: "class_field", headerName: `${t("Phase1.Tables.class")}`, width: 130 },
    { field: "state", headerName: `${t("Phase1.Tables.state")}`, width: 130 },
    { field: "annual", headerName: `${t("Phase1.Tables.annual")}`, width: 80 },
    { field: "jan", headerName: `${t("Phase1.Tables.jan")}` , width: 80 },
    { field: "feb", headerName: `${t("Phase1.Tables.fev")}`, width: 80 },
    { field: "mar", headerName: `${t("Phase1.Tables.mar")}`, width: 80 },
    { field: "apr", headerName: `${t("Phase1.Tables.abr")}`, width: 80 },
    { field: "may", headerName: `${t("Phase1.Tables.mai")}`, width: 80 },
    { field: "jun", headerName: `${t("Phase1.Tables.jun")}`, width: 80 },
    { field: "jul", headerName: `${t("Phase1.Tables.jul")}`, width: 80 },
    { field: "aug", headerName: `${t("Phase1.Tables.ago")}`, width: 80 },
    { field: "sep", headerName: `${t("Phase1.Tables.set")}`, width: 80 },
    { field: "oct", headerName: `${t("Phase1.Tables.out")}`, width: 80 },
    { field: "nov", headerName: `${t("Phase1.Tables.nov")}`, width: 80 },
    { field: "dec", headerName: `${t("Phase1.Tables.dec")}`, width: 80 },
    { field: "lon", headerName: `${t("Phase1.Tables.lon")}`, width: 90 },
    { field: "lat", headerName: `${t("Phase1.Tables.lat")}`, width: 90 },
    { field: "id_table", headerName: `${t("Phase1.Tables.id_db")}`, width: 60 },
  ];
  

    //  const [responseJson, setResponseJson] = useState<ResponseNearbyCities>({tzero: [], tlatitude: [], tmaxannualpoa: [], tmaxminmonthlypoa: []});
    const [responseJson, setResponseJson] = useState<DataTotal[]>([]);
    const [ghiList, setGhiList] = useState<DataGHI[]>([]);

    const distance = 3;
    // const responseApiGhi = async () => {
    const handleGHI = useCallback(async () => {
      try {
        // 1. Remova o bloco 'transformResponse'. Axios fará o parsing automaticamente.
        const response = await axios.get<DataTotal[]>(`/api/ghi_sedes_munic/`);

        // A partir daqui, 'response.data' já é o seu array de objetos.
        setResponseJson(response.data);
        console.log(responseJson)

        const formattedGhiList = response.data.map((item, index) => {
          // 2. Crie um novo objeto em vez de modificar o 'item.fields' original.
          return {
            ...item.fields, // Copia todas as propriedades de 'item.fields'
            id: `${t(`Phase1.Page.Table GHI.Table IDs.p${index}`)}`, // Adiciona/sobrescreve 'id'
            id_table: item.pk, // Adiciona 'id_table'
          };
        });

        setGhiList(formattedGhiList);

      } catch (error) {
        console.error("Erro ao buscar dados GHI:", error); // Use console.error para erros
      }
    }, [ref]);
    
    useImperativeHandle(ref, () => {
      return {
         handleGHI
      }
    });

    // responseAPI();
    // console.log(ghiList);

  return (
    <Container>
        <Typography variant="h5">{t(`Phase1.Page.Table GHI.text`)}</Typography>
        <Typography variant="body1">{t(`Phase1.Page.Table GHI.subtitles`)}</Typography>
        {/* <Typography variant="h5"> `${ghiList}` </Typography> */}
        <DataGrid 
          rows={ghiList} 
          columns={columns}
          autoHeight
          initialState={{
          pagination: {
              paginationModel: {
              pageSize: 5,
              },
          },
        }}
        pageSizeOptions={[5]} />
        <GHIContext.Provider value={ghiList}>
          <PlotGHI/>
        </GHIContext.Provider>
      </Container>
  )
});

export default GhiNearbyCities ;
