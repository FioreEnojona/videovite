import { index as indexPageData} from "./pages/index"
import {navigation} from "./pages/navigation"
import { deporte as deportePageData} from "./pages/deporte"
import { panel as panelPageData } from "./pages/panel"   


export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
        ...navigation
    }

    let pageVariables = {};
    console.log("Page been loaded:", pagePath);
    switch (pagePath) {
        case '/index.html':
            pageVariables = indexPageData
            break;
        case '/deporte.html':
            pageVariables = deportePageData
            break;
        case '/panel.html':
            pageVariables = panelPageData
            break;
    }
    const finalContext = {
        ...commonVariables,
        ...pageVariables
    }
    console.log("Context: ", JSON.stringify(finalContext, null, 2));
    return finalContext
}
