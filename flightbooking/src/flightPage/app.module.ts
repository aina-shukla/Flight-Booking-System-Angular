import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BookticketComponent } from './components/bookticket/bookticket.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { UserloginComponent } from './components/userlogin/userlogin.component';
import { UserregisterComponent } from './components/userregister/userregister.component';
import { WelcomeuserComponent } from './components/welcomeuser/welcomeuser.component';
import { WelcomeadminComponent } from './components/welcomeadmin/welcomeadmin.component';
import { AirlinesregisterComponent } from './components/airlinesregister/airlinesregister.component';
import { HttpClientModule } from "@angular/common/http";

const routes:Routes = [
    {path: "home", component: HomeComponent },
    {path: "bookticket", component: BookticketComponent },
    {path: "adminlogin", component: AdminloginComponent },
    {path: "userlogin", component: UserloginComponent },
    {path: "userregister", component: UserregisterComponent },
    {path: "welcomeuser", component: WelcomeuserComponent },
    {path: "welcomeadmin", component: WelcomeadminComponent},
    {path: "registerairline", component: AirlinesregisterComponent},
    {path: "**", redirectTo: "home" }
];

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent, HomeComponent, BookticketComponent, AdminloginComponent, UserloginComponent, UserregisterComponent, WelcomeuserComponent, WelcomeadminComponent, AirlinesregisterComponent],
    imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, RouterModule.forRoot(routes)],
    bootstrap: [AppComponent]
})
export class AppModule { }