import json
from django.shortcuts import render
from .models import CitiesdataTilts0Kt1977, CitiesdataTiltslatitudesKt1977, CitiesdataTiltsmaxminmonthlypoaKt1977, CitiesdataTiltsmaxpoaannualKt1977, GlobalHorizontalMeansSedesMunic, ParMeansSedesMunic
from django.http import HttpResponse, JsonResponse
from django.core import serializers
from django.db.models import F

import pandas as pd
import numpy as np
import haversine as hs
from itertools import product
from matplotlib import cm
import os

from django.views.decorators.csrf import csrf_exempt

#  Crie uma classe para generalizar a chamada do metodo NearbyCitiesData
class CitiesData:
    ghi_list_sedes_munic = []
    teste = 52
    POI_coordinate = [-23.5505, -46.6333] # São Paulo, SP
    number_of_nearest_cities = 3
    List_Nearest_Cities = []

    def __init__(self):
        self.ghi_list_sedes_munic = GlobalHorizontalMeansSedesMunic.objects.filter().order_by('id')

    def call_NearbyCitiesData(self):
        self.List_Nearest_Cities = list( NearbyCitiesData(self.ghi_list_sedes_munic, self.POI_coordinate, self.number_of_nearest_cities) )
    
    def update_coordinates(self, POI_coordinate, number_of_nearest_cities):
        self.POI_coordinate = POI_coordinate
        self.number_of_nearest_cities = number_of_nearest_cities
        self.call_NearbyCitiesData()
    
    def get_list_nearest_cities(self, index=None):
        print("Inside get_list_nearest_cities")
        print(self.List_Nearest_Cities)
        if index == None:
            return self.List_Nearest_Cities
        elif index <= self.number_of_nearest_cities:
            return self.List_Nearest_Cities[index]
        else:
            return None
        
    def get_number_of_nearest_cities(self):
        return self.number_of_nearest_cities
    
    def get_POI_coordinate(self):
        return self.POI_coordinate


### variavel global para armazenar os dados de cidades vizinhas
cities_data = CitiesData()

@csrf_exempt
def initializing_data(request):
    print(request)
    if (request.method == 'GET'):
        if(request.GET.get('lat') != None or request.GET.get('lon') != None or request.GET.get('n_cities') != None):
            POI_coordinate = [float(request.GET['lat']), float(request.GET['lon'])]
            number_of_nearest_cities = int(request.GET['n_cities'])
            cities_data.update_coordinates(POI_coordinate, number_of_nearest_cities)
            return HttpResponse("Data initialized")
        else:
            return HttpResponse("Missing parameters")
    else:
        return HttpResponse("Wrong method")

def update_database_poa():
    list_of_cities = [ CitiesdataTiltslatitudesKt1977, CitiesdataTiltsmaxminmonthlypoaKt1977, CitiesdataTiltsmaxpoaannualKt1977]
    columns = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep","oct", "nov", "dec", "average"]

    for table in list_of_cities:
        table.objects.all().update(jan =F('jan') * 1000)
        table.objects.all().update(feb =F('feb') * 1000)
        table.objects.all().update(mar =F('mar') * 1000)
        table.objects.all().update(apr =F('apr') * 1000)
        table.objects.all().update(may =F('may') * 1000)
        table.objects.all().update(jun =F('jun') * 1000)
        table.objects.all().update(jul =F('jul') * 1000)
        table.objects.all().update(aug =F('aug') * 1000)
        table.objects.all().update(sep =F('sep') * 1000)
        table.objects.all().update(oct =F('oct') * 1000)
        table.objects.all().update(nov =F('nov') * 1000)
        table.objects.all().update(dec =F('dec') * 1000)
        table.objects.all().update(average =F('average') * 1000)
        table.objects.all().update(delta =F('delta') * 1000)

@csrf_exempt
def abacuses_data(request):
    """
    Recebe latitude e longitude e retorna a matriz de dados do abacus.
    """
    if request.method != 'GET':
        return HttpResponse("Wrong method", status=405) 
    
    if(request.GET.get('lat') == None or request.GET.get('lon') == None):
        return HttpResponse("Missing parameters: 'lat' and 'lon' are required.", status=400)

    try:
        lat = float(request.GET['lat'])
        lon = float(request.GET['lon'])
        POI = (lat, lon)
        
        matrix_list = []
        matrix = []

        for i in range(0, 6000, 1000):
            name_file = f"MatricesLatLon{i}.csv"
            path_csv = os.path.join("/database", "abacus", name_file)
            
            print(path_csv)
            if not os.path.exists(path_csv):
                continue

            df = pd.read_csv(path_csv, sep=',')

            # 1. Crie uma Series do Pandas com os valores de distância
            distance_values = df.apply(
                lambda row: hs.haversine(POI, (row['Latitude'], row['Longitude'])),
                axis=1
            )

            df.insert(2, 'distance_km', distance_values)

            MIN_DISTANCE_KM = 20
            result = df[df['distance_km'] <= MIN_DISTANCE_KM].copy()
            print(result)
            
            if not result.empty:
                matrix_list = result.iloc[0, 3:].tolist()
                
                # Transforma a lista em uma matriz 19x73, assumindo 1387 valores (2 + 1385)
                # Você pode ajustar o 73 se o número de colunas for diferente
                for j in range(0, len(matrix_list), 73):
                    matrix.append(matrix_list[j:j+73])
                
                break 
        if matrix:
            return JsonResponse(matrix, safe=False)
        else:
            return JsonResponse({"error": "Data not found for the specified coordinates."})

    except ValueError:
        return HttpResponse("Invalid parameters: 'lat' and 'lon' must be valid numbers.", status=400)
    except Exception as e:
        return HttpResponse(f"An error occurred: {str(e)}", status=500)
    

def index(request):
    return render(request, 'index.html')

# Create your views here.
def diffuse_list(request):
    diffuse = []
    diffuse = CitiesdataTilts0Kt1977.objects.all()[0:10]
    print(diffuse)
    diffuse_json = serializers.serialize('json', diffuse)
    return HttpResponse(diffuse_json)

'''
ghi list for sedes munic list
Create a list with 3 closest cities of the selectioned POI and the Sintetic - PAR
'''
@csrf_exempt
def ghi_sedes_munic_list(request):
    if request.method != 'GET':
        return HttpResponse("Error: GET method required", status=405)

    # Obtém a lista de cidades mais próximas
    List_Nearest_Cities = cities_data.get_list_nearest_cities()
    print(List_Nearest_Cities)

    # Verifica se a lista não está vazia
    if List_Nearest_Cities:
        # Recupera o objeto do banco correspondente à primeira cidade
        first_city_pk = getattr(List_Nearest_Cities[0], 'pk', None)
        if first_city_pk is not None:
            obj = ParMeansSedesMunic.objects.filter(pk=first_city_pk).first()
            if obj:
                List_Nearest_Cities.append(obj)

    # Serializa para JSON
    global_json_string  = serializers.serialize('json', List_Nearest_Cities)
    global_data = json.loads(global_json_string)
    return JsonResponse(global_data, safe=False)

@csrf_exempt
def extracting_data_nearby_cities(request):
    if (request.method == 'GET'):
        print("Inside extracting_data_nearby_cities")
        for item in cities_data.get_list_nearest_cities( ) :
            print(item.id)
        print("End of list items nearby cities")    
        city_Tilt_Tilts0 = []                   # Tilt = 0
        city_Tilt_TiltsLatitude = []            # Tilt = Latitude
        city_Tilt_TiltsMaxPOAannual = []        # Tilt = MaxPOAannual
        city_Tilt_TiltMaxMinMonthlyPOA = []     # Tilt = MaxMinMonthlyPOA
        # values('cityid', 'tilt0', 'average', 'delta', 'cityname') 
        for item in cities_data.get_list_nearest_cities() :
            city_Tilt_Tilts0.append( CitiesdataTilts0Kt1977.objects.filter(pk=item.id).values().first() )
            city_Tilt_TiltsLatitude.append( CitiesdataTiltslatitudesKt1977.objects.filter(pk=item.id).values().first() )
            city_Tilt_TiltsMaxPOAannual.append( CitiesdataTiltsmaxpoaannualKt1977.objects.filter(pk=item.id).values().first() )
            city_Tilt_TiltMaxMinMonthlyPOA.append( CitiesdataTiltsmaxminmonthlypoaKt1977.objects.filter(pk=item.id).values().first() )

        # global_json = serializers.serialize('json', city_Tilt_Tilts0)
        json_response = { "Tilt0" : city_Tilt_Tilts0,
                        "TiltLatitude" : city_Tilt_TiltsLatitude,
                        "TiltMaxPOAannual" : city_Tilt_TiltsMaxPOAannual,
                        "TiltMaxMinMonthlyPOA" : city_Tilt_TiltMaxMinMonthlyPOA
                    }
        return JsonResponse( json_response )
    else:
        return HttpResponse("Error: GET method not found")


@csrf_exempt
def nearby_cities(request):
    ghi_list_sedes_munic = []
    ghi_list_sedes_munic = GlobalHorizontalMeansSedesMunic.objects.filter().order_by('id')

    if(request.method == 'POST'):
        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        print(body_data)
        # if(body_data.contains('POI_coordinate')):
        POI_coordinate_lat = body_data['POI_coordinate']['lat']
        POI_coordinate_lon = body_data['POI_coordinate']['lon']
        POI_coordinate = [POI_coordinate_lat, POI_coordinate_lon]

        number_of_nearest_cities = 3
        # if(body_data.contains('Number_of_nearest_cities')):
        number_of_nearest_cities = body_data['Number_of_nearest_cities']

        # else:
            # return HttpResponse("Error")

        # POI_coordinate = [-23.5505, -46.6333] # São Paulo, SP
        # number_of_nearest_cities = 5
        List_Nearest_Cities = NearbyCitiesData(ghi_list_sedes_munic, POI_coordinate, number_of_nearest_cities)

        global_json = serializers.serialize('json', List_Nearest_Cities)

        return HttpResponse( global_json )
    elif (request.method == 'GET'):
        if(request.GET.get('lat') != None and request.GET.get('lon') != None and request.GET.get('n_cities') != None):
            POI_coordinate = [float(request.GET.get('lat')), float(request.GET.get('lon'))]
            print(POI_coordinate)
            number_of_nearest_cities = int(request.GET.get('n_cities'))

            List_Nearest_Cities = NearbyCitiesData(ghi_list_sedes_munic, POI_coordinate, number_of_nearest_cities)

            global_json = serializers.serialize('json', List_Nearest_Cities)
            return HttpResponse( global_json )
        else:
            return HttpResponse("Error")
    else:
        return HttpResponse("Error")

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
    for i in range(1,number_of_nearest_cities+1):
        index = DistSortedIdxs[i]
        List_Nearest_Cities.append(ghi_list_sedes_munic[index])

    print("The nearest cities to the POI are: ")
    print(List_Nearest_Cities)

    return List_Nearest_Cities

def home(request):
    # return render(request, 'home.html')
    return HttpResponse('<h1>Home</h1>')

def phase1(request):
    # return render(request, 'phase1.html')
    return HttpResponse('<h1>phase1</h1>')
