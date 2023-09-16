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

export const DINOSAURS = [
    {
        id: 0,
        name: 'Tyrannosaurus rex', // Nom scientifique de l'espèce
        order: 'Saurischia',       // Ordre
        family: 'Tyrannosauridae', // Famille
        genus: 'Tyrannosaurus',    // Genre
        average_mass: 7500,        // Masse moyenne en kilogrammes
        average_length: 1200,      // Longueur moyenne en centimètres
        average_height: 450,       // Hauteur moyenne en centimètres
        periods: [MAASTRICHTIEN],  // Tableau des périodes auxquelles cette espèce a vécu (dans l'ordre chronologique)
        description:               // Description rapide de l'espèce
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
        family: 'Ceratopsidae',
        genus: 'Triceratops',
        average_mass: 7500,
        average_length: 850,
        average_height: 400,
        periods: [MAASTRICHTIEN],
        description:
            ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Triceratops_horridus',
        images: [
            'https://i.natgeofe.com/n/b96b572c-98e2-4ec2-a714-08a6b95cf646/triceratopshorridus_hexdcb.jpg',
            ''
        ],
    },
    {
        id: 2,
        name: 'Stegosaurus stenops',
        order: 'Ornithischia',
        family: 'Stegosauridae',
        genus: 'Stegosaurus',
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
        id: 3,
        name: 'Pachycephalosaurus wyomingensis',
        order: 'Ornithischia',
        family: 'Pachycephalosauridae',
        genus: 'Pachycephalosaurus',
        average_mass: 400,
        average_length: 500,
        average_height: 150,
        periods: [MAASTRICHTIEN],
        description:
            ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Pachycephalosaurus',
        images: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c6030c83-d20a-444a-bc0b-f41e06f5def1/d473zcr-19d99c1c-6f58-42f9-898f-75383e3aa8e1.jpg/v1/fit/w_800,h_577,q_70,strp/pachycephalosaurus_by_swordlord3d_d473zcr-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc3IiwicGF0aCI6IlwvZlwvYzYwMzBjODMtZDIwYS00NDRhLWJjMGItZjQxZTA2ZjVkZWYxXC9kNDczemNyLTE5ZDk5YzFjLTZmNTgtNDJmOS04OThmLTc1MzgzZTNhYThlMS5qcGciLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.FZZ7Oh98ZlFBMERjyPqEQFrqB0Ln8XRq7ogf8mzl8Uc',
            ''
        ],
    },
    {
        id: 4,
        name: 'Latenivenatrix mcmasterae',
        order: 'Saurischia',
        family: 'Troodontidae',
        genus: 'Latenivenatrix',
        average_mass: 115,
        average_length: 325,
        average_height: 190,
        periods: [CAMPANIEN],
        description:
            ``,
        wiki_link: 'https://fr.wikipedia.org/wiki/Latenivenatrix',
        images: [
            'https://static.wikia.nocookie.net/path-of-titans/images/0/07/LatenDuoLog.png',
            'https://upload.wikimedia.org/wikipedia/commons/c/c0/Latenivenatrix_%28white_background%29.png'
        ],
    },
    {
        id: 5,
        name: 'Diplodocus carnegii',
        order: 'Saurischia',
        family: 'Diplodocidae',
        genus: 'Diplodocus',
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
]

export const getDinosaurById = (id) => {
    DINOSAURS.forEach(dinosaur => {
        if (dinosaur.id == id) {
            return dinosaur;
        }
    });
}