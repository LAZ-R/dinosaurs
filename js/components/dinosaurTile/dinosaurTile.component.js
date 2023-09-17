import * as LAZR from '../../lazR/lazR.js';

const getDinosaurPeriodsString = (periods) => {
    let string = '';
    if (periods.length == 1) {
        string = periods[0].name;
    } else {
        const firstPeriod = periods[0].name;
        const lastPeriod = periods[periods.length - 1].name;
        if (firstPeriod == lastPeriod) {
            string = firstPeriod;
        } else {
            string = `du ${firstPeriod} au ${lastPeriod}`
        }
    }
    return string
}

export const renderDinosaurTile = (dinosaur) => {
    const tile = LAZR.DOM.createElement(
        'div',
        '',
        'dinosaur-tile',
        `
            <img class="dinosaur-tile--image" src="${dinosaur.images[0]}" alt="${dinosaur.name}"/>
            <div class="dinosaur-tile--infos">
                <span class="dinosaur-tile--dinosaur-name">${dinosaur.name}</span>
                <span class="dinosaur-tile--periods">${getDinosaurPeriodsString(dinosaur.periods)}</span>
            </div>
        `
    )
    tile.addEventListener('click', () => {
        window.location = `./?page=dinosaurDetails&id=${dinosaur.id}`;
    });

    return tile;
}