import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { VerifyComponent } from './components/verify/verify.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { BlogComponent } from './blog/blog.component';
import { FormComponent } from './form/form.component';
import { JobproviderComponent } from './jobprovider/jobprovider.component';
import { StoredDataComponent } from './stored-data/stored-data.component'

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    RegisterComponent,
    LoginComponent,
    ForgotComponent,
    VerifyComponent,
    HeadComponent,
    FootComponent,
    HomeComponent,
    JobseekerComponent,
    AllJobsComponent,
    BlogComponent,
    FormComponent,
    JobproviderComponent,
    StoredDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
