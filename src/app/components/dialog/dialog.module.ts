import { NgModule } from "@angular/core";
import { DialogComponent } from "./dialog.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [DialogComponent],
    exports: [DialogComponent, CommonModule],
})
export class DialogModule { }
