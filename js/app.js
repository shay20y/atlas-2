import {doApi} from "./appList.js";
import {declareEvants} from "./appSearch.js";

const init = () => { 
    declareEvants();
    doApi();
}


init();