# ==================function to find the three nearby City to the Point Of Interest (POI)==========================#
#===== Lattitude and longitudes data are extracted from Atlas Brasileiro de Energia Solar - 2ª Edição (2017)
#=. SEDES DE MUNICÍPIOS consist of 5570 sedes municipios of Brazil.
import pandas as pd
import os
import warnings
import math
import numpy as np
import csv
import glob
import matplotlib.pyplot as plt
import haversine as hs
from itertools import product
from matplotlib import cm

#====== read database of Atlas Brasileiro de Energia Solar - 2ª Edição (2017)
getcwd=os.getcwd()
__location__ = os.path.realpath(os.path.join(os.getcwd(), os.path.dirname(__file__)))

# Read the CSV file into a dataframe and extract the data
df_Data = pd.read_csv(__location__ + '/IrradianceData/global_horizontal_means_sedes-munic.csv', sep=';')
CitiesID=df_Data['ID']
CitiesNames=df_Data['NAME']
CitiesStatesNames=df_Data['STATE']
Cities_Lats=df_Data['LAT']
Cities_Longs=df_Data['LON']

#=======================================================================================#
#. find nearest cities to the Point Of Interest (POI) from the Sedes de municipios
#input: POI_coordinates=[POI_Lat, POI_Long]

def NearbyCitiesData (POI_coordinate):
    #1.finding distance from POI to all Cities
    Dist_POI_Cities=[]
    for i2 in range(len(Cities_Lats)):
        DistS_hs=hs.haversine(POI_coordinate, [Cities_Lats[i2], Cities_Longs[i2]])  # in km
        Dist_POI_Cities.append(DistS_hs)
    #===finding the theree nearest locations to the POI===
    #sort the cities based on distance to POI
    DistSorted= sorted (Dist_POI_Cities)
    DistSortedIdxs=[]
    for num in DistSorted:
        idxc=Dist_POI_Cities.index(num)
        DistSortedIdxs.append(idxc)   #Idxs in the city data
    # first city
    FcityIdx=DistSortedIdxs[0]
    FcityID=  CitiesID[FcityIdx]
    FcityName =  CitiesNames[FcityIdx]
    FcityLat=  Cities_Lats[FcityIdx]
    FcityLong=Cities_Longs[FcityIdx]
    FcityDistKm=Dist_POI_Cities [FcityIdx]
    FirstCityData=[FcityID, FcityName, FcityLat,FcityLong,FcityDistKm]

    # second city
    ScityIdx=DistSortedIdxs[1]
    ScityID=  CitiesID[ScityIdx]
    ScityName =  CitiesNames[ScityIdx]
    ScityLat=  Cities_Lats[ScityIdx]
    ScityLong=Cities_Longs[ScityIdx]
    ScityDistKm=Dist_POI_Cities [ScityIdx]
    SecondCityData=[ScityID, ScityName, ScityLat,ScityLong,ScityDistKm]

    # third city
    TcityIdx=DistSortedIdxs[2]
    TcityID=  CitiesID[TcityIdx]
    TcityName =  CitiesNames[TcityIdx]
    TcityLat=  Cities_Lats[TcityIdx]
    TcityLong=Cities_Longs[TcityIdx]
    TcityDistKm=Dist_POI_Cities [TcityIdx]
    ThirdCityData=[TcityID, TcityName, TcityLat, TcityLong, TcityDistKm]

    ThreeNearbyCities=[FirstCityData, SecondCityData, ThirdCityData]

    return ThreeNearbyCities

#===========================================
#test
#POI_coordinate=[-22.9099, -47.0626]
#ThreeNearbyCities=NearbyCities (POI_coordinate)
#print(ThreeNearbyCities)
