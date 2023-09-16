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

    const page = LAZR.DOM.createElement(
        'div', 
        'indexPage', 
        'page', 
        `<h1>${pageTitle}</h1>`
    );
    page.style.padding = '0px var(--horizontal-padding)';

    DINOSAURS.forEach(dinosaur => {
        page.appendChild(renderDinosaurTile(dinosaur)); 
    });

    console.table(DINOSAURS)
    /* --------------------------------------------------------------------- */
    
    return page;
}
