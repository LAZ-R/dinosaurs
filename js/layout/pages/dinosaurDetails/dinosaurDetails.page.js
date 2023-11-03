import { getDinosaurById } from '../../../data/dinosaurs.data.js';
import * as LAZR from '../../../lazR/lazR.js';

const PERIODS_TIMES = [
    { id:  0, start_date: -251.9, end_date: -251.2, },
    { id:  1, start_date: -251.2, end_date: -247.2, },
    { id:  2, start_date: -247.2, end_date: -242.0, },
    { id:  3, start_date: -242.0, end_date: -235.0, },
    { id:  4, start_date: -235.0, end_date: -228.0, },
    { id:  5, start_date: -228.0, end_date: -208.5, },
    { id:  6, start_date: -208.5, end_date: -201.3, },
    
    { id:  7, start_date: -201.3, end_date: -199.3, },
    { id:  8, start_date: -199.3, end_date: -190.8, },
    { id:  9, start_date: -190.8, end_date: -182.7, },
    { id: 10, start_date: -182.7, end_date: -174.1, },
    { id: 11, start_date: -174.1, end_date: -170.3, },
    { id: 12, start_date: -170.3, end_date: -168.3, },
    { id: 13, start_date: -168.3, end_date: -166.1, },
    { id: 14, start_date: -166.1, end_date: -163.5, },
    { id: 15, start_date: -163.5, end_date: -157.3, },
    { id: 16, start_date: -157.3, end_date: -152.1, },
    { id: 17, start_date: -152.1, end_date: -145.0, },
    
    { id: 18, start_date: -145.0, end_date: -139.8, },
    { id: 19, start_date: -139.8, end_date: -132.9, },
    { id: 20, start_date: -132.9, end_date: -129.4, },
    { id: 21, start_date: -129.4, end_date: -125.0, },
    { id: 22, start_date: -125.0, end_date: -113.0, },
    { id: 23, start_date: -113.0, end_date: -100.5, },
    { id: 24, start_date: -100.5, end_date: -93.9, },
    { id: 25, start_date: -93.9,  end_date: -89.8, },
    { id: 26, start_date: -89.8,  end_date: -86.3, },
    { id: 27, start_date: -86.3,  end_date: -83.6, },
    { id: 28, start_date: -83.6,  end_date: -72.1, },
    { id: 29, start_date: -72.1,  end_date: -66.0, },
  ];

export const renderPage = () => {

    const collapse = (sectionId) => {
        const element = document.getElementById(sectionId);
        if ( element.style.minHeight !== '40px' ) {
            element.style.minHeight = '40px';
            element.style.maxHeight = '40px';
        } else {
            switch (sectionId) {
                case 'section1':
                    element.style.minHeight = '222px';
                    element.style.maxHeight = '222px';
                    break;
                case 'section2':
                    element.style.minHeight = '160px';
                    element.style.maxHeight = '160px';
                    break;
                case 'section3':
                    element.style.minHeight = '450px';
                    element.style.maxHeight = '450px';
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

    const gotoWiki = (link) => {
        window.location.href = link;
    }
    window.gotoWiki = gotoWiki;

    const getFirstDate = (periodId) => {
        let firstDate = -251.9;
        PERIODS_TIMES.forEach(period => {
            if (period.id == periodId) {
                firstDate = period.start_date;
            }
        });
        return firstDate;
    }

    const getLastDate = (periodId) => {
        let lastDate = -66.0;
        PERIODS_TIMES.forEach(period => {
            if (period.id == periodId) {
                lastDate = period.end_date;
            }
        });
        return lastDate;
    }

    const pourcentagePeriode = (debut, fin) => {
        const echelle = -66.0 - (-251.9); // L'échelle totale de la frise du Mésozoïque
    
        const debutPeriode = debut - (-251.9);
        const longueurPeriode = fin - debut;
    
        const pourcentageDebut = (debutPeriode / echelle) * 100;
        const pourcentageLongueur = (longueurPeriode / echelle) * 100;
    
        return { pourcentageDebut, pourcentageLongueur };
    }

    const getTimeline = (periods) => {
        const firstDate = getFirstDate(periods[0].id);
        const lastDate = getLastDate(periods[periods.length - 1].id);
        const duration = pourcentagePeriode(firstDate, lastDate);
        return `
            <!-- Trias -->
            <!-- Trias Inférieur -->
            <div class="timeline-period-tile indusien"></div>
            <div class="timeline-period-tile olenekien"></div>
            <!-- Trias Moyen -->
            <div class="timeline-period-tile anisien"></div>
            <div class="timeline-period-tile ladinien"></div>
            <!-- Trias Supérieur -->
            <div class="timeline-period-tile carnien"></div>
            <div class="timeline-period-tile norien"></div>
            <div class="timeline-period-tile rhaetien"></div>
            <!-- Jurassique -->
            <!-- Jurassique Inférieur -->
            <div class="timeline-period-tile hettangien"></div>
            <div class="timeline-period-tile sinemurien"></div>
            <div class="timeline-period-tile pliensbachien"></div>
            <div class="timeline-period-tile toarcien"></div>
            <!-- Jurassique Moyen -->
            <div class="timeline-period-tile aalenien"></div>
            <div class="timeline-period-tile bajocien"></div>
            <div class="timeline-period-tile bathonien"></div>
            <div class="timeline-period-tile callovien"></div>
            <!-- Jurassique Supérieur -->
            <div class="timeline-period-tile oxfordien"></div>
            <div class="timeline-period-tile kimmeridgien"></div>
            <div class="timeline-period-tile tithonien"></div>
            <!-- Crétacé -->
            <!-- Crétacé Inférieur -->
            <div class="timeline-period-tile berriasien"></div>
            <div class="timeline-period-tile valanginien"></div>
            <div class="timeline-period-tile hauterivien"></div>
            <div class="timeline-period-tile barremien"></div>
            <div class="timeline-period-tile aptien"></div>
            <div class="timeline-period-tile albien"></div>
            <!-- Crétacé Supérieur -->
            <div class="timeline-period-tile cenomanien"></div>
            <div class="timeline-period-tile turonien"></div>
            <div class="timeline-period-tile coniacien"></div>
            <div class="timeline-period-tile santonien"></div>
            <div class="timeline-period-tile campanien"></div>
            <div class="timeline-period-tile maastrichtien"></div>
            <div class="dinosaur-timeline" style="left: ${duration.pourcentageDebut}%; width: ${duration.pourcentageLongueur}%">
                <div class="dinosaur-line"></div>
            </div>
        `;
    }

    /* --------------------------------------------------------------------- */
    const dinosaurId = new URLSearchParams(window.location.search).get('id');
    const dinosaur = getDinosaurById(dinosaurId);
    const pageTitle = dinosaur.name;
    LAZR.DOM.setHTMLTitle(pageTitle);

    
    const header = document.getElementById('header');

    const backButton = LAZR.DOM.createElement('button', 'backButton', 'back-button', `<img class="back-icon" src="./medias/images/font-awsome/angle-left-solid.svg" />`)
    backButton.addEventListener('click', () => {
        history.back();
    });
    const headerIndexLink = document.getElementById('headerIndexLink');
    header.insertBefore(backButton, headerIndexLink);

    headerIndexLink.innerHTML = '';
    headerIndexLink.innerHTML = `<span class="dinosaur-page--header-name">${dinosaur.name}</span>`;

    const infosButton = LAZR.DOM.createElement('button', 'infosButton', 'infos-button', `<img class="infos-icon" src="./medias/images/font-awsome/circle-info-solid.svg" />`)
    infosButton.addEventListener('click', () => {
        gotoWiki(dinosaur.wiki_link)
    });
    header.appendChild(infosButton, headerIndexLink);

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
                <div class="timeline-area">${getTimeline(dinosaur.periods)}</div>
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
                    <span class="section-sub-title">Famille</span>
                    <span>${dinosaur.family}</span>
                </div>
                <div class="details-sub-section">
                    <span class="section-sub-title">Genre</span>
                    <span>${dinosaur.genus}</span>
                </div>
            </div>
            <div id="section3" class="details-section description-section">
                <span class="section-title description-title" onclick="collapse('section3')">Description</span>
                <div class="details-sub-section">
                    <span class="section-sub-title">Régime alimentaire</span>
                    <span>${dinosaur.food}</span>
                </div>
                <span style="min-height: 10px;"></span>
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
                <span style="min-height: 10px;"></span>
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


