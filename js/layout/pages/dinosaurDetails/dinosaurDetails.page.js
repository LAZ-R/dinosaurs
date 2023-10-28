import { getDinosaurById } from '../../../data/dinosaurs.data.js';
import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    const collapse = (sectionId) => {
        const element = document.getElementById(sectionId);
        if ( element.style.minHeight !== '40px' ) {
            element.style.minHeight = '40px';
            element.style.maxHeight = '40px';
        } else {
            switch (sectionId) {
                case 'section1':
                    element.style.minHeight = '168px';
                    element.style.maxHeight = '168px';
                    break;
                case 'section2':
                    element.style.minHeight = '190px';
                    element.style.maxHeight = '190px';
                    break;
                case 'section3':
                    element.style.minHeight = '132px';
                    element.style.maxHeight = '132px';
                    break;
                case 'section4':
                    element.style.minHeight = '185px';
                    element.style.maxHeight = '185px';
                    break;
                default:
                    break;
            }
        }
    }
    window.collapse = collapse;

    const formaterNombreAvecVirgule = (nombre) => {
        return nombre.toString().replace('.', ',');
    }

    const getFixedSizeString = (size) => {
        const fixed_size = (size / 100).toFixed(2);
        return `${formaterNombreAvecVirgule(fixed_size)} m`;
    }
    const getFixedMassString = (mass) => {
        let fixed_mass = 0;
        let string = '';
        if (mass >= 1000) {
            fixed_mass = (mass / 1000).toFixed(2);
            string = `${formaterNombreAvecVirgule(fixed_mass)} ${fixed_mass < 2 ? 'tonne' : 'tonnes'}`
        } else {
            fixed_mass = mass.toFixed(2);
            string = `${formaterNombreAvecVirgule(fixed_mass)} kg`
        }
        return string;
    }

    const getPeriodString = (period) => {
        let string = '';
        // TRIAS
        if (period.id <= 1)                    { string = 'Trias inférieur'; }
        if (period.id > 1 && period.id <= 3)   { string = 'Trias moyen'; }
        if (period.id > 3 && period.id <= 6)   { string = 'Trias supérieur'; }
        // JURASSIQUE
        if (period.id > 6 && period.id <= 10)  { string = 'Jurassique inférieur'; }
        if (period.id > 10 && period.id <= 14) { string = 'Jurassique moyen'; }
        if (period.id > 14 && period.id <= 17) { string = 'Jurassique supérieur'; }
        // CRÉTACÉ
        if (period.id > 17 && period.id <= 23) { string = 'Crétacé inférieur'; }
        if (period.id > 23)                    { string = 'Crétacé supérieur'; }

        return string
    }

    const getPeriodsString = (periods) => {
        let string = '';
        if (periods.length == 1) {
            string = getPeriodString(periods[0]);
        } else {
            const firstPeriod = periods[0];
            const firstPeriodString = getPeriodString(firstPeriod);
            const lastPeriod = periods[periods.length - 1];
            const lastPeriodString = getPeriodString(lastPeriod);
            if (firstPeriodString == lastPeriodString) {
                string = firstPeriodString;
            } else {
                string = `du ${firstPeriodString} au ${lastPeriodString}`
            }
        }
        return string;
    }

    const getPeriodTile = (period) => {
        return `
            <div class="period-tile">
                <span>${period.name}</span>
                <span class="period-details">de ${period.start_date}<br>à ${period.end_date}</span>
            </div>
        `
    }

    const getPeriodTiles = (periods) => {
        let string = '';
        if (periods.length >= 2) {
            const firstPeriod = periods[0];
            const lastPeriod = periods[periods.length - 1];
            string += getPeriodTile(firstPeriod);
            string += `<div style="display:flex;align-items:center;height:100%"><span>⇨</span></div>`;
            string += getPeriodTile(lastPeriod);
        } else {
            periods.forEach(period => {
                string += getPeriodTile(period);
            });
        }
        
        return string;
    }

    /* --------------------------------------------------------------------- */
    const dinosaurId = new URLSearchParams(window.location.search).get('id');
    const dinosaur = getDinosaurById(dinosaurId);
    const pageTitle = dinosaur.name;
    LAZR.DOM.setHTMLTitle(pageTitle);

    const headerIndexLink = document.getElementById('headerIndexLink');
    headerIndexLink.innerHTML = '';
    headerIndexLink.innerHTML = `<span class="dinosaur-page--header-name">${dinosaur.name}</span>`;

    const page = LAZR.DOM.createElement(
        'div', 
        'dnosaurPage', 
        'page', 
        `
            <img class="dinosaur-page--image" src="${dinosaur.images[0]}" alt="${dinosaur.name}"/>

            <div id="section1" class="details-section period-section">
                <span class="section-title period-title" onclick="collapse('section1')">Période</span>
                <div class="details-sub-section periods-sub-section">
                    <span>${getPeriodsString(dinosaur.periods)}</span>
                    <div class="period-tiles-area">
                        ${getPeriodTiles(dinosaur.periods)}</div>
                    </div>
                </div>
            <div id="section2" class="details-section classification-section">
                <span class="section-title classification-title" onclick="collapse('section2')">Classification</span>
                <div class="details-sub-section">
                    <span class="section-sub-title">Ordre</span>
                    <span>${dinosaur.order}</span>
                </div>
                <div class="details-sub-section">
                    <span class="section-sub-title">Sous-Ordre</span>
                    <span>${dinosaur.sub_order}</span>
                </div>
                <div class="details-sub-section">
                    <span class="section-sub-title">Infra-Ordre</span>
                    <span>${dinosaur.infra_order}</span>
                </div>
                <div class="details-sub-section">
                    <span class="section-sub-title">Famille</span>
                    <span>${dinosaur.family}</span>
                </div>
                <div class="details-sub-section">
                    <span class="section-sub-title">Genre</span>
                    <span>${dinosaur.genus}</span>
                </div>
            </div>
            <div id="section3" class="details-section aspect-section">
                <span class="section-title aspect-title" onclick="collapse('section3')">Aspect</span>
                <div class="details-sub-section">
                    <span class="section-sub-title">Longueur moyenne</span>
                    <span>${getFixedSizeString(dinosaur.average_length)}</span>
                </div>
                <div class="details-sub-section">
                    <span class="section-sub-title">Hauteur moyenne</span>
                    <span>${getFixedSizeString(dinosaur.average_height)}</span>
                </div>
                <div class="details-sub-section">
                    <span class="section-sub-title">Poids moyen</span>
                    <span>${getFixedMassString(dinosaur.average_mass)}</span>
                </div>
            </div>
            <div id="section4" class="details-section description-section">
                <span class="section-title description-title" onclick="collapse('section4')">Description</span>
                <div class="details-sub-section">
                    <span class="section-sub-title">Régime alimentaire</span>
                    <span>${dinosaur.food}</span>
                </div>
                <div class="details-sub-section">
                    <span>${dinosaur.description}</span>
                </div>
            </div>
        `
    );
    //page.style.padding = '0px var(--horizontal-padding)';

    /* --------------------------------------------------------------------- */
    
    return page;
}


