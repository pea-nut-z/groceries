import { Observable,ObservableArray } from '@nativescript/core'

export const getGroceryList = () => {
    const items = [
        {name: "eggs"},
        {name: "bread"},
        {name: "cereal"},
    ]
    const viewModal = new Observable()
    viewModal.groceryList = new ObservableArray(items)
    return viewModal
}