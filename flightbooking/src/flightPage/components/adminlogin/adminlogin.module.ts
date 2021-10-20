import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AdminloginComponent } from "./adminlogin.component";

@NgModule({
    declarations: [AdminloginComponent],
    imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
    bootstrap: [AdminloginComponent]
})
export class AdminloginModule { }