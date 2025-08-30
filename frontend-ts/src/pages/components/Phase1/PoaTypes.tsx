import { createContext, useState, useEffect } from "react";
import React from 'react';

export type POA = {
    tilt: number | undefined;
    tilt0: number | undefined;
    tilt_equal_latitude: number | undefined;
    tilt_maxannualpoa: number | undefined;
    tilt_maxminmonthlypoa: number | undefined;
    id?: number;
    average: number;
    delta: number;
    cityid: number;
    cityname: string;
    citystate: string;
    latitude: number;
    longitude: number;
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
    annual: number;
};

export type POATable = Omit<
    POA,
    'id' | 'longitude' | 'latitude' | 'annual' | 'tilt' | 'tilt_equal_latitude' | 'tilt_maxannualpoa' | 'tilt0' | 'tilt_maxminmonthlypoa' | 'average' | 'delta' | 'cityid' | 'cityname' | 'citystate'
>;

export type ResponseNearbyCities = {
    tzero: Array<POA>;
    tlatitude: Array<POA>;
    tmaxannualpoa: Array<POA>;
    tmaxminmonthlypoa: Array<POA>;
};

// Use um contexto para a lista completa de POAs para o gráfico
export const POAContext = createContext<POA[]>([]);

// Use um contexto para o valor da cidade selecionada
const SelectedCityContext = createContext<[number, React.Dispatch<React.SetStateAction<number>>] | undefined>(undefined);

export function SelectedCityProvider({ children }: { children: React.ReactNode }) {
    const [selectedCityId, setSelectedCityId] = useState<number>(0);
    return (
        <SelectedCityContext.Provider value={[selectedCityId, setSelectedCityId]}>
            {children}
        </SelectedCityContext.Provider>
    );
}

export function useSelectedCity() {
    const context = React.useContext(SelectedCityContext);
    if (context === undefined) {
        throw new Error('useSelectedCity must be used within a SelectedCityProvider');
    }
    return context;
}