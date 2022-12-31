import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CategoriesComponent } from "./categories/categories.component";

@NgModule({
    declarations:[
        CategoriesComponent
    ],
    imports:[
        CommonModule
    ]
})
export class categoriesModule{
    constructor(){
        console.log("Hii I am Lazy loaded");
        
       }
}