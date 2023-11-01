export const DEFAULT_SETTINGS = [
    {
        id: 1,
        name: 'Écran',
        settings: [
            {
                id: 'keepScreenAwake',
                name: 'Garder l\'écran allumé',
                isActive: true
            },
        ]
    },
    {
        id: 2,
        name: 'Advanced',
        settings: [
            {
                id: 'jsonWizard',
                name: 'Enable JSON Wizard',
                isActive: false
            },
        ]
    },
    {
        id: 3,
        name: 'Tri par défaut',
        settings: [
            {
                id: 'latestAddedFirst',
                name: 'Du dernier ajout au premier ajout',
                isActive: false
            },
            {
                id: 'firstlyAddedFirst',
                name: 'Du premier ajout au dernier ajout',
                isActive: true
            },
        ]
    },
];