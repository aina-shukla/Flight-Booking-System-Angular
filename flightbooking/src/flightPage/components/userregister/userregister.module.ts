import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UserregisterComponent } from "./userregister.component";

@NgModule({
    declarations: [UserregisterComponent],
    imports: [BrowserModule, ReactiveFormsModule],
    bootstrap: [UserregisterComponent]
})
export class UserregisterModule { }