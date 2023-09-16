import * as LAZR from '../../lazR/lazR.js';

const getDinosaurPeriodsString = (dinosaurPeriods) => {
    let string = '';
    dinosaurPeriods.forEach((period, index) => {
        string += `${index == 0 ? '' : ', '}${period.name}`
    })
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
        console.log(dinosaur.name);
    });

    return tile;
}