import { renderDinosaurTile } from '../../../components/dinosaurTile/dinosaurTile.component.js';
import { CLASSIFICATION, DINOSAURS } from '../../../data/dinosaurs.data.js';
import { PERIODS, PERIODS_ORDER } from '../../../data/periods.data.js';
import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    // Variables globales ------------------------------------------------------------------------------------
    // Filtres
    let filteredDinosaurs = [];
    // Modale
    let modalExist = false;
    let isModalOpened = false;
    // Modale 2
    let modal2Exist = false;
    let isModal2Opened = false;

    

    // METHODES ----------------------------------------------------------------------------------------------

    // USER INTERACTIONS -------------------------------------------------------

    // Filter ----------------------------------------------
    const onFiltersClick = () => {
        const filters = getUrlFilters();
        if (!isModalOpened) {
            openModal(filters);
        }
    }
    window.onFiltersClick = onFiltersClick;

    const applyModalFilters = () => {
        const filters = getModalFilters();
        const sort = getUrlSorting();
        getFilteredDinosaurs(filters);
        let periodsId = '';
        filters.periods.forEach(period => {
            periodsId += '-' + period;
        });
        window.location = './?food=' + filters.food.toString() + '&periods=' + periodsId + '&classification=' + filters.classification.toString() + '&sort=' + sort;
    }
    window.applyModalFilters = applyModalFilters;
    
    const resetFilters = () => {
        const sort = getUrlSorting();
        window.location = './?sort=' + sort;
    }
    window.resetFilters = resetFilters;

    // Sorting ---------------------------------------------
    const onSortClick = () => {
        if (!isModal2Opened) {
            openModal2(filters);
        }
    }
    window.onSortClick = onSortClick;

    const applyModalSorting = () => {
        const sort = getModalSorting();
        getSortedDinosaurs(sort);
        console.log(window.location);
        if (window.location.search != '') {
            let foodFilter = LAZR.URL.getURLParameter('food');
            let periodsTextFilter = LAZR.URL.getURLParameter('periods');
            let classificationFilter = LAZR.URL.getURLParameter('classification');

            let food = foodFilter != null ? foodFilter : '';
            let periods = periodsTextFilter != null ? periodsTextFilter : '';
            let classification = classificationFilter != null ? classificationFilter : '';

            window.location = './?food=' + food + '&periods=' + periods + '&classification=' + classification + '&sort=' + sort;
        } else {
            window.location = './?sort=' + sort;
        }
        //window.location = window.location += '&sort=' + sort;
    }
    window.applyModalSorting = applyModalSorting;


    // Collapse --------------------------------------------
    const collapse = (id) => {
        const div = document.getElementById('collapsable' + id);
        if (div.classList.contains('collapsed')) {
            div.classList.remove('collapsed');
            let height = 0;
            switch (id) {
                case 1:
                    height = '151px'
                    break;
                case 2:
                    height = '1242px'
                    break;
                default:
                    height = 'fit-content'
                    break;
            }
            div.style.height = height;
        } else {
            div.classList.add('collapsed');
        }
    }
    window.collapse = collapse;

    // FILTERING ------------------------------------------------------------------

    const getUrlFilters = () => {
        let filters = { food: null, periods: [], classification: null};
        
        let foodFilter = LAZR.URL.getURLParameter('food');
        let periodsTextFilter = LAZR.URL.getURLParameter('periods');
        let classificationFilter = LAZR.URL.getURLParameter('classification');

        if (foodFilter != null || periodsTextFilter != null || classificationFilter != null) {
            let food = foodFilter != null ? foodFilter : '';
            let periods = periodsTextFilter.split('-').filter(Boolean).map(Number);
            let classification = classificationFilter != null ? classificationFilter : '';
            filters = {
                food: food,
                periods: periods,
                classification: classification
            }
        }
        return filters;
    }

    const getModalFilters = () => {
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

        // Récupération de la classification
        let classification = [];
        if (document.getElementById('tousClassification').checked) {
            classification.push('Tous');
        } else {
            CLASSIFICATION.forEach(order => {
                if (document.getElementById(order.name).checked) {classification.push(order.name)}
                order.sub_orders.forEach(subOrder => {
                    if (document.getElementById(subOrder.name).checked) {classification.push(subOrder.name)}
                    subOrder.families.forEach(family => {
                        if (document.getElementById(family.name).checked) {classification.push(family.name)}
                        family.genus.forEach(genus => {
                            if (document.getElementById(genus.name).checked) {classification.push(genus.name); }
                        });
                    });
                });
            });
        }
        
        return {
            food: food,
            periods: periods,
            classification: classification
        };
    }

    const getFilteredDinosaurs = (filters) => {
        filteredDinosaurs = [];
        filteredDinosaurs = filterDinosaurs(filters);
        //console.table(filteredDinosaurs);
    }

    const filterDinosaurs = (filters) => {
        const { food, periods, classification } = filters;
      
        // Utilise la méthode filter() pour filtrer les dinosaures en fonction des critères
        const filteredDinosaurs = DINOSAURS.filter((dino) => {
            // Vérifie le régime alimentaire
            if (food != null && food != '') {
                if (!food.includes(dino.food)) {
                    return false;
                }
            }
        
            // Vérifie les périodes
            /* if (periods.length > 0) {
                for (const period of periods) {
                    if (!dino.periods.some((dinoPeriod) => dinoPeriod.id === period)) {
                        return false;
                    }
                }
            } */
            if (periods.length > 0) {
                let isHere = false;
                for (const period of periods) {
                    dino.periods.forEach(dinoPeriod => {
                        if (dinoPeriod.id == period) {
                            isHere = true;
                        }
                    });
                }
                if (!isHere) {
                    return false;
                }
            }

            // Vérifie la classification
            if (classification != null && classification != '') {
                if (classification != 'Tous') {
                    // Vérifie si le dinosaure correspond à l'au moins une des classifications sélectionnées
                    const matchesClassification = 
                        dino.order === classification ||
                        dino.sub_order === classification ||
                        dino.family === classification ||
                        dino.genus === classification;
                    
                    // Si le dinosaure ne correspond à aucune des classifications, le filtrer
                    if (!matchesClassification) {
                        return false;
                    }
                }
            }

            return true;
        });
        return filteredDinosaurs;
    };

    // SORTING -----------------------------------------------------------------
    const getUrlSorting = () => {
        let sort = LAZR.URL.getURLParameter('sort');
        return sort != null ? sort : '';
    }

    const getModalSorting = () => {
        let sort = '';

        // Récupération du Tri
        if (document.getElementById('latestAddedFirst').checked) { sort = 'latestAddedFirst'};
        if (document.getElementById('firstlyAddedFirst').checked) { sort = 'firstlyAddedFirst'};
        if (document.getElementById('oldestFirst').checked) { sort = 'oldestFirst'};
        if (document.getElementById('newestFirst').checked) { sort = 'newestFirst'};
        if (document.getElementById('heaviestFirst').checked) { sort = 'heaviestFirst'};
        if (document.getElementById('lightestFirst').checked) { sort = 'lightestFirst'};
        if (document.getElementById('longestFirst').checked) { sort = 'longestFirst'};
        if (document.getElementById('smallestFirst').checked) { sort = 'smallestFirst'};

        return sort;
    }

    // Sorting functions -----------------------------------

    const sortDinosaursLatestAddedFirst = (dinosaurs) => {
        dinosaurs.sort((a, b) => {
            return b.id - a.id;
        });
    
        return dinosaurs;
    }

    const sortDinosaursFirstlyAddedFirst = (dinosaurs) => {
        dinosaurs.sort((a, b) => {
            return a.id - b.id;
        });
    
        return dinosaurs;
    }

    const sortDinosaursOldestFirst = (dinosaurs) => {
        dinosaurs.sort((a, b) => {
            const firstPeriodA = a.periods[0].name;
            const firstPeriodB = b.periods[0].name;
    
            // Comparaison en se basant sur l'ordre personnalisé des périodes
            const orderA = PERIODS_ORDER[firstPeriodA];
            const orderB = PERIODS_ORDER[firstPeriodB];
    
            return orderA - orderB;
        });
    
        return dinosaurs;
    }

    const sortDinosaursNewestFirst = (dinosaurs) => {
        dinosaurs.sort((a, b) => {
            const firstPeriodA = a.periods[0].name;
            const firstPeriodB = b.periods[0].name;
    
            // Comparaison en se basant sur l'ordre personnalisé des périodes
            const orderA = PERIODS_ORDER[firstPeriodA];
            const orderB = PERIODS_ORDER[firstPeriodB];
    
            return orderB - orderA;
        });
    
        return dinosaurs;
    }

    const sortDinosaursHeaviestFirst = (dinosaurs) => {
        dinosaurs.sort((a, b) => {
            return b.average_mass - a.average_mass;
        });
    
        return dinosaurs;
    }

    const sortDinosaursLightestFirst = (dinosaurs) => {
        dinosaurs.sort((a, b) => {
            return a.average_mass - b.average_mass;
        });
    
        return dinosaurs;
    }

    const sortDinosaursLongestFirst = (dinosaurs) => {
        dinosaurs.sort((a, b) => {
            return b.average_length - a.average_length;
        });
    
        return dinosaurs;
    }

    const sortDinosaursSmallestFirst = (dinosaurs) => {
        dinosaurs.sort((a, b) => {
            return a.average_length - b.average_length;
        });
    
        return dinosaurs;
    }

    // -----------------------------------------------------

    const getSortedDinosaurs = (sort) => {
        switch (sort) {
            case 'latestAddedFirst':
                filteredDinosaurs = sortDinosaursLatestAddedFirst(filteredDinosaurs);
                break;
            case 'firstlyAddedFirst':
                filteredDinosaurs = sortDinosaursFirstlyAddedFirst(filteredDinosaurs);
                break;
            case 'oldestFirst':
                filteredDinosaurs = sortDinosaursOldestFirst(filteredDinosaurs);
                break;
            case 'newestFirst':
                filteredDinosaurs = sortDinosaursNewestFirst(filteredDinosaurs);
                break;
            case 'heaviestFirst':
                filteredDinosaurs = sortDinosaursHeaviestFirst(filteredDinosaurs);
                break;
            case 'lightestFirst':
                filteredDinosaurs = sortDinosaursLightestFirst(filteredDinosaurs);
                break;
            case 'longestFirst':
                filteredDinosaurs = sortDinosaursLongestFirst(filteredDinosaurs);
                break;
            case 'smallestFirst':
                filteredDinosaurs = sortDinosaursSmallestFirst(filteredDinosaurs);
                break;
            default:
                break;
        }
    }

    // DOM ---------------------------------------------------------------------

    const getOrderCheckbox = (order, filters) => {
        let isChecked = false;
        if (filters.classification == order.name) {
                isChecked = true;
            };
        return `
            <div class="filter-container">
                <input 
                    type="radio" 
                    id="${order.name}" 
                    name="classification" 
                    ${isChecked ? 'checked' : ''} />
                <label for="${order.name}" class="order-label">${order.name}</label>
            </div>
        `;
    }
    const getSubOrderCheckbox = (subOrder, filters) => {
        let isChecked = false;
        if (filters.classification == subOrder.name) {
                isChecked = true;
            };
        return `
            <div class="filter-container">
                <input 
                    type="radio" 
                    id="${subOrder.name}" 
                    name="classification" 
                    ${isChecked ? 'checked' : ''} 
                    style="margin-left: 20px;" />
                <label for="${subOrder.name}" class="sub-order-label">${subOrder.name}</label>
            </div>
        `;
    }
    const getFamilyCheckbox = (family, filters) => {
        let isChecked = false;
        if (filters.classification == family.name) {
                isChecked = true;
            };
        return `
            <div class="filter-container">
                <input 
                    type="radio" 
                    id="${family.name}" 
                    name="classification" 
                    ${isChecked ? 'checked' : ''} 
                    style="margin-left: 40px;" />
                <label for="${family.name}" class="family-label">${family.name}</label>
            </div>
        `;
    }
    const getGenusCheckbox = (genus, filters) => {
        let isChecked = false;
        if (filters.classification == genus.name) {
            isChecked = true;
        };
        return `
            <div class="filter-container">
                <input 
                    type="radio" 
                    id="${genus.name}" 
                    name="classification" 
                    ${isChecked ? 'checked' : ''} 
                    style="margin-left: 60px;" />
                <label for="${genus.name}" class="genus-label">${genus.name}</label>
            </div>
        `;
    }
    
    const getClassificationCheckboxes = (filters) => {
        //console.table(CLASSIFICATION);
        let string = `
            <div class="filter-container">
                <input 
                    type="radio" 
                    id="tousClassification" 
                    name="classification" 
                    ${filters.classification == 'Tous' ? 'checked' : ''}
                    style="margin-bottom: 5px;" />
                <label for="tousClassification">Tous</label>
            </div>
        `;
        CLASSIFICATION.forEach(order => {
            string += getOrderCheckbox(order, filters);
            order.sub_orders.forEach(subOrder => {
                string += getSubOrderCheckbox(subOrder, filters);
                subOrder.families.forEach(family => {
                    string += getFamilyCheckbox(family, filters);
                    family.genus.forEach(genus => {
                        string += getGenusCheckbox(genus, filters);
                    });
                });
            });
        });
        return string;
    }
    
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
                <input type="checkbox" id="${period.name}" name="${period.name}" ${isChecked ? 'checked' : ''} />
                <label for="${period.name}" class="period-span-label">
                    <div class="period-span-name">${period.name}</div> 
                    <div class="period-span-area">
                        <span class="period-span"> ${period.start_date}</span>
                        <span class="period-span">${period.end_date}</span>
                    </div>
                </label>
            </div>
        `;
    }

    const getPeriodsCheckboxes = (filters) => {
        return `
            <span class="period-group-title trias-label">Trias</span>
            <span class="period-sub-group-title trias-inferieur-label">Trias Inférieur</span>
            <div class="checkboxes-container trias-inferieur-label">
                ${getPeriodCheckbox(PERIODS[0], filters)}
                ${getPeriodCheckbox(PERIODS[1], filters)}
            </div>
            <span class="period-sub-group-title trias-moyen-label">Trias Moyen</span>
            <div class="checkboxes-container trias-moyen-label">
                ${getPeriodCheckbox(PERIODS[2], filters)}
                ${getPeriodCheckbox(PERIODS[3], filters)}
            </div>
            <span class="period-sub-group-title trias-superieur-label">Trias Supérieur</span>
            <div class="checkboxes-container trias-superieur-label">
                ${getPeriodCheckbox(PERIODS[4], filters)}
                ${getPeriodCheckbox(PERIODS[5], filters)}
                ${getPeriodCheckbox(PERIODS[6], filters)}
            </div>

            <span class="period-group-title jurassique-label">Jurassique</span>
            <span class="period-sub-group-title jurassique-inferieur-label">Jurassique Inférieur</span>
            <div class="checkboxes-container jurassique-inferieur-label">
                ${getPeriodCheckbox(PERIODS[7], filters)}
                ${getPeriodCheckbox(PERIODS[8], filters)}
                ${getPeriodCheckbox(PERIODS[9], filters)}
                ${getPeriodCheckbox(PERIODS[10], filters)}
            </div>
            <span class="period-sub-group-title jurassique-moyen-label">Jurassique Moyen</span>
            <div class="checkboxes-container jurassique-moyen-label">
                ${getPeriodCheckbox(PERIODS[11], filters)}
                ${getPeriodCheckbox(PERIODS[12], filters)}
                ${getPeriodCheckbox(PERIODS[13], filters)}
                ${getPeriodCheckbox(PERIODS[14], filters)}
            </div>
            <span class="period-sub-group-title jurassique-superieur-label">Jurassique Supérieur</span>
            <div class="checkboxes-container jurassique-superieur-label">
                ${getPeriodCheckbox(PERIODS[15], filters)}
                ${getPeriodCheckbox(PERIODS[16], filters)}
                ${getPeriodCheckbox(PERIODS[17], filters)}
            </div>

            <span class="period-group-title cretace-label">Crétacé</span>
            <span class="period-sub-group-title cretace-inferieur-label">Crétacé Inférieur</span>
            <div class="checkboxes-container cretace-inferieur-label">
                ${getPeriodCheckbox(PERIODS[18], filters)}
                ${getPeriodCheckbox(PERIODS[19], filters)}
                ${getPeriodCheckbox(PERIODS[20], filters)}
                ${getPeriodCheckbox(PERIODS[21], filters)}
                ${getPeriodCheckbox(PERIODS[22], filters)}
                ${getPeriodCheckbox(PERIODS[23], filters)}
            </div>
            <span class="period-sub-group-title cretace-superieur-label">Crétacé Supérieur</span>
            <div class="checkboxes-container cretace-superieur-label">
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
                        <div id="collapsable1" class="collapsable-div collapsed">
                            <span style="font-size: 20px;" onclick="collapse(1)">Régime alimentaire${filters.food != '' && filters.food != null ? `<span class="notif">1</span>` : ''}</span>
                            <div class="checkboxes-container">
                                <div class="filter-container">
                                    <input 
                                        type="radio" 
                                        id="tous" 
                                        name="regime" 
                                        ${filters.food == 'Carnivore, Herbivore, Omnivore' ? 'checked' : ''}
                                        style="margin-bottom: 5px;" />
                                    <label for="tous">Tous</label>
                                </div>
                                <div class="filter-container">
                                    <input 
                                        type="radio" 
                                        id="carnivore" 
                                        name="regime" 
                                        ${filters.food == 'Carnivore' ? 'checked' : ''} />
                                    <label for="carnivore">Carnivore</label>
                                </div>
                                <div class="filter-container">
                                    <input 
                                        type="radio" 
                                        id="herbivore" 
                                        name="regime" 
                                        ${filters.food == 'Herbivore' ? 'checked' : ''}  />
                                    <label for="herbivore">Herbivore</label>
                                </div>
                                <div class="filter-container">
                                    <input 
                                        type="radio" 
                                        id="omnivore" 
                                        name="regime" 
                                        ${filters.food == 'Omnivore' ? 'checked' : ''} />
                                    <label for="omnivore">Omnivore</label>
                                </div>
                            </div>
                        </div>
    
                        <div id="collapsable2" class="collapsable-div collapsed">
                            <span style="font-size: 20px;" onclick="collapse(2)">Période${filters.periods.length > 0 ? `<span class="notif">${filters.periods.length}</span>` : ''}</span>
                            ${getPeriodsCheckboxes(filters)}
                        </div>

                        <div id="collapsable3" class="collapsable-div collapsed">
                            <span style="font-size: 20px;" onclick="collapse(3)">Classification${filters.classification != '' && filters.classification != null ? `<span class="notif">1</span>` : ''}</span>
                            ${getClassificationCheckboxes(filters)}
                        </div> 
                        
                        <div class="buttons-container">
                            <button class="reset-button" onclick="resetFilters()">Réinitialiser</button>
                            <button class="apply-button" onclick="applyModalFilters()">Appliquer</button>
                        </div>
                    </div>
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

    const openModal2 = () => {
        const sort = getUrlSorting();
        if (modal2Exist) {
            document.getElementById('modal2Background').style.display = 'flex';
            document.getElementById('modal2Div').style.display = 'flex';
        } else {
            const bg = LAZR.DOM.createElement('div', 'modal2Background', 'modal-background', ``);
            bg.addEventListener('click', closeModal2);
            document.getElementById('main').appendChild(bg);
            document.getElementById('main').appendChild(LAZR.DOM.createElement('div', 'modal2Div', 'modal-div', `
                <div class="modal-content">
                    <div class="modal-inner-content">
                        <span style="font-size: 25px;">Tri</span>

                        <span class="period-group-title">Par date d'ajout</span>
                        <div class="checkboxes-container">
                            <div class="filter-container">
                                <input 
                                    type="radio" 
                                    id="latestAddedFirst"
                                    name="sort"
                                    ${sort == 'latestAddedFirst' ? 'checked' : ''} />
                                <label for="latestAddedFirst">Du dernier ajout au premier ajout</label>
                            </div>
                            <div class="filter-container">
                                <input 
                                    type="radio" 
                                    id="firstlyAddedFirst"
                                    name="sort"
                                    ${(sort == 'firstlyAddedFirst' || sort == '') ? 'checked' : ''} />
                                <label for="firstlyAddedFirst">Du premier ajout au dernier ajout</label>
                            </div>
                        </div>

                        <span class="period-group-title">Par période d'apparition</span>
                        <div class="checkboxes-container">
                            <div class="filter-container">
                                <input 
                                    type="radio" 
                                    id="oldestFirst"
                                    name="sort"
                                    ${sort == 'oldestFirst' ? 'checked' : ''} />
                                <label for="oldestFirst">Du plus ancien au plus récent</label>
                            </div>

                            <div class="filter-container">
                                <input 
                                    type="radio" 
                                    id="newestFirst"
                                    name="sort"
                                    ${sort == 'newestFirst' ? 'checked' : ''} />
                                <label for="newestFirst">Du plus récent au plus ancien</label>
                            </div>
                        </div>

                        <span class="period-group-title">Par poids</span>
                        <div class="checkboxes-container">
                            <div class="filter-container">
                                <input 
                                    type="radio" 
                                    id="heaviestFirst"
                                    name="sort"
                                    ${sort == 'heaviestFirst' ? 'checked' : ''} />
                                <label for="heaviestFirst">Du plus lourd au plus léger</label>
                            </div>

                            <div class="filter-container">
                                <input 
                                    type="radio" 
                                    id="lightestFirst"
                                    name="sort"
                                    ${sort == 'lightestFirst' ? 'checked' : ''} />
                                <label for="lightestFirst">Du plus léger au plus lourd</label>
                            </div>
                        </div>

                        <span class="period-group-title">Par longueur</span>
                        <div class="checkboxes-container">
                            <div class="filter-container">
                                <input 
                                    type="radio" 
                                    id="longestFirst"
                                    name="sort"
                                    ${sort == 'longestFirst' ? 'checked' : ''} />
                                <label for="longestFirst">Du plus long au plus court</label>
                            </div>

                            <div class="filter-container">
                                <input 
                                    type="radio" 
                                    id="smallestFirst"
                                    name="sort"
                                    ${sort == 'smallestFirst' ? 'checked' : ''} />
                                <label for="smallestFirst">Du plus court au plus long</label>
                            </div>
                        </div>

                        
                        <div class="buttons-container">
                            <button class="apply-button" onclick="applyModalSorting()">Appliquer</button>
                        </div>
                    </div>
                </div>
            `));
            modal2Exist = true;
        }
        isModal2Opened = true;
    }

    const closeModal2 = () => {
        document.getElementById('modal2Background').style.display = 'none';
        document.getElementById('modal2Div').style.display = 'none';
        isModal2Opened = false;
    }
    window.closeModal2 = closeModal2;

    // EXECUTION ---------------------------------------------------------------------------------------------

    // Page title
    const pageTitle = LAZR.APP_DATA.getAppName();
    LAZR.DOM.setHTMLTitle(pageTitle);

    // Header
    const headerIndexLink = document.getElementById('headerIndexLink');
    headerIndexLink.innerHTML = '';
    const headerLogo = LAZR.DOM.createImgElement('headerLogo', 'header-logo', './medias/images/logo-white.svg', 'lazr logo');
    LAZR.CSS.applyColorFilterOnElement(headerLogo, LAZR.CSS.getCssRootVariableValue('--on-primary'));
    headerIndexLink.appendChild(headerLogo);

    // Page
    const page = LAZR.DOM.createElement(
        'div', 
        'indexPage', 
        'page', 
        `
            <div class="top-area">
                <span onclick="onSortClick()">Tri</span>
                <span onclick="onFiltersClick()">Filtres</span>
            </div>
        `
    );
    page.style.padding = '0px var(--horizontal-padding)';

    // Gestion filtres
    
    const filters = getUrlFilters();
    getFilteredDinosaurs(filters);

    if (filteredDinosaurs.length > 0) {
        const sort = getUrlSorting();
        if (sort != '') {
            getSortedDinosaurs(sort);
        }
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
    

    /* --------------------------------------------------------------------- */
    
    return page;
}
