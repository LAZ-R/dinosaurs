import { renderDinosaurTile } from '../../../components/dinosaurTile/dinosaurTile.component.js';
import { DINOSAURS } from '../../../data/dinosaurs.data.js';
import { PERIODS } from '../../../data/periods.data.js';
import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    let filteredDinosaurs = [];
    let hasFilters = false;
    let modalExist = false;
    let isModalOpened = false;

    const onFiltersClick = () => {
        let filters = { food: null, periods: [] };
        
        let foodFilter = LAZR.URL.getURLParameter('food');
        let periodsTextFilter = LAZR.URL.getURLParameter('periods');

        if (foodFilter != null || periodsTextFilter != null) {
            hasFilters = true;
            let periods = periodsText.split('-').filter(Boolean).map(Number);
            filters = {
                food: food,
                periods: periods
            }
        }

        if (!isModalOpened) {
            openModal(filters);
        }
    }
    window.onFiltersClick = onFiltersClick;

    const getFilters = () => {
        let food = [];

        // Récupération du Régime alimentaire
        if (document.getElementById('carnivore').checked) { food.push('Carnivore')};
        if (document.getElementById('herbivore').checked) { food.push('Herbivore')};
        if (document.getElementById('omnivore').checked) { food.push('Omnivore')};
        if (document.getElementById('tous').checked) { food.push('Carnivore', 'Herbivore', 'Omnivore')};
        //console.table(food);

        // Récupération des périodes cochées
        let periods = [];
        PERIODS.forEach(period => {
            if (document.getElementById(period.name).checked) {
                periods.push(period.id);
            }
        });
        //console.table(periods);

        return {
            food: food,
            periods: periods
        };
    }

    const getFilteredDinosaurs = (filters) => {
        filteredDinosaurs = [];
        filteredDinosaurs = filterDinosaurs(filters);
        console.table(filteredDinosaurs);
    }

    const filterDinosaurs = (filters) => {
        const { food, periods } = filters;
      
        // Utilisez la méthode filter() pour filtrer les dinosaures en fonction des critères
        const filteredDinosaurs = DINOSAURS.filter((dino) => {
          // Vérifiez le régime alimentaire
          if (food.length > 0 && !food.includes(dino.food)) {
            return false;
          }
      
          // Vérifiez les périodes
          if (periods.length > 0) {
            for (const period of periods) {
              if (!dino.periods.some((dinoPeriod) => dinoPeriod.id === period)) {
                return false;
              }
            }
          }
      
          return true;
        });
      
        return filteredDinosaurs;
      };

    const applyFilters = () => {
        //console.log('filters : ');
        const filters = getFilters();
        getFilteredDinosaurs(filters);
        let periodsId = '';
        filters.periods.forEach(period => {
            periodsId += '-' + period;
        });
        window.location = './?food=' + filters.food.toString() + '&periods=' + periodsId;
        //closeModal();
    }
    window.applyFilters = applyFilters;

    const getPeriodCheckbox = (period, filters) => {
        let isChecked = false;
        if (filters.periods.length > 0) {
            filters.periods.forEach(filterPeriodId => {
                if (filterPeriodId == period.id) {
                    isChecked = true;
                }
            });
        }
        return `
            <div class="filter-container">
                <input type="checkbox" id="${period.name}" name="${period.name}" ${isChecked ? 'checked' : ''} /><label for="${period.name}">${period.name}</label>
            </div>
        `;
    }

    const getPeriodsCheckboxes = (filters) => {
        return `
            <span>Trias</span>
            <span>Trias Inférieur</span>
            <div class="checkboxes-container">
                ${getPeriodCheckbox(PERIODS[0], filters)}
                ${getPeriodCheckbox(PERIODS[1], filters)}
            </div>
            <span>Trias Moyen</span>
            <div class="checkboxes-container">
                ${getPeriodCheckbox(PERIODS[2], filters)}
                ${getPeriodCheckbox(PERIODS[3], filters)}
            </div>
            <span>Trias Supérieur</span>
            <div class="checkboxes-container">
                ${getPeriodCheckbox(PERIODS[4], filters)}
                ${getPeriodCheckbox(PERIODS[5], filters)}
                ${getPeriodCheckbox(PERIODS[6], filters)}
            </div>

            <span>Jurassique</span>
            <span>Jurassique Inférieur</span>
            <div class="checkboxes-container">
                ${getPeriodCheckbox(PERIODS[7], filters)}
                ${getPeriodCheckbox(PERIODS[8], filters)}
                ${getPeriodCheckbox(PERIODS[9], filters)}
                ${getPeriodCheckbox(PERIODS[10], filters)}
            </div>
            <span>Jurassique Moyen</span>
            <div class="checkboxes-container">
                ${getPeriodCheckbox(PERIODS[11], filters)}
                ${getPeriodCheckbox(PERIODS[12], filters)}
                ${getPeriodCheckbox(PERIODS[13], filters)}
                ${getPeriodCheckbox(PERIODS[14], filters)}
            </div>
            <span>Jurassique Supérieur</span>
            <div class="checkboxes-container">
                ${getPeriodCheckbox(PERIODS[15], filters)}
                ${getPeriodCheckbox(PERIODS[16], filters)}
                ${getPeriodCheckbox(PERIODS[17], filters)}
            </div>

            <span>Crétacé</span>
            <span>Crétacé Inférieur</span>
            <div class="checkboxes-container">
                ${getPeriodCheckbox(PERIODS[18], filters)}
                ${getPeriodCheckbox(PERIODS[19], filters)}
                ${getPeriodCheckbox(PERIODS[20], filters)}
                ${getPeriodCheckbox(PERIODS[21], filters)}
                ${getPeriodCheckbox(PERIODS[22], filters)}
                ${getPeriodCheckbox(PERIODS[23], filters)}
            </div>
            <span>Crétacé Supérieur</span>
            <div class="checkboxes-container">
                ${getPeriodCheckbox(PERIODS[24], filters)}
                ${getPeriodCheckbox(PERIODS[25], filters)}
                ${getPeriodCheckbox(PERIODS[26], filters)}
                ${getPeriodCheckbox(PERIODS[27], filters)}
                ${getPeriodCheckbox(PERIODS[28], filters)}
                ${getPeriodCheckbox(PERIODS[29], filters)}
            </div>
        `;
    }

    const openModal = (filters) => {
        if (modalExist) {
            document.getElementById('modalBackground').style.display = 'flex';
            document.getElementById('modalDiv').style.display = 'flex';
        } else {
            const bg = LAZR.DOM.createElement('div', 'modalBackground', 'modal-background', ``);
            bg.addEventListener('click', closeModal);
            document.getElementById('main').appendChild(bg);
            document.getElementById('main').appendChild(LAZR.DOM.createElement('div', 'modalDiv', 'modal-div', `
                <div class="modal-content">
                    <div class="modal-inner-content">
                        <span style="font-size: 25px;">Filtres</span>
                        <span style="font-size: 20px;">Régime alimentaire</span>
                        <div class="checkboxes-container">
                            <div class="filter-container">
                                <input type="radio" id="carnivore" name="regime" ${filters.food == 'Carnivore' ? 'checked' : ''} /><label for="carnivore">Carnivore</label>
                            </div>
                            <div class="filter-container">
                                <input type="radio" id="herbivore" name="regime" ${filters.food == 'Herbivore' ? 'checked' : ''} /><label for="herbivore">Herbivore</label>
                            </div>
                            <div class="filter-container">
                                <input type="radio" id="omnivore" name="regime" ${filters.food == 'Omnivore' ? 'checked' : ''} /><label for="omnivore">Omnivore</label>
                            </div>
                            <div class="filter-container">
                                <input type="radio" id="tous" name="regime" ${filters.food == 'Carnivore,Herbivore,Omnivore' ? 'checked' : ''} /><label for="tous">Tous</label>
                            </div>
                        </div>
    
                        <span style="font-size: 20px;">Période</span>
                        ${getPeriodsCheckboxes(filters)}    
                        
                    </div>
                    <button onclick="applyFilters()">Appliquer</button>
                </div>
            `));
            modalExist = true;
        }
        isModalOpened = true;
    }

    const closeModal = () => {
        document.getElementById('modalBackground').style.display = 'none';
        document.getElementById('modalDiv').style.display = 'none';
        isModalOpened = false;
    }
    window.closeModal = closeModal;

    /* --------------------------------------------------------------------- */
    const pageTitle = LAZR.APP_DATA.getAppName();
    LAZR.DOM.setHTMLTitle(pageTitle);

    const headerIndexLink = document.getElementById('headerIndexLink');
    headerIndexLink.innerHTML = '';
    const headerLogo = LAZR.DOM.createImgElement('headerLogo', 'header-logo', './medias/images/logo-white.svg', 'lazr logo');
    LAZR.CSS.applyColorFilterOnElement(headerLogo, LAZR.CSS.getCssRootVariableValue('--on-primary'));
    headerIndexLink.appendChild(headerLogo);

    const page = LAZR.DOM.createElement(
        'div', 
        'indexPage', 
        'page', 
        `
            <div class="top-area">
                <span></span>
                <span onclick="onFiltersClick()">Filtres</span>
            </div>
        `
    );
    page.style.padding = '0px var(--horizontal-padding)';

    let food = LAZR.URL.getURLParameter('food');
    let periodsText = LAZR.URL.getURLParameter('periods');
    hasFilters = (food != null || periodsText != null);
    
    if (hasFilters) {
        console.log('has filters');
        hasFilters = true;
        console.log(food);
        let periods = periodsText.split('-').filter(Boolean).map(Number);
        console.table(periods);
        const filters = {
            food: food,
            periods: periods
        }
        getFilteredDinosaurs(filters);
        if (filteredDinosaurs.length > 0) {
            filteredDinosaurs.forEach(dinosaur => {
                page.appendChild(renderDinosaurTile(dinosaur)); 
            });
        } else {
            page.innerHTML += `
                <span style="text-align: center; max-width: 70%;">
                    Aucun dinosaure dans cette base de données ne correspond aux critères de filtre sélectionnés
                </span>
            `;
        }
    } else {
        DINOSAURS.forEach(dinosaur => {
            page.appendChild(renderDinosaurTile(dinosaur)); 
        });
    }

    /* --------------------------------------------------------------------- */
    
    return page;
}

