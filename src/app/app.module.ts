import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router"
import { AppComponent } from './app.component';
import { HomeComponent } from './components/homecomponent';
import { StudentComponent } from './components/student.component';
import { mydbService} from './service/dbService';
//import { myGuard} from './guard';
import { ProfileComponent } from './components/profileComponent'

// Import our Routes file

const My_Router:Routes =[{path:'',redirectTo:'home',pathMatch:'full'},
                         {path:'home',component:HomeComponent},              
                         {path:'students',component:StudentComponent},
                          {path:'profile/:id',component:ProfileComponent}//,canActivate:[myGuard]
                        
                         ];//{ path: '**', redirectTo: '/' }

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(My_Router)
    // add it to imports
  ],
  providers: [mydbService],//,myGuard
  bootstrap: [AppComponent]
})
export class AppModule { }
