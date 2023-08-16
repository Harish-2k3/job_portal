import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';
import { HomeComponent } from './home/home.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { AllJobsComponent } from './all-jobs/all-jobs.component';
import { BlogComponent } from './blog/blog.component';
import { FormComponent } from './form/form.component';
import { JobproviderComponent } from './jobprovider/jobprovider.component';
import { StoredDataComponent } from './stored-data/stored-data.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'components',component:ComponentsComponent,children:[
  ]},
  {path:'login',component:LoginComponent},
  {path:'forgot',component:ForgotComponent},
  {path:'register',component:RegisterComponent},
  {path:'verify',component:VerifyComponent},
  {path:'home',component:HomeComponent},
  {path:'jobseeker',component:JobseekerComponent},
  {path:'all-jobs',component:AllJobsComponent},
  {path:'blog',component:BlogComponent},
  {path:'form',component:FormComponent},
  {path:'jobprovider',component:JobproviderComponent},
  {path:'storedData',component:StoredDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
