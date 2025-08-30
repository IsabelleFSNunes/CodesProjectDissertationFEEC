import json
from .models import CitiesdataTilts0Kt1977, CitiesdataTiltslatitudesKt1977, CitiesdataTiltsmaxminmonthlypoaKt1977, CitiesdataTiltsmaxpoaannualKt1977, GlobalHorizontalMeansSedesMunic
import pandas as pd
import numpy as np
import haversine as hs
from itertools import product
from matplotlib import cm



def PAR_ClosestCity(par_list_sedes_munic, POI_coordinate, closest_poi):
    par_munic = []

    par_munic.append(par_list_sedes_munic)

    print("The par_munic to the POI are: ")
    print(par_munic)

    return par_munic

def NearbyCitiesData(ghi_list_sedes_munic, POI_coordinate, number_of_nearest_cities):
    CitiesID = ghi_list_sedes_munic.values_list('id', flat=True)
    Cities_Lats = ghi_list_sedes_munic.values_list('lat', flat=True)
    Cities_Longs = ghi_list_sedes_munic.values_list('lon', flat=True)
    # CitiesNames = ghi_list_sedes_munic.values_list('name', flat=True)
    # CitiesStatesNames = ghi_list_sedes_munic.values_list('state', flat=True)


    #1.finding distance from POI to all Cities
    Dist_POI_Cities=[]
    for i in range(len(Cities_Lats)):
        DistS_hs=hs.haversine(POI_coordinate, [Cities_Lats[i], Cities_Longs[i]])  # in km
        Dist_POI_Cities.append(DistS_hs)

    #===finding the theree nearest locations to the POI===
    #sort the cities based on distance to POI
    DistSorted= sorted (Dist_POI_Cities)
    DistSortedIdxs=[]
    for num in DistSorted:
        idxc=Dist_POI_Cities.index(num)
        DistSortedIdxs.append(idxc)   #Idxs in the city data

    List_Nearest_Cities = []
    #find the n nearest cities to the POI
    for i in range(number_of_nearest_cities):
        index = DistSortedIdxs[i]
        List_Nearest_Cities.append(ghi_list_sedes_munic[index])

    print("The nearest cities to the POI are: ")
    print(List_Nearest_Cities)

    return List_Nearest_Cities
