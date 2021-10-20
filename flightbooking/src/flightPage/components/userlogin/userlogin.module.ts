import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { UserloginComponent } from "./userlogin.component";

@NgModule({
    declarations: [UserloginComponent],
    imports: [BrowserModule, ReactiveFormsModule],
    bootstrap: [UserloginComponent]
})
export class UserloginModule { }