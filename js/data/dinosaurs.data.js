import { 
    // Trias ------------------------------------------------------------------
    // Trias Inférieur ------------------------------------
    INDUSIEN, OLENEKIEN,
    // Trias Moyen ----------------------------------------
    ANISIEN, LADINIEN,
    // Trias Supérieur ------------------------------------
    CARNIEN, NORIEN, RHAETIEN,
    // Jurassique -------------------------------------------------------------
    // Jurassique Inférieur--------------------------------
    HETTANGIEN, SINEMURIEN, PLIENSBACHIEN, TOARCIEN,
    // Jurassique Moyen -----------------------------------
    AALENIEN, BAJOCIEN, BATHONIEN, CALLOVIEN,
    // Jurassique Supérieur -------------------------------
    OXFORDIEN, KIMMERIDGIEN, TITHONIEN,
    // Crétacé ----------------------------------------------------------------
    // Crétacé Inférieur ----------------------------------
    BERRIASIEN, VALANGINIEN, HAUTERIVIEN, BARREMIEN, APTIEN, ALBIEN,
    // Crétacé Supérieur ----------------------------------
    CENOMANIEN, TURONIEN, CONIACIEN, SANTONIEN, CAMPANIEN, MAASTRICHTIEN,
} from "./periods.data.js";

const CARNIVOROUS = 'Carnivore';
const HERBIVOROUS = 'Herbivore';
const OMNIVOROUS = 'Omnivore';

export const CLASSIFICATION = [
    {
        name: 'Ornithischia',
        sub_orders: [
            {
                name: 'Marginocephalia',
                families: [
                    {
                        name: 'Ceratopsidae',
                        genus: [
                            {
                                name: 'Pachyrhinosaurus'
                            },
                            {
                                name: 'Styracosaurus'
                            },
                            {
                                name: 'Triceratops'
                            },
                        ]
                    },
                    {
                        name: 'Pachycephalosauridae',
                        genus: [
                            {
                                name: 'Pachycephalosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Psittacosauridae',
                        genus: [
                            {
                                name: 'Psittacosaurus'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Ornithopoda',
                families: [
                    {
                        name: 'Hadrosauridae',
                        genus: [
                            {
                                name: 'Corythosaurus'
                            },
                            {
                                name: 'Lambeosaurus'
                            },
                            {
                                name: 'Parasaurolophus'
                            },
                        ]
                    },
                    {
                        name: 'Heterodontosauridae',
                        genus: [
                            {
                                name: 'Heterodontosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Iguanodontidae',
                        genus: [
                            {
                                name: 'Iguanodon'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Thyreophora',
                families: [
                    {
                        name: 'Ankylosauridae',
                        genus: [
                            {
                                name: 'Ankylosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Nodosauridae',
                        genus: [
                            {
                                name: 'Hylaeosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Stegosauridae',
                        genus: [
                            {
                                name: 'Stegosaurus'
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        name: 'Saurischia',
        sub_orders: [
            {
                name: 'Sauropodomorpha',
                families: [
                    {
                        name: 'Brachiosauridae',
                        genus: [
                            {
                                name: 'Brachiosaurus',
                            },
                            {
                                name: 'Sauroposeidon',
                            },
                        ]
                    },
                    {
                        name: 'Dicraeosauridae',
                        genus: [
                            {
                                name: 'Amargasaurus'
                            },
                        ]
                    },
                    {
                        name: 'Diplodocidae',
                        genus: [
                            {
                                name: 'Diplodocus'
                            },
                        ]
                    },
                    {
                        name: 'Plateosauridae',
                        genus: [
                            {
                                name: 'Plateosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Lithostrotia',
                        genus: [
                            {
                                name: 'Argentinosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Mamenchisauridae',
                        genus: [
                            {
                                name: 'Mamenchisaurus'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Theropoda',
                families: [
                    {
                        name: 'Abelisauridae',
                        genus: [
                            {
                                name: 'Carnotaurus'
                            },
                        ]
                    },
                    {
                        name: 'Allosauridae',
                        genus: [
                            {
                                name: 'Allosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Archaeopterygidae',
                        genus: [
                            {
                                name: 'Archaeopteryx'
                            },
                        ]
                    },
                    {
                        name: 'Carcharodontosauridae',
                        genus: [
                            {
                                name: 'Acrocanthosaurus'
                            },
                            {
                                name: 'Carcharodontosaurus'
                            },
                            {
                                name: 'Giganotosaurus'
                            },
                            {
                                name: 'Mapusaurus'
                            },
                        ]
                    },
                    {
                        name: 'Ceratosauridae',
                        genus: [
                            {
                                name: 'Ceratosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Coelophysidae',
                        genus: [
                            {
                                name: 'Coelophysis'
                            },
                        ]
                    },
                    {
                        name: 'Compsognathidae',
                        genus: [
                            {
                                name: 'Compsognathus'
                            },
                        ]
                    },
                    {
                        name: 'Deinocheiridae',
                        genus: [
                            {
                                name: 'Deinocheirus'
                            },
                        ]
                    },
                    {
                        name: 'Dilophosauridae',
                        genus: [
                            {
                                name: 'Dilophosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Dromaeosauridae',
                        genus: [
                            {
                                name: 'Deinonychus'
                            },
                            {
                                name: 'Utahraptor'
                            },
                            {
                                name: 'Velociraptor'
                            },
                        ]
                    },
                    {
                        name: 'Herrerasauridae',
                        genus: [
                            {
                                name: 'Herrerasaurus'
                            },
                        ]
                    },
                    {
                        name: 'Oviraptoridae',
                        genus: [
                            {
                                name: 'Citipati'
                            },
                        ]
                    },
                    {
                        name: 'Spinosauridae',
                        genus: [
                            {
                                name: 'Baryonyx'
                            },
                            {
                                name: 'Spiniosaurus'
                            },
                        ]
                    },
                    {
                        name: 'Troodontidae',
                        genus: [
                            {
                                name: 'Latenivenatrix'
                            },
                        ]
                    },
                    {
                        name: 'Tyrannosauridae',
                        genus: [
                            {
                                name: 'Daspletosaurus'
                            },
                            {
                                name: 'Tyrannosaurus'
                            },
                        ]
                    },
                ]
            },
        ]
    },
    
];
  

export const DINOSAURS = [
    {
        id: 0,
        name: 'Tyrannosaurus rex',                    // Nom scientifique de l'espèce
        order: 'Saurischia',                          // Ordre
        sub_order: 'Theropoda',                       // Sous-ordre
        family: 'Tyrannosauridae',                    // Famille
        genus: 'Tyrannosaurus',                       // Genre
        food: CARNIVOROUS,                            // Régime alimentaire
        average_mass: 8000,                           // Masse moyenne en kilogrammes
        average_length: 1240,                         // Longueur moyenne en centimètres
        average_height: 400,                          // Hauteur moyenne en centimètres
        periods: [MAASTRICHTIEN],                     // Tableau des périodes auxquelles cette espèce a vécu (dans l'ordre chronologique)
        locations: [                                  // Localisation des restes découverts
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:                                  // Description rapide de l'espèce
            `<b><i>Tyrannosaurus rex</i></b> est l'une des plus célèbres espèces de dinosaures.<br>
            Ce fut l'un des derniers dinosaures non-aviens à avoir vécu jusqu'à l'extinction survenue à la limite Crétacé-Paléogène, il y a 66 millions d'années.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Tyrannosaurus',
        images: [
            'https://static.nationalgeographic.fr/files/styles/image_3200/public/RJ%20Palmer_0.webp',
            ''
        ],
    },
    {
        id: 1,
        name: 'Triceratops horridus',
        order: 'Ornithischia',
        sub_order: 'Marginocephalia',
        family: 'Ceratopsidae',
        genus: 'Triceratops',
        food: HERBIVOROUS,
        average_mass: 7500,
        average_length: 850,
        average_height: 400,
        periods: [MAASTRICHTIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Triceratops horridus</i></b>, cératopsien reconnaissable à ses trois cornes et sa collerette osseuse protectrice, 
            était une proie majeure de <a href="./?page=dinosaurDetails&id=0"><b><i>Tyrannosaurus rex</i></b></a>, ayant vécu à la même période et au même endroit.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Triceratops',
        images: [
            'https://i.redd.it/8o23pauomfob1.png',
            'https://i.natgeofe.com/n/b96b572c-98e2-4ec2-a714-08a6b95cf646/triceratopshorridus_hexdcb.jpg',
            ''
        ],
    },
    {
        id: 2,
        name: 'Velociraptor mongoliensis',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Dromaeosauridae',
        genus: 'Velociraptor',
        food: CARNIVOROUS,
        average_mass: 17,
        average_length: 175,
        average_height: 50,
        periods: [CAMPANIEN],
        locations: [
            'Asie <i class="sub-location">(Mongolie)</i>'
        ],
        description:
        `<b><i>Velociraptor mongoliensis</i></b> était un dromaeosauridé bipède, doté de griffes acérées.<br>
        Prédateur agile, il chassait potentiellement en meute, s'attaquant à de petites proies et des dinosaures herbivores plus grands.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Velociraptor',
        images: [
            'https://static.wixstatic.com/media/77e4e0_a58476c07df54cb1bd4e7d17a273d713~mv2.jpg/v1/fit/w_895,h_578,q_90/77e4e0_a58476c07df54cb1bd4e7d17a273d713~mv2.webp',
            'https://o.quizlet.com/rxkRaOesGgYXkmhWFQVl1A.png',
        ],
    },
    {
        id: 3,
        name: 'Diplodocus carnegii',
        order: 'Saurischia',
        sub_order: 'Sauropodomorpha',
        family: 'Diplodocidae',
        genus: 'Diplodocus',
        food: HERBIVOROUS,
        average_mass: 13000,
        average_length: 2500,
        average_height: 400,
        periods: [KIMMERIDGIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Diplodocus carnegii</i></b> possédait un long cou typique des sauropodes, et une queue en fouet caractéristique.<br>
            Paisible mangeur de végétaux vivant dans l'actuel ouest américain, les jeunes devaient faire face à des prédateurs comme <a href="./?page=dinosaurDetails&id=9"><b><i>Allosaurus fragilis</i></b></a>.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Diplodocus',
        images: [
            'https://cdna.artstation.com/p/assets/images/images/029/379/044/large/marcos-villarroel-diplodocus-carnegii-by-highdarktemplar-ddin7ng-fullview.jpg?1597343177',
            ''
        ],
    },
    {
        id: 4,
        name: 'Stegosaurus stenops',
        order: 'Ornithischia',
        sub_order: 'Thyreophora',
        family: 'Stegosauridae',
        genus: 'Stegosaurus',
        food: HERBIVOROUS,
        average_mass: 4000,
        average_length: 700,
        average_height: 350,
        periods: [KIMMERIDGIEN, TITHONIEN],
        locations: [
            'Afrique du Nord <i class="sub-location">(Maroc)</i>', 
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>', 
            'Europe <i class="sub-location">(Portugal)</i>'
        ],
        description:
            `<b><i>Stegosaurus stenops</i></b> vivait en Laurasie, corespondant aux États-Unis et à l'Afrique du Nord d'aujourd'hui, et se distinguait par ses plaques osseuses verticales sur le dos et sa queue à pointes.<br>
            Herbivore, il pouvait être la proie d'<a href="./?page=dinosaurDetails&id=9"><b><i>Allosaurus fragilis</i></b></a> ou de <a href="./?page=dinosaurDetails&id=40"><b><i>Ceratosaurus nasicornis</i></b></a>.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Stegosaurus',
        images: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/700d547e-32ff-47aa-b129-baab04f40e56/da47mfi-f7330353-f775-4b7b-97ce-66e77c55ac53.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzcwMGQ1NDdlLTMyZmYtNDdhYS1iMTI5LWJhYWIwNGY0MGU1NlwvZGE0N21maS1mNzMzMDM1My1mNzc1LTRiN2ItOTdjZS02NmU3N2M1NWFjNTMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.e8kUzmCMrZRyeo18mEEZExMc5IgZhvr3XRw2BtmOh3o',
            'https://www.bizleyart.com/gallery/image?view=image&format=raw&type=img&id=617',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3893338-5b4a-4520-8a01-52fca1771b85/d72acy2-19b6ce94-6690-42b8-b009-b5f36c8fbb87.jpg/v1/fill/w_1024,h_749,q_75,strp/stegosaurus_stenops_by_cheungchungtat_d72acy2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ5IiwicGF0aCI6IlwvZlwvZjM4OTMzMzgtNWI0YS00NTIwLThhMDEtNTJmY2ExNzcxYjg1XC9kNzJhY3kyLTE5YjZjZTk0LTY2OTAtNDJiOC1iMDA5LWI1ZjM2YzhmYmI4Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GellsxYfXWUFD6Luqi0L_8QgWRnZQ8nDEvrdjsZ5xF8'
        ],
    },
    {
        id: 5,
        name: 'Brachiosaurus altithorax',
        order: 'Ornithischia',
        sub_order: 'Sauropodomorpha',
        family: 'Brachiosauridae',
        genus: 'Brachiosaurus',
        food: HERBIVOROUS,
        average_mass: 42000,
        average_length: 2500,
        average_height: 1200,
        periods: [KIMMERIDGIEN, TITHONIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Brachiosaurus altithorax</i></b> se caractérisait par son long cou et ses pattes avant plus longues que ses pattes arrières. Herbivore géant, les jeunes pouvaient cepandant être attaqués par <a href="./?page=dinosaurDetails&id=9"><b><i>Allosaurus fragilis</i></b></a>.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Brachiosaurus',
        images: [
            'https://img.huffingtonpost.com/asset/5baebf9d24000031009683be.jpeg?ops=scalefit_960_noupscale&format=webp',
        ],
    },
    {
        id: 6,
        name: 'Spinosaurus aegyptiacus',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Spinosauridae',
        genus: 'Spinosaurus',
        food: CARNIVOROUS,
        average_mass: 7400,
        average_length: 1400,
        average_height: 450,
        periods: [ALBIEN, CENOMANIEN],
        locations: [
            'Afrique du Nord <i class="sub-location">(Égypte)</i>'
        ],
        description:
            `<b><i>Spinosaurus aegyptiacus</i></b>, carnivore semi-aquatique se nourrissant au moins partiellement de poissons, possédait une voile dorsale caractéristique.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Spinosaurus',
        images: [
            'https://images.squarespace-cdn.com/content/v1/5950b5941b10e30c09a82dd9/1591832259138-AWDZS5AVWF3S84HS6U8J/rjpalmer_spinosaurus_SITE_001.jpg?format=2500w',
            'https://static.dw.com/image/62079144_605.webp',
            'https://cdnb.artstation.com/p/assets/images/images/029/215/421/large/caio-negri-spinosaurus-aegyptiacus-final-2.jpg?1596810820',
        ],
    },
    {
        id: 7,
        name: 'Ankylosaurus magniventris',
        order: 'Ornithischia',
        sub_order: 'Thyreophora',
        family: 'Ankylosauridae',
        genus: 'Ankylosaurus',
        food: HERBIVOROUS,
        average_mass: 4000,
        average_length: 1000,
        average_height: 170,
        periods: [MAASTRICHTIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>', 
            'Europe <i class="sub-location">(Hongrie)</i>'
        ],
        description:
            `<b><i>Ankylosaurus magniventris</i></b> se défendait des prédateurs tels que <a href="./?page=dinosaurDetails&id=0"><b><i>Tyrannosaurus rex</i></b></a> grâce à son armure corporelle et sa queue munie d'une massue redoutable.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Ankylosaurus',
        images: [
            'https://as2.ftcdn.net/v2/jpg/02/56/88/51/1000_F_256885103_UuFC4aUnjnArbkEHoxu3HKPwQOYcaumu.jpg',
        ],
    },
    {
        id: 8,
        name: 'Iguanodon bernissartensis',
        order: 'Ornithischia',
        sub_order: 'Ornithopoda',
        family: 'Iguanodontidae',
        genus: 'Iguanodon',
        food: HERBIVOROUS,
        average_mass: 4500,
        average_length: 1000,
        average_height: 350,
        periods: [BARREMIEN, APTIEN],
        locations: [
            'Afrique', 
            'Amérique', 
            'Asie', 
            'Europe'
        ],
        description:
            `<b><i>Iguanodon bernissartensis</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Iguanodon',
        images: [
            'https://www.markgarlick.com/img/stills/Paleo/Iguanodon%20Bernissartensis.jpg',
        ],
    },
    {
        id: 9,
        name: 'Allosaurus fragilis',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Allosauridae',
        genus: 'Allosaurus',
        food: CARNIVOROUS,
        average_mass: 800,
        average_length: 850,
        average_height: 300,
        periods: [KIMMERIDGIEN, TITHONIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>', 
            'Europe <i class="sub-location">(Portugal)</i>'
        ],
        description:
            `<b><i>Allosaurus fragilis</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Allosaurus',
        images: [
            'https://blenderartists.org/uploads/default/original/4X/2/5/b/25b5ce4b33d8540f50f31dd3165a1fb3147b6922.jpeg',
            ''
        ],
    },
    {
        id: 10,
        name: 'Deinonychus antirrhopus',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Dromaeosauridae',
        genus: 'Deinonychus',
        food: CARNIVOROUS,
        average_mass: 75,
        average_length: 340,
        average_height: 110,
        periods: [BERRIASIEN, VALANGINIEN, HAUTERIVIEN, BARREMIEN, APTIEN, ALBIEN, CENOMANIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Deinonychus antirrhopus</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Deinonychus',
        images: [
            'https://cdna.artstation.com/p/assets/images/images/006/891/444/medium/raph-lomotan-antirrhopus.jpg?1502045515',
            'https://cdnb.artstation.com/p/assets/images/images/009/202/085/large/carlo-arellano-asset.jpg?1517669067',
            'https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2RlaW5vbnljaHVzLXVwZGF0ZS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH0sInRvRm9ybWF0IjoiYXZpZiJ9fQ==',
            'https://emilywilloughby.com/gallery-data/images/the-smell-of-rain.jpg',
        ],
    },
    {
        id: 11,
        name: 'Giganotosaurus carolinii',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Carcharodontosauridae',
        genus: 'Giganotosaurus',
        food: CARNIVOROUS,
        average_mass: 7000,
        average_length: 1250,
        average_height: 400,
        periods: [CENOMANIEN],
        locations: [
            'Amérique du Sud <i class="sub-location">(Argentine)</i>'
        ],
        description:
            `<b><i>Giganotosaurus carolinii</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Giganotosaurus',
        images: [
            './medias/images/dinos/giga.jpg',
            'https://as2.ftcdn.net/v2/jpg/04/90/93/87/1000_F_490938758_hdxvIrWHjsveIssTkAgW5pShiGxUo50b.jpg',
            'https://scontent-cdg4-1.xx.fbcdn.net/v/t1.6435-9/100847174_2886794674749115_6946729584592066366_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=7jgonkBu0NgAX8wQz8Z&_nc_ht=scontent-cdg4-1.xx&oh=00_AfBWhnk78PURX5uAOuRDGIKVDtBE4YnjyHOZZ6Y-52zJxw&oe=65649635',
        ],
    },
    {
        id: 12,
        name: 'Argentinosaurus huinculensis',
        order: 'Saurischia',
        sub_order: 'Sauropodomorpha',
        family: 'Lithostrotia',
        genus: 'Argentinosaurus',
        food: HERBIVOROUS,
        average_mass: 75000,
        average_length: 3400,
        average_height: 1150,
        periods: [CENOMANIEN, TURONIEN],
        locations: [
            'Amérique du Sud <i class="sub-location">(Argentine)</i>'
        ],
        description:
            `<b><i>Argentinosaurus huinculensis</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Argentinosaurus',
        images: [
            'https://www.thoughtco.com/thmb/ajEM1LXPOGv35ldFahLTG-OghH8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-1087324712-57e7d9a94d0c499387ebc24792fa4f9d.jpg',
        ],
    },
    {
        id: 13,
        name: 'Baryonyx walkeri',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Spinosauridae',
        genus: 'Baryonyx',
        food: CARNIVOROUS,
        average_mass: 2500,
        average_length: 900,
        average_height: 270,
        periods: [BARREMIEN],
        locations: [
            'Europe <i class="sub-location">(Angleterre, Espagne, Portugal)</i>'
        ],
        description:
            `<b><i>Baryonyx walkeri</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Baryonyx',
        images: [
            'https://cdna.artstation.com/p/assets/images/images/046/030/152/large/ashley-patch-baryonyx.jpg?1644149329',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d2ab31115637533.605232e8063ce.jpg',
            '',
        ],
    },
    {
        id: 14,
        name: 'Pachycephalosaurus wyomingensis',
        order: 'Ornithischia',
        sub_order: 'Marginocephalia',
        family: 'Pachycephalosauridae',
        genus: 'Pachycephalosaurus',
        food: OMNIVOROUS,
        average_mass: 400,
        average_length: 450,
        average_height: 150,
        periods: [MAASTRICHTIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Pachycephalosaurus wyomingensis</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Pachycephalosaurus',
        images: [
            'https://elyseesnumismatique.com/wp-content/uploads/2022/05/EUR01.Unc_.2022.25624-3-E-Austria-2022-Pachycephalosaurus-wyomingensis-blog-illustration-zoom.jpg',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6030c83-d20a-444a-bc0b-f41e06f5def1/d473zcr-19d99c1c-6f58-42f9-898f-75383e3aa8e1.jpg/v1/fit/w_800,h_577,q_70,strp/pachycephalosaurus_by_swordlord3d_d473zcr-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc3IiwicGF0aCI6IlwvZlwvYzYwMzBjODMtZDIwYS00NDRhLWJjMGItZjQxZTA2ZjVkZWYxXC9kNDczemNyLTE5ZDk5YzFjLTZmNTgtNDJmOS04OThmLTc1MzgzZTNhYThlMS5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FZZ7Oh98ZlFBMERjyPqEQFrqB0Ln8XRq7ogf8mzl8Uc',
            'https://morethanadodo.files.wordpress.com/2015/08/pachycephalosaurus-wyomingensis_small.jpg',
        ],
    },
    {
        id: 15,
        name: 'Carnotaurus sastrei',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Abelisauridae',
        genus: 'Carnotaurus',
        food: CARNIVOROUS,
        average_mass: 1300,
        average_length: 800,
        average_height: 270,
        periods: [MAASTRICHTIEN],
        locations: [
            'Amérique du Sud <i class="sub-location">(Argentine)</i>'
        ],
        description:
            `<b><i>Carnotaurus sastrei</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Carnotaurus',
        images: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cfd1ff88072965.5e1cd9b6aeb8d.jpg',
            '',
        ],
    },
    {
        id: 16,
        name: 'Styracosaurus albertensis',
        order: 'Ornithischia',
        sub_order: 'Marginocephalia',
        family: 'Ceratopsidae',
        genus: 'Styracosaurus',
        food: HERBIVOROUS,
        average_mass: 3000,
        average_length: 550,
        average_height: 230,
        periods: [CAMPANIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(Canada)</i>'
        ],
        description:
            `<b><i>Styracosaurus albertensis</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Styracosaurus',
        images: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0b93de108291319.5fc56c029211d.jpg',
        ],
    },
    {
        id: 17,
        name: 'Pachyrhinosaurus canadensis',
        order: 'Ornithischia',
        sub_order: 'Marginocephalia',
        family: 'Ceratopsidae',
        genus: 'Pachyrhinosaurus',
        food: HERBIVOROUS,
        average_mass: 4000,
        average_length: 800,
        average_height: 250,
        periods: [MAASTRICHTIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(Canada)</i>'
        ],
        description:
            `<b><i>Pachyrhinosaurus canadensis</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Pachyrhinosaurus',
        images: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/028c2f108291319.5fbac49597d44.jpg',
        ],
    },
    {
        id: 18,
        name: 'Latenivenatrix mcmasterae',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Troodontidae',
        genus: 'Latenivenatrix',
        food: CARNIVOROUS,
        average_mass: 60,
        average_length: 325,
        average_height: 135,
        periods: [CAMPANIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(Canada)</i>'
        ],
        description:
            `<b><i>Latenivenatrix mcmasterae</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Latenivenatrix',
        images: [
            'https://preview.redd.it/y6awloi5imr91.jpg?width=2262&format=pjpg&auto=webp&s=f31de6c9b746d448b8a394bfc58279078cb955eb',
            'https://upload.wikimedia.org/wikipedia/commons/5/5b/Latenivenatrix.png',
            'https://upload.wikimedia.org/wikipedia/commons/c/c0/Latenivenatrix_%28white_background%29.png',
        ],
    },
    {
        id: 19,
        name: 'Parasaurolophus walkeri',
        order: 'Ornithischia',
        sub_order: 'Ornithopoda',
        family: 'Hadrosauridae',
        genus: 'Parasaurolophus',
        food: HERBIVOROUS,
        average_mass: 2500,
        average_length: 950,
        average_height: 360,
        periods: [CAMPANIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(Canada)</i>'
        ],
        description:
            `<b><i>Parasaurolophus walkeri</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Parasaurolophus',
        images: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87c47315-8df7-4cb1-8502-d931a2f5f535/d8gfwqk-a8f2193f-7c7c-4907-8eec-c3f351024df1.jpg/v1/fill/w_1024,h_577,q_75,strp/parasaurolophus_walkeri_by_highdarktemplar_d8gfwqk-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc3IiwicGF0aCI6IlwvZlwvODdjNDczMTUtOGRmNy00Y2IxLTg1MDItZDkzMWEyZjVmNTM1XC9kOGdmd3FrLWE4ZjIxOTNmLTdjN2MtNDkwNy04ZWVjLWMzZjM1MTAyNGRmMS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.h6bXAQsreW2h8qR4PtZcU4tZFLtq6rCb7PLTzumPR64',
            'https://cdn.domestika.org/c_limit,dpr_1.0,f_auto,q_80,w_820/v1562600036/content-items/003/106/418/Parasaurolophus-Angel-Trancon-Studio-original.jpg?1562600036',
        ],
    },
    {
        id: 20,
        name: 'Citipati osmolskae',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Oviraptoridae',
        genus: 'Citipati',
        food: OMNIVOROUS,
        average_mass: 75,
        average_length: 250,
        average_height: 170,
        periods: [CAMPANIEN],
        locations: [
            'Asie <i class="sub-location">(Mongolie)</i>'
        ],
        description:
            `<b><i>Citipati osmolskae</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Citipati',
        images: [
            'https://i.kym-cdn.com/photos/images/original/002/278/723/869.jpeg',
        ],
    },
    {
        id: 21,
        name: 'Dilophosaurus wetherilli',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Dilophosauridae',
        genus: 'Dilophosaurus',
        food: CARNIVOROUS,
        average_mass: 400,
        average_length: 600,
        average_height: 190,
        periods: [SINEMURIEN, PLIENSBACHIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Dilophosaurus wetherilli</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Dilophosaurus',
        images: [
            'https://static.scientificamerican.com/sciam/cache/file/772FAB35-5C60-47BD-AF64576CF62E910E_source.jpg?w=2000&h=1123&761A6DFA-B87F-45D1-99983B70E46AC8DF',
        ],
    },
    {
        id: 22,
        name: 'Psittacosaurus mongoliensis',
        order: 'Ornithischia',
        sub_order: 'Marginocephalia',
        family: 'Psittacosauridae',
        genus: 'Psittacosaurus',
        food: HERBIVOROUS,
        average_mass: 25,
        average_length: 175,
        average_height: 50,
        periods: [BARREMIEN, APTIEN, ALBIEN],
        locations: [
            'Asie <i class="sub-location">(Mongolie)</i>'
        ],
        description:
            `<b><i>Psittacosaurus mongoliensis</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Psittacosaurus',
        images: [
            'https://mir-s3-cdn-cf.behance.net/project_modules/fs/1c97b7108291319.5fbac49596d78.jpg',
        ],
    },
    {
        id: 23,
        name: 'Gallimimus bullatus',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Ornithomimidae',
        genus: 'Gallimimus',
        food: OMNIVOROUS,
        average_mass: 445,
        average_length: 500,
        average_height: 250,
        periods: [MAASTRICHTIEN],
        locations: [
            'Asie <i class="sub-location">(Mongolie)</i>'
        ],
        description:
            `<b><i>Gallimimus bullatus</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Gallimimus',
        images: [
            'https://as2.ftcdn.net/v2/jpg/05/02/29/19/1000_F_502291964_auU6tdOoMfjJ9yqE2nDoJWESANzlP6RH.jpg',
            'https://everydayoriginal.com/wp-content/uploads/2022/02/Gallimimus_final-scaled.jpg',
        ],
    },
    {
        id: 24,
        name: 'Sauroposeidon proteles',
        order: 'Saurischia',
        sub_order: 'Sauropodomorpha',
        family: 'Brachiosauridae',
        genus: 'Sauroposeidon',
        food: HERBIVOROUS,
        average_mass: 50000,
        average_length: 3100,
        average_height: 1800,
        periods: [APTIEN, ALBIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Sauroposeidon proteles</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Sauroposéidon',
        images: [
            'https://images.dinosaurpictures.org/Sauroposeidon4_d2cf.jpg',
        ],
    },
    {
        id: 25,
        name: 'Daspletosaurus wilsoni',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Tyrannosauridae',
        genus: 'Daspletosaurus',
        food: CARNIVOROUS,
        average_mass: 2500,
        average_length: 850,
        average_height: 250,
        periods: [CAMPANIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Daspletosaurus wilsoni</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Daspletosaurus',
        images: [
            'https://cdna.artstation.com/p/assets/images/images/056/512/714/large/rudolf-hima-d-wilsoni-illus-dfowler-hires.jpg?1669422447',
            ''
        ],
    },
    {
        id: 26,
        name: 'Lambeosaurus lambei',
        order: 'Ornithischia',
        sub_order: 'Ornithopoda',
        family: 'Hadrosauridae',
        genus: 'Lambeosaurus',
        food: HERBIVOROUS,
        average_mass: 2500,
        average_length: 600,
        average_height: 220,
        periods: [CAMPANIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(Canada)</i>'
        ],
        description:
            `<b><i>Lambeosaurus lambei</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Lambeosaurus',
        images: [
            'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/lambeosaurus-daniel-eskridge.jpg',
        ],
    },
    /* {
        id: 27,
        name: 'Bruhathkayosaurus matleyi',
        order: 'Saurischia',
        sub_order: 'Sauropodomorpha',
        family: 'Lithostrotia',
        genus: 'Bruhathkayosaurus',
        food: HERBIVOROUS,
        average_mass: 110000,
        average_length: 3500,
        average_height: 1300,
        periods: [MAASTRICHTIEN],
        description:
            `<b><i>Bruhathkayosaurus matleyi</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Bruhathkayosaurus',
        images: [
            'https://images.fineartamerica.com/images-medium-large-5/futalognkosaurus-dukei-dinosaur-julius-t-csotonyiscience-photo-library.jpg',
        ],
    }, */
    {
        id: 27,
        name: 'Mamenchisaurus sinocanadorum',
        order: 'Saurischia',
        sub_order: 'Sauropodomorpha',
        family: 'Mamenchisauridae',
        genus: 'Mamenchisaurus',
        food: HERBIVOROUS,
        average_mass: 70000,
        average_length: 2600,
        average_height: 1400,
        periods: [OXFORDIEN],
        locations: [
            'Asie <i class="sub-location">(Chine)</i>'
        ],
        description:
            `<b><i>Mamenchisaurus sinocanadorum</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Mamenchisaurus',
        images: [
            'https://cdna.artstation.com/p/assets/images/images/060/773/568/large/julia-d-oliveira-mamenchisaurus.jpg?1679309545',
        ],
    },
    {
        id: 28,
        name: 'Archaeopteryx siemensii',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Archaeopterygidae',
        genus: 'Archaeopteryx',
        food: CARNIVOROUS,
        average_mass: .5,
        average_length: 40,
        average_height: 20,
        periods: [TITHONIEN],
        locations: [
            'Europe <i class="sub-location">(Allemagne)</i>'
        ],
        description:
            `<b><i>Archaeopteryx siemensii</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Archaeopteryx',
        images: [
            'https://cdn.unitycms.io/images/BfC1_XS0qmTABqW0YvVQjt.jpg?op=ocroped&val=1600,1600,1000,1000,0,0&sum=RpoxDhTQ5U8',
        ],
    },
    {
        id: 29,
        name: 'Deinocheirus mirificus',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Deinocheiridae',
        genus: 'Deinocheirus',
        food: OMNIVOROUS,
        average_mass: 6000,
        average_length: 1000,
        average_height: 450,
        periods: [MAASTRICHTIEN],
        locations: [
            'Asie <i class="sub-location">(Mongolie)</i>'
        ],
        description:
            `<b><i>Deinocheirus mirificus</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Deinocheirus',
        images: [
            'https://damirgmartin.com/images/fulls/26.jpg',
        ],
    },
    {
        id: 30,
        name: 'Heterodontosaurus tucki',
        order: 'Ornithischia',
        sub_order: 'Ornithopoda',
        family: 'Heterodontosauridae',
        genus: 'Heterodontosaurus',
        food: OMNIVOROUS,
        average_mass: 4,
        average_length: 130,
        average_height: 40,
        periods: [HETTANGIEN],
        locations: [
            'Afrique <i class="sub-location">(Afrique du Sud)</i>'
        ],
        description:
            `<b><i>Heterodontosaurus tucki</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Heterodontosaurus',
        images: [
            'https://cdnb.artstation.com/p/assets/images/images/021/988/217/large/damir-g-martin-finalisms-insta-artst-2scaled2.jpg?1573683481',
        ],
    },
    {
        id: 31,
        name: 'Compsognathus longipes',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Compsognathidae',
        genus: 'Compsognathus',
        food: CARNIVOROUS,
        average_mass: 1.5,
        average_length: 80,
        average_height: 25,
        periods: [TITHONIEN],
        locations: [
            'Europe <i class="sub-location">(Allemagne, France)</i>'
        ],
        description:
            `<b><i>Compsognathus longipes</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Compsognathus',
        images: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2dd6424a-a91b-4f14-9bf6-b2c7682917e0/dey0ksx-4173c8c0-e758-46ef-8f80-ab669bde2954.png/v1/fit/w_828,h_466,q_70,strp/compsognathus_by_bluefluffydinosaur_dey0ksx-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMmRkNjQyNGEtYTkxYi00ZjE0LTliZjYtYjJjNzY4MjkxN2UwXC9kZXkwa3N4LTQxNzNjOGMwLWU3NTgtNDZlZi04ZjgwLWFiNjY5YmRlMjk1NC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HtrgxUhP4gEH82vjtH8In9-FdFMRmnL7eqjMNrcPfg0',
        ],
    },
    {
        id: 32,
        name: 'Herrerasaurus ischigualastensis',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Herrerasauridae',
        genus: 'Herrerasaurus',
        food: CARNIVOROUS,
        average_mass: 270,
        average_length: 400,
        average_height: 160,
        periods: [CARNIEN],
        locations: [
            'Amérique du Sud <i class="sub-location">(Argentine)</i>'
        ],
        description:
            `<b><i>Herrerasaurus ischigualastensis</i></b>, représentant très primitif des Theropodes, précède de 75 MA l'apparition d'<a href="./?page=dinosaurDetails&id=9"><b><i>Allosaurus fragilis</i></b></a> et de 160 MA celle de <a href="./?page=dinosaurDetails&id=0"><b><i>Tyrannosaurus rex</i></b></a>, faisant de lui l'un des plus anciens dinosaure connus.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Herrerasaurus',
        images: [
            'https://cdna.artstation.com/p/assets/images/images/040/024/888/large/ashley-patch-herrerasaurus-ischigualastensis.jpg?1627628721',
            'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/fdb38613517523.56274d0ae488b.jpg',
        ],
    },
    {
        id: 33,
        name: 'Plateosaurus trossingensis',
        order: 'Saurischia',
        sub_order: 'Sauropodomorpha',
        family: 'Plateosauridae',
        genus: 'Plateosaurus',
        food: HERBIVOROUS,
        average_mass: 3000,
        average_length: 700,
        average_height: 220,
        periods: [NORIEN],
        locations: [
            'Europe <i class="sub-location">(Allemagne, France, Suisse)</i>'
        ],
        description:
            `<b><i>Plateosaurus trossingensis</i></b> est un représentant très primitif des Sauropodomorphes.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Plateosaurus',
        images: [
            'https://4.bp.blogspot.com/-pyMOS_I4AgQ/WBhOVzt6wEI/AAAAAAAACbk/Pm8ATrWWJtwDxeWF039mqmRo7pQYePZZwCK4B/s1600/Plateosaurus%2BWitton%2Blow%2Bres%2B2016.jpg',
        ],
    },
    {
        id: 34,
        name: 'Utahraptor ostrommaysi',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Dromaeosauridae',
        genus: 'Utahraptor',
        food: CARNIVOROUS,
        average_mass: 500,
        average_length: 625,
        average_height: 190,
        periods: [VALANGINIEN, HAUTERIVIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Utahraptor ostrommaysi</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Utahraptor',
        images: [
            'https://i.pinimg.com/originals/93/66/8f/93668f33a15a67c5fe8a50faab68a74c.jpg',
            'https://static.wixstatic.com/media/77e4e0_db45d3b07fc847f3ad1e265ec322392c~mv2.jpg/v1/fit/w_895,h_578,q_90/77e4e0_db45d3b07fc847f3ad1e265ec322392c~mv2.webp',
        ],
    },
    {
        id: 35,
        name: 'Acrocanthosaurus atokensis',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Carcharodontosauridae',
        genus: 'Acrocanthosaurus',
        food: CARNIVOROUS,
        average_mass: 6500,
        average_length: 1100,
        average_height: 320,
        periods: [APTIEN, ALBIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Acrocanthosaurus atokensis</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Acrocanthosaurus',
        images: [
            'https://i.pinimg.com/originals/bc/06/b8/bc06b8e5e305813c678566c959f57432.jpg',
        ],
    },
    {
        id: 36,
        name: 'Mapusaurus roseae',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Carcharodontosauridae',
        genus: 'Mapusaurus',
        food: CARNIVOROUS,
        average_mass: 5000,
        average_length: 1150,
        average_height: 330,
        periods: [TURONIEN],
        locations: [
            'Amérique du Sud <i class="sub-location">(Argentine)</i>'
        ],
        description:
            `<b><i>Mapusaurus roseae</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Mapusaurus',
        images: [
            'https://qph.cf2.quoracdn.net/main-qimg-0c6f09f87c5cdbd24201552c12a23c2a',
        ],
    },
    {
        id: 37,
        name: 'Carcharodontosaurus saharicus',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Carcharodontosauridae',
        genus: 'Carcharodontosaurus',
        food: CARNIVOROUS,
        average_mass: 6000,
        average_length: 1200,
        average_height: 340,
        periods: [ALBIEN, CENOMANIEN],
        locations: [
            'Afrique <i class="sub-location">(Algérie, Maroc)</i>'
        ],
        description:
            `<b><i>Carcharodontosaurus saharicus</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Carcharodontosaurus',
        images: [
            'https://cdnb.artstation.com/p/assets/covers/images/028/664/031/large/huang-hao-huang-hao-jurassic-world-carcharodontosaurus.jpg',
        ],
    },
    {
        id: 38,
        name: 'Coelophysis bauri',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Coelophysidae',
        genus: 'Coelophysis',
        food: CARNIVOROUS,
        average_mass: 17.5,
        average_length: 275,
        average_height: 100,
        periods: [CARNIEN, NORIEN, RHAETIEN],
        locations: [
            'Afrique <i class="sub-location">(Afrique du Sud, Zimbabwe)</i>', 
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Coelophysis bauri</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Coelophysis',
        images: [
            'https://cdnb.artstation.com/p/assets/images/images/004/058/391/large/roberto-akeiron-coelophysis-bauri-anteprima-1.jpg?1479909575',
            'https://cdna.artstation.com/p/assets/images/images/056/897/782/large/joanna-kobierska-ceolo-reducted.jpg?1670352308',
            'https://cdnb.artstation.com/p/assets/images/images/042/763/653/large/julia-d-oliveira-coelophysis.jpg?1635366112'
        ],
    },
    {
        id: 39,
        name: 'Hylaeosaurus armatus',
        order: 'Ornithischia',
        sub_order: 'Thyreophora',
        family: 'Nodosauridae',
        genus: 'Hylaeosaurus',
        food: HERBIVOROUS,
        average_mass: 1250,
        average_length: 550,
        average_height: 170,
        periods: [VALANGINIEN],
        locations: [
            'Europe <i class="sub-location">(Angleterre)</i>'
        ],
        description:
            `<b><i>Hylaeosaurus armatus</i></b> est le premier ankylosaurien qu'on ait découvert, dès 1833.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Hylaeosaurus',
        images: [
            'https://static.wixstatic.com/media/77e4e0_73778563e959425992831910f74cc44d~mv2.jpg/v1/fit/w_895,h_578,q_90/77e4e0_73778563e959425992831910f74cc44d~mv2.webp',
        ],
    },
    {
        id: 40,
        name: 'Ceratosaurus nasicornis',
        order: 'Saurischia',
        sub_order: 'Theropoda',
        family: 'Ceratosauridae',
        genus: 'Ceratosaurus',
        food: CARNIVOROUS,
        average_mass: 550,
        average_length: 550,
        average_height: 175,
        periods: [KIMMERIDGIEN, TITHONIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(États-Unis)</i>'
        ],
        description:
            `<b><i>Ceratosaurus nasicornis</i></b> vivait en Laurasie, et se distinguait par la corne arrondie sur son museau, appendice peu commun chez les Theropodes.<br>
            Son alimentation été probablement constituée en partie de jeunes <a href="./?page=dinosaurDetails&id=4"><b><i>Stegosaurus stenops</i></b></a>, ses reste ayant été retrouvé aux mêmes endroits et dans les mêmes strates géologiques.`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Ceratosaurus',
        images: [
            'https://cdnb.artstation.com/p/assets/images/images/034/029/411/large/ashley-patch-ceratosaurus-nasicornis.jpg?1611202289',
            ''
        ],
    },
    {
        id: 41,
        name: 'Corythosaurus casuarius',
        order: 'Ornithischia',
        sub_order: 'Ornithopoda',
        family: 'Hadrosauridae',
        genus: 'Corythosaurus',
        food: HERBIVOROUS,
        average_mass: 3200,
        average_length: 900,
        average_height: 320,
        periods: [CAMPANIEN],
        locations: [
            'Amérique du Nord <i class="sub-location">(Canada)</i>'
        ],
        description:
            `<b><i>Corythosaurus casuarius</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Corythosaurus',
        images: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/87c47315-8df7-4cb1-8502-d931a2f5f535/d2uvsvz-8ff7be16-ae86-4158-ba62-48e409ae58d3.jpg/v1/fill/w_900,h_450,q_75,strp/paleoscape_9___corythosaurus_c_by_highdarktemplar_d2uvsvz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg3YzQ3MzE1LThkZjctNGNiMS04NTAyLWQ5MzFhMmY1ZjUzNVwvZDJ1dnN2ei04ZmY3YmUxNi1hZTg2LTQxNTgtYmE2Mi00OGU0MDlhZTU4ZDMuanBnIiwiaGVpZ2h0IjoiPD00NTAiLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzg3YzQ3MzE1LThkZjctNGNiMS04NTAyLWQ5MzFhMmY1ZjUzNVwvaGlnaGRhcmt0ZW1wbGFyLTQucG5nIiwib3BhY2l0eSI6OTUsInByb3BvcnRpb25zIjowLjQ1LCJncmF2aXR5IjoiY2VudGVyIn19.AKsXzjaiyEHKDVKLClNoXsKCrQ-2BwezxhZhM-WfeJg',
        ],
    },
    {
        id: 42,
        name: 'Amargasaurus cazaui',
        order: 'Saurischia',
        sub_order: 'Sauropodomorpha',
        family: 'Dicraeosauridae',
        genus: 'Amargasaurus',
        food: HERBIVOROUS,
        average_mass: 3000,
        average_length: 1050,
        average_height: 400,
        periods: [BARREMIEN, APTIEN],
        locations: [
            'Amérique du Sud <i class="sub-location">(Argentine)</i>'
        ],
        description:
            `<b><i>Amargasaurus cazaui</i></b> ...`,
        wiki_link: 'https://fr.wikipedia.org/wiki/Amargasaurus',
        images: [
            'https://i.redd.it/38bw0gm7stw41.jpg',
        ],
    },
]

export const getDinosaurById = (id) => {
    let defaultDino = {
        id: -1,
        name: 'Lorem ipsum',
        order: 'Lorem ipsum',
        family: 'Lorem ipsum',
        genus: 'Lorem ipsum',
        food: OMNIVOROUS,
        average_mass: 0,
        average_length: 0,
        average_height: 0,
        periods: [MAASTRICHTIEN],
        description:
            ``,
        wiki_link: 'https://fr.wikipedia.org',
        images: [
            '',
            ''
        ],
    };

    DINOSAURS.forEach(dinosaur => {
        if (dinosaur.id.toString() == id.toString()) {
            defaultDino = dinosaur;
        }
    });

    return defaultDino
}