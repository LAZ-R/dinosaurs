import { renderDinosaurTile } from '../../../components/dinosaurTile/dinosaurTile.component.js';
import { DINOSAURS } from '../../../data/dinosaurs.data.js';
import * as LAZR from '../../../lazR/lazR.js';

export const renderPage = () => {

    const functionName = () => {
        // Do something...
    }
    window.functionName = functionName;

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
                <span>Filtres</span>
            </div>
        `
    );
    page.style.padding = '0px var(--horizontal-padding)';

    DINOSAURS.forEach(dinosaur => {
        page.appendChild(renderDinosaurTile(dinosaur)); 
    });

    //console.table(DINOSAURS)
    /* --------------------------------------------------------------------- */
    
    return page;
}


const carId = new URLSearchParams(window.location.search).get('id');