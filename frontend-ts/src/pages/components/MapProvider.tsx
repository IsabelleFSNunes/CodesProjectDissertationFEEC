import React, { createContext, useContext, useReducer } from "react";

import { GoogleMapProps } from "../GoogleMap";

interface MapContextProps {
  position: { lat: number; lng: number };
  zoom: number;
}

const MapContext = createContext<MapContextProps>({
  position: {
    lat: -22.90564,
    lng: -47.059563,
  },
  zoom: 10,
});

const MapDispatchContext = createContext<React.Dispatch<Action> | null>(null);

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

type Action = {
  type: string;
  payload: RecursivePartial<GoogleMapProps>;
};

interface MapProviderProps {
  children: React.ReactElement | React.ReactElement[];
}

export function MapProvider({ children }: MapProviderProps) {
  const [map, dispatch] = useReducer(mapReducer, {
    position: {
      lat: -22.90564,
      lng: -47.059563,
    },
    zoom: 10,
  });

  return (
    <MapContext.Provider value={map}>
      <MapDispatchContext.Provider value={dispatch}>
        {children}
      </MapDispatchContext.Provider>
    </MapContext.Provider>
  );
}

export function useMap() {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error("useMap must be used within a MapProvider");
  }
  return context;
}

export function useMapDispatch() {
  const context = useContext(MapDispatchContext);
  if (context === null) {
    throw new Error("useMapDispatch must be used within a MapProvider");
  }
  return context;
}

export function mapReducer(map: GoogleMapProps, action: Action): GoogleMapProps{
  switch (action.type) {
    case "position":
      return {
        ...map,
        position: {
            lat: action.payload.position?.lat || map.position.lat,
            lng: action.payload.position?.lng  || map.position.lng,
        }
      };
    case "lgn":
      return {
        ...map,
        position: {
          ...map.position,
          lng: action.payload.position?.lng || map.position.lng,
        },
      };
    case "lat":
      return {
        ...map,
        position: {
          ...map.position,
          lat: action.payload.position?.lat || map.position.lat,
        },
      };
    case "zoom":
      return {
        ...map,
        zoom: action.payload.zoom || map.zoom,
      };

    default:
      throw new Error("Invalid action type");
  }
}
