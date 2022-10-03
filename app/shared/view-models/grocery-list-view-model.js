import { Observable,ObservableArray } from '@nativescript/core'

export function GroceryListViewModel(items){
    
    const viewModel = new ObservableArray(items)

    viewModel.load = function () {
        const items = ["eggs","bread","cereal"]
        items.forEach(item => {
            viewModel.push({
                name:item
            })
        })
    }    

    viewModel.add = function (item) {
        viewModel.push({name:item})
    }

    viewModel.remove = function (index) {
        viewModel.splice(index,1)
    }

    viewModel.empty = function () {
        while (viewModel.length) {
        viewModel.pop()
    }
}        
    return viewModel
}