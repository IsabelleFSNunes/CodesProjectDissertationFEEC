import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { Subtitles } from '@mui/icons-material';
import { Table } from '@mui/material';

i18next
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        debug: true,
        // fallbackLng: 'en',
        lng: 'pt',
        resources: {
            en: {
                translation: {
                    "App Bar": {
                        title: 'Home',
                        home: 'Home',
                        about: 'About',
                        contact: 'Contact',
                        phase1: 'Phase 1'
                    },
                    "Footer": {
                        "About Us": {
                            title: 'About Us',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis elit eu justo tempus, vel placerat tortor molestie.'
                        },
                        "Contact Us": {
                            title: 'Contact Us',
                            phone: 'Phone',
                            number_phone: '+55 11 99999-9999',
                            email: 'Email',
                            email_address: 'lesf@unicamp.com.br',
                            address: 'Address',
                            address_address: 'Av. Albert Einstein, 1251, Cidade Universitária, Campinas - SP, 13083-852'
                        },
                        "Connect Us": {
                            title: 'Connect Us',
                            insta: 'Instagram',
                            linkedin: 'Linkedin',
                            github: 'Github',
                            twitter: 'Twitter',
                        }
                    },
                    "Home": {
                        "Tab": {
                            title: 'Database setup'
                        },
                        "Page": {
                            "Title": {
                                text: 'First page'
                            }
                        },
                        "Grids": {
                            "Grid 0": {
                                title : 'Systems Photovoltaic Consultation' ,
                                subtitle : 'Consult the photovoltaic systems registered in the database. Actually there is only one system registered, the LABREN Database to brazilian cities.' ,
                                button: 'Consult'
                            },
                            "Grid 1": {
                                title : 'Advanced Simulations',
                                subtitle : '[Developing - Incomplete] Simulate the performance of a photovoltaic system.' ,
                                button: 'Simulate'
                            },
                        }
                    },
                    "About": {
                        "Tab": {
                            title: 'About'
                        },
                        "Page": {
                            "Title": {
                                text: 'Page about us',
                                description: 'See more about us'
                            }
                        }

                    },
                    "Phase1": {
                        "Button": {
                            title: 'Find the dataset'
                        },
                        "Page": {
                            "Title": {
                                text: 'Phase 1',
                                subtitle: 'This is the first phase of the project',
                                description: '...'
                            },
                            "Table GHI": {
                                text: 'GHI',
                                subtitles: 'Global Horizontal Irradiance',
                                description: '...',
                                "Table IDs": {
                                    p0: 'GHI Point 1',
                                    p1: 'GHI Point 2',
                                    p2: 'GHI Point 3',
                                    p3: 'PAR Point 1',
                                }
                            },
                            "Graph GHI": {
                                text: 'Plot GHI',
                                subtitles: 'Global Horizontal Irradiance',
                                description: '...',
                            },
                            "Options Table" : {
                                text : 'Select the nearest point location. The options are displayed in order of proximity to the selected location.',
                                all : 'All Cities',
                            },
                            "Table POA": {
                                text: 'POA',
                                subtitles: 'Analysis of the POA to the nearby cities of  selected location',
                                description: '...',
                                "Table IDs": {
                                    "Tilt0":{
                                        p0: 'tilt0 Point 1',
                                        p1: 'tilt0 Point 2',
                                        p2: 'tilt0 Point 3',
                                    },
                                    "TiltLatitude":{
                                        p0: 'tilt1 Point 1',
                                        p1: 'tilt1 Point 2',
                                        p2: 'tilt1 Point 3',
                                    },
                                    "TiltMaxAnnual":{
                                        p0: 'TiltMaxAnnual Point 1',
                                        p1: 'TiltMaxAnnual Point 2',
                                        p2: 'TiltMaxAnnual Point 3',
                                    },
                                    "TiltMaxMin":{
                                        p0: 'TiltMaxMin Point 1',
                                        p1: 'TiltMaxMin Point 2',
                                        p2: 'TiltMaxMin Point 3',
                                    },

                                }
                            },
                            "Graph POA": {
                                text: 'Plot POA',
                                subtitles: 'Analysis of the POA to the nearby cities of  selected location',
                                description: '...'
                            },
                        },
                        "Tables" : {
                            id  : "ID", 
                            id_db  : "ID DB",
                            cityid : "City ID",
                            cityname : "City",
                            delta : "Delta",
                            tilt : "Tilt",
                            lat : "Latitude",
                            lon : "Longitude",
                            average : "Average", 
                            annual : "Annual",
                            class : "Class",
                            state :"State",
                            jan : "January",
                            fev : "February",
                            mar : "March",
                            abr : "April",
                            mai : "May",
                            jun : "June", 
                            jul : "July",
                            ago : "August",
                            set : "September",
                            out : "October",
                            nov : "November",
                            dec : "December",
                        }
                    }
                },
            },
            pt: {
                translation: {
                    "App Bar": {
                        title: 'Inicio',
                        home: 'Inicio',
                        about: 'Sobre nós',
                        contact: 'Contatos',
                        phase1: 'Fase 1'
                    },
                    "Footer": {
                        "About Us": {
                            title: 'Conheça a equipe',
                            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis elit eu justo tempus, vel placerat tortor molestie.'
                        },
                        "Contact Us": {
                            title: 'Contatos',
                            phone: 'Telefone',
                            number_phone: '+55 11 99999-9999',
                            email: 'Email',
                            email_address: 'lesf@unicamp.com.br',
                            address: 'Endereço',
                            address_address: 'Av. Albert Einstein, 1251, Cidade Universitária, Campinas - SP, 13083-852'
                        },
                        "Connect Us": {
                            title: 'Conecte-se conosco',
                            insta: 'Instagram',
                            linkedin: 'Linkedin',
                            github: 'Github',
                            twitter: 'Twitter',
                        }
                    },
                    "Home": {
                        "Tab": {
                            title: 'Configuração de banco de dados'
                        },
                        "Page": {
                            "Title": {
                                text: 'First page'
                            }
                        },
                        "Grids": {
                            "Grid 0": {
                                title : 'Consulta de Sistemas Fotovoltaicos' ,
                                subtitle : 'Consulte os sistemas fotovoltaicos cadastrados no banco de dados. Atualmente há apenas um database cadastrado, o Banco de Dados LABREN para municipios brasileiras. ' ,
                                button: 'Consultar'
                            },
                            "Grid 1": {
                                title : 'Simulações Avançadas',
                                subtitle : '[Em desenvolvimento - Incompleto]Simule o desempenho de um sistema fotovoltaico' ,
                                button: 'Simular'
                            },
                        }
                    },
                    "About": {
                        "Tab": {
                            title: 'Sobre nós'
                        },
                        "Page": {
                            "Title": {
                                text: 'Sobre nós',
                                description: 'Veja mais sobre nós'
                            }
                        }
                    },
                    "Phase1": {
                        "Button": {
                            title: 'Encontre os dados'
                        },
                        "Page": {
                            "Title": {
                                text: 'Fase 1',
                                subtitle: 'Esta é a primeira fase do projeto',
                                description: '...'
                            },
                            "Table GHI": {
                                text: 'GHI',
                                subtitles: 'Irradiância Global Horizontal ',
                                description: '...',
                                "Table IDs": {
                                    p0: 'GHI Ponto 1',
                                    p1: 'GHI Ponto 2',
                                    p2: 'GHI Ponto 3',
                                    p3: 'PAR Ponto 1',
                                }
                            },
                            "Options Table" : {
                                text : 'Selecione o ponto de localização mais próximo. As opções são exibidas em ordem de proximidade com o local selecionado.',
                                all : 'Todas Cidades',
                            },
                            "Graph GHI": {
                                text: 'GHI - Graph',
                                subtitles: 'Irradiância Global Horizontal',
                                description: '...'
                            },
                            "Table POA": {
                                text: 'POA',
                                subtitles: 'Irradiância para situações de Plano Inclinado para os 3 locais mais próximos do local selecionado', 
                                description: '...',
                                "Table IDs": {
                                    "Tilt0":{
                                        p0: 'ângulo 0 Point 1',
                                        p1: 'ângulo 0 Point 2',
                                        p2: 'ângulo 0 Point 3',
                                    },
                                    "TiltLatitude":{
                                        p0: 'ângulo Latitude Point 1',
                                        p1: 'ângulo Latitude Point 2',
                                        p2: 'ângulo Latitude Point 3',
                                    },
                                    "TiltMaxAnnual":{
                                        p0: 'ângulo MaxAnnual Point 1',
                                        p1: 'ângulo MaxAnnual Point 2',
                                        p2: 'ângulo MaxAnnual Point 3',
                                    },
                                    "TiltMaxMin":{
                                        p0: 'ângulo MaxMin Point 1',
                                        p1: 'ângulo MaxMin Point 2',
                                        p2: 'ângulo MaxMin Point 3',
                                    }
                                }
                            },
                            "Graph POA": {
                                text: 'POA - completar',
                                subtitles: 'Irradiância para situações de Plano Inclinado',
                                description: '...'
                            },
                        },
                        "Tables" : {
                            id  : "ID", 
                            id_db  : "ID DB",
                            cityid : "ID Cidade",
                            cityname : "Cidade",
                            tilt : "Inclinação",
                            delta : "Delta",
                            average : "Média", 
                            class : "Classe",
                            state :"Estado",
                            annual : "Anual",
                            lat : "Latitude",
                            lon : "Longitude",
                            jan : "Janeiro",
                            fev : "Fevereiro",
                            mar : "Março",
                            abr : "Abril",
                            mai : "Maio",
                            jun : "Junho", 
                            jul : "Julho",
                            ago : "Agosto",
                            set : "Setembro",
                            out : "Outubro",
                            nov : "Novembro",
                            dec : "Dezembro",
                        }
                    },
                    // "Phase2": {

                    // }
                },
            }
        },
    }
    );

export default i18next;
