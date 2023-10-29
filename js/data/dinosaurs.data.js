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
        name: 'Saurischia',
        sub_orders: [
            {
                name: 'Theropoda',
                families: [
                    {
                        name: 'Allosauridae',
                        genus: [
                            {
                                name: 'Allosaurus'
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
                        name: 'Carcharodontosauridae',
                        genus: [
                            {
                                name: 'Giganotosaurus'
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
                        name: 'Abelisauridae',
                        genus: [
                            {
                                name: 'Carnotaurus'
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
                                name: 'Velociraptor'
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
                                name: 'Tyrannosaurus'
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Sauropodomorpha',
                families: [
                    {
                        name: 'Brachiosauridae',
                        genus: [
                            {
                                name: 'Brachiosaurus'
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
                        name: 'Lithostrotia',
                        genus: [
                            {
                                name: 'Argentinosaurus'
                            },
                        ]
                    },
                ]
            },
        ]
    },
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
                ]
            },
            {
                name: 'Ornithopoda',
                families: [
                    {
                        name: 'Iguanodontidae',
                        genus: [
                            {
                                name: 'Iguanodon'
                            },
                        ]
                    },
                    {
                        name: 'Hadrosauridae',
                        genus: [
                            {
                                name: 'Parasaurolophus'
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
    }
];
  

export const DINOSAURS = [
    {
        id: 0,
        name: 'Tyrannosaurus rex',    // Nom scientifique de l'espèce
        order: 'Saurischia',          // Ordre
        sub_order: 'Theropoda',       // Sous-ordre
        family: 'Tyrannosauridae',    // Famille
        genus: 'Tyrannosaurus',       // Genre
        food: CARNIVOROUS,            // Régime alimentaire
        average_mass: 7500,           // Masse moyenne en kilogrammes
        average_length: 1200,         // Longueur moyenne en centimètres
        average_height: 450,          // Hauteur moyenne en centimètres
        periods: [MAASTRICHTIEN],     // Tableau des périodes auxquelles cette espèce a vécu (dans l'ordre chronologique)
        description:                  // Description rapide de l'espèce
            `Tyrannosaurus rex est l'une des plus célèbres espèces de dinosaures. Ce fut l'un des derniers dinosaures non-aviens à avoir vécu jusqu'à l'extinction survenue à la limite Crétacé-Paléogène, il y a 66 millions d'années.`,
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
        description:
            ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Triceratops_horridus',
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
        description:
        ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Velociraptor',
        images: [
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
        description:
            ``,
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
        description:
        ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Stegosaurus',
        images: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3893338-5b4a-4520-8a01-52fca1771b85/d72acy2-19b6ce94-6690-42b8-b009-b5f36c8fbb87.jpg/v1/fill/w_1024,h_749,q_75,strp/stegosaurus_stenops_by_cheungchungtat_d72acy2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzQ5IiwicGF0aCI6IlwvZlwvZjM4OTMzMzgtNWI0YS00NTIwLThhMDEtNTJmY2ExNzcxYjg1XC9kNzJhY3kyLTE5YjZjZTk0LTY2OTAtNDJiOC1iMDA5LWI1ZjM2YzhmYmI4Ny5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GellsxYfXWUFD6Luqi0L_8QgWRnZQ8nDEvrdjsZ5xF8',
            ''
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
        average_mass: 40000,
        average_length: 2500,
        average_height: 1200,
        periods: [KIMMERIDGIEN, TITHONIEN],
        description:
            ``,
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
        average_length: 1500,
        average_height: 450,
        periods: [ALBIEN, CENOMANIEN],
        description:
        ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Spinosaurus',
        images: [
            'https://cdnb.artstation.com/p/assets/images/images/029/215/421/large/caio-negri-spinosaurus-aegyptiacus-final-2.jpg?1596810820',
            'https://static.dw.com/image/62079144_605.webp',
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
        description:
        ``,
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
        description:
            ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Iguanodon',
        images: [
            'https://media01.stockfood.com/largepreviews/NDE1MDM3MTc2/13388296-Artwork-of-Iguanodon-bernissartensis.jpg',
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
        periods: [KIMMERIDGIEN, TITHONIEN, BERRIASIEN, VALANGINIEN, HAUTERIVIEN, BARREMIEN, APTIEN, ALBIEN, CENOMANIEN, TURONIEN],
        description:
        ``,
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
        description:
        ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Deinonychu',
        images: [
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
        average_mass: 6750,
        average_length: 1250,
        average_height: 400,
        periods: [CENOMANIEN],
        description:
        ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Giganotosaurus',
        images: [
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
        average_mass: 70000,
        average_length: 3500,
        average_height: 800,
        periods: [CENOMANIEN, TURONIEN],
        description:
        ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Argentinosaurus',
        images: [
            'https://dailygeekshow.com/wp-content/uploads/2023/03/une-animaux-geants-696x392.jpg',
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
        description:
        ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Baryonyx',
        images: [
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
        description:
            ``,
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
        average_height: 350,
        periods: [MAASTRICHTIEN],
        description:
        ``,
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
        description:
        ``,
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
        description:
        ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Styracosaurus',
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
        description:
            ``,
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
        description:
            ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Parasaurolophus',
        images: [
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
        food: HERBIVOROUS,
        average_mass: 75,
        average_length: 250,
        average_height: 170,
        periods: [CAMPANIEN],
        description:
            ``,
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
        description:
            ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Dilophosaurus',
        images: [
            'https://static.scientificamerican.com/sciam/cache/file/772FAB35-5C60-47BD-AF64576CF62E910E_source.jpg?w=2000&h=1123&761A6DFA-B87F-45D1-99983B70E46AC8DF',
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