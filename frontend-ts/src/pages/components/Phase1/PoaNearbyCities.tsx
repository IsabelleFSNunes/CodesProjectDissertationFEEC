import { Container, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";
import React, { forwardRef, useCallback, useImperativeHandle, useRef, useState, useEffect } from "react";
import { useMap } from "../MapProvider";
import { POA, POATable, ResponseNearbyCities, useSelectedCity, POAContext } from "./PoaTypes";
import { useTranslation } from "react-i18next";
import { Line } from "react-chartjs-2";

export interface POAHandles {
    handlePOA: () => void;
}

const PoaNearbyCities = forwardRef<POAHandles>((props, ref) => {
    const { t } = useTranslation();
    const [selectedCityId, setSelectedCityId] = useSelectedCity();
    const selectedCityRef = useRef<number>(selectedCityId);

    const columns_table1: GridColDef[] = [
        { field: "id", headerName: `${t("Phase1.Tables.id")}`, width: 50 },
        { field: "cityname", headerName: `${t("Phase1.Tables.cityname")}`, width: 180 },
        { field: "tilt", headerName: `${t("Phase1.Tables.tilt")}`, width: 90 },
        { field: "average", headerName: `${t("Phase1.Tables.average")}`, width: 130 },
        { field: "delta", headerName: `${t("Phase1.Tables.delta")}`, width: 130 },
        { field: "jan", headerName: `${t("Phase1.Tables.jan")}`, width: 96 },
        { field: "feb", headerName: `${t("Phase1.Tables.fev")}`, width: 96 },
        { field: "mar", headerName: `${t("Phase1.Tables.mar")}`, width: 96 },
        { field: "apr", headerName: `${t("Phase1.Tables.abr")}`, width: 96 },
        { field: "may", headerName: `${t("Phase1.Tables.mai")}`, width: 96 },
        { field: "jun", headerName: `${t("Phase1.Tables.jun")}`, width: 96 },
        { field: "jul", headerName: `${t("Phase1.Tables.jul")}`, width: 96 },
        { field: "aug", headerName: `${t("Phase1.Tables.ago")}`, width: 96 },
        { field: "sep", headerName: `${t("Phase1.Tables.set")}`, width: 96 },
        { field: "oct", headerName: `${t("Phase1.Tables.out")}`, width: 96 },
        { field: "nov", headerName: `${t("Phase1.Tables.nov")}`, width: 96 },
        { field: "dec", headerName: `${t("Phase1.Tables.dec")}`, width: 96 },
        { field: "longitude", headerName: `${t("Phase1.Tables.lon")}`, width: 90 },
        { field: "latitude", headerName: `${t("Phase1.Tables.lat")}`, width: 90 },
    ];

    const [poaListComplete, setPoaListComplete] = useState<POA[]>([]);

    function filterSelectedCities(value: POA) {
        if (selectedCityId === 0) {
            return true;
        }
        return value.cityid === selectedCityId;
    }

    const handlePOA = useCallback(async () => {
        try {
            const response = await axios.get<ResponseNearbyCities>(
                `/api/extracting_data/`,
                {
                    transformResponse: (data: string): ResponseNearbyCities => {
                        const parsedData = JSON.parse(data);
                        console.log(parsedData)
                        return {
                            tzero: parsedData.Tilt0,
                            tlatitude: parsedData.TiltLatitude,
                            tmaxminmonthlypoa: parsedData.TiltMaxMinMonthlyPOA,
                            tmaxannualpoa: parsedData.TiltMaxPOAannual,
                        };
                    },
                }
            );
            const allData = [
                ...response.data.tzero,
                ...response.data.tlatitude,
                ...response.data.tmaxannualpoa,
                ...response.data.tmaxminmonthlypoa,
            ];
            setPoaListComplete(allData.flat());
        } catch (error) {
            console.log(error);
        }
    }, []);

    useImperativeHandle(ref, () => ({ handlePOA }));

    useEffect(() => {
        handlePOA();
    }, [handlePOA]);

    const teste2 = poaListComplete.map((item: POA) => {
        if (item.tilt0 !== undefined) {
            item.tilt = item.tilt0;
        } else if (item.tilt_equal_latitude !== undefined) {
            item.tilt = item.tilt_equal_latitude;
        } else if (item.tilt_maxannualpoa !== undefined) {
            item.tilt = item.tilt_maxannualpoa;
        } else if (item.tilt_maxminmonthlypoa !== undefined) {
            item.tilt = item.tilt_maxminmonthlypoa;
        }
        return item;
    });

    const OptionsNearbyCities: React.FC<{ data: POA[] }> = ({ data }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setSelectedCityId(Number(event.target.value));
            selectedCityRef.current = Number(event.target.value);
        };

        // Filtra dados para exibir apenas o primeiro item de cada cidade.
        const uniqueCities = data.reduce((acc, current) => {
            if (!acc.some(city => city.cityid === current.cityid)) {
                acc.push(current);
            }
            return acc;
        }, [] as POA[]);

        return (
            <FormControl>
                <FormLabel>{t(`Phase1.Page.Options Table.text`)}</FormLabel>
                <RadioGroup row value={selectedCityId.toString()} onChange={handleChange}>
                    {uniqueCities.map((item: POA) => (
                        <FormControlLabel
                            value={item.cityid.toString()}
                            control={<Radio />}
                            label={`${item.cityname}, ${item.citystate}-(id:${item.cityid})`}
                            key={item.cityid}
                        />
                    ))}
                    <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label={t(`Phase1.Page.Options Table.all`)}
                    />
                </RadioGroup>
            </FormControl>
        );
    };

    const LineChart2: React.FC<{ data: POA[] }> = ({ data }) => {
        // Resto do código do gráfico permanece o mesmo
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
        const dataPlot = data.filter(filterSelectedCities).map<POATable>((item : POA) => ({
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

        const chartData = {
          labels: months,
          datasets: dataPlot.map((item:POATable, index:number) => ({
            label: `id: ${index.toString()}`,
            data: Object.values(item),
            borderColor: colors[index],
            fill: false,
          })),
        };
        return <Line data={chartData} />;
    };
   
    return (
        <Container>
            <Typography variant="h5">{t(`Phase1.Page.Table POA.text`)}</Typography>
            <Typography variant="body1">{t(`Phase1.Page.Table POA.subtitles`)}</Typography>
            <OptionsNearbyCities data={poaListComplete} />
            <DataGrid
                rows={teste2.filter(filterSelectedCities).map((item: POA, index: number) => ({ id: index, ...item }))}
                columns={columns_table1}
                autoHeight
                initialState={{
                    pagination: { paginationModel: { pageSize: 12 } },
                }}
                pageSizeOptions={[12]}
            />
            <LineChart2 data={teste2} />
        </Container>
    );
});

export default PoaNearbyCities;