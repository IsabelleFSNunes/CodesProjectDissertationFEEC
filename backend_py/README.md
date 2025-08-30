# API Django

**Este documento é um guia para interagir com a API do backend da aplicação.**

---

### **Tabela de Conteúdos**

1.  [Estrutura de URLs](#estrutura-de-urls)
    * [Endpoints da API](#endpoints-da-api)
    * [Views de Front-end](#views-de-front-end)
    * [Rota de Administração](#rota-de-administracao)
2.  [Exemplo de Requisição (com curl)](#exemplo-de-requisicao-com-curl)
3.  [Requisitos](#requisitos)
4.  [Execução](#execucao)

---

## Estrutura de URLs

As URLs da aplicação são definidas no arquivo `urls.py` e estão divididas em rotas para administração, views de front-end e endpoints da API.

### Endpoints da API

Esses são os endpoints principais que a sua aplicação, como o frontend, irá consumir.

* `/diffuse/`: Retorna uma lista de dados difusos.
* `/ghi_sedes_munic/`: Retorna dados de irradiância global horizontal (GHI) para sedes municipais.
* `/nearby_cities/`: Retorna dados das cidades mais próximas com base em uma coordenada geográfica.
* `/extracting_data/`: Endpoint para extrair dados de cidades próximas.
* `/abacuses/`: Fornece dados relacionados aos ábacos da aplicação.
* `/initializing/`: Usado para a inicialização de dados da aplicação.

---

### Views de Front-end

Essas rotas são projetadas para renderizar páginas HTML e não para serem consumidas diretamente por outras APIs.

* `/index/`: Rota principal para a página inicial da aplicação.
* `/home/`: Rota para a página de "home" da aplicação.
* `/phase1/`: Rota para a "fase 1" da aplicação.

---

### Rota de Administração

* `/admin/`: Fornece acesso ao painel de administração padrão do Django. É aqui que você pode gerenciar modelos de banco de dados, usuários e outras configurações do site.

---

## Exemplo de Requisição (com `curl`)


Para interagir com um endpoint que espera dados no formato JSON, como `nearby_cities/`, você pode usar um comando `curl` no seu terminal. Isso é útil para testes e depuração.

```bash
curl -X POST \
  http://localhost:8000/api/nearby_cities/ \
  -H 'Content-Type: application/json' \
  -d '{
    "POI_coordinate": {
        "lat": -23.5505,
        "lon": -46.6333
    },
    "Number_of_nearest_cities": 5
}'
```