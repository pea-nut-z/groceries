
import {getGroceryList} from "../../shared/view-models/grocery-list-view-model"
let page;

export const loaded = (args) => {
    page = args.object
    const list = getGroceryList()     
    console.log("@return",list);
    
    page.bindingContext =list
}