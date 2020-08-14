import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RecommendationComponent } from './recommendation/recommendation.component';


const routes: Routes = [{
  path: 'home', component: LandingPageComponent
},
{
  path: 'login', component: LoginComponent
},
{
  path: 'recommendation', component: RecommendationComponent
},
{
  path: '', component: LandingPageComponent
}]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
