
import { fromObject } from "@nativescript/core";
import {GroceryListViewModel} from "../../shared/view-models/grocery-list-view-model"
let page;

const groceryList = new GroceryListViewModel([])
const pageData = fromObject({
    groceryList,
    newItem:""
})

export function loaded(args) {
    page = args.object
    page.bindingContext = pageData
    
    if (!pageData.groceryList.length) {
        pageData.set("isLoading",true)
        groceryList.load()
        pageData.set("isLoading",false)
    }
}

export function add() {
    const item = page.getViewById("newItem").text
    if (item.trim() == "") {
        let options = {
            title: "Invalid entry",
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
        };
        alert(options)
    } else {
        groceryList.add(item)
        pageData.set("newItem", "")
        page.getViewById("newItem").dismissSoftInput()
    }
}