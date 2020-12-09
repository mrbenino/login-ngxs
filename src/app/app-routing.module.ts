import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginNgxsComponent} from './components/login-ngxs/login-ngxs.component';
import {IntroductionComponent} from './components/static/introduction/introduction.component';


const routes: Routes = [
  {path: 'introduction', component: IntroductionComponent},
  {path: 'tests/login-ngxs', component: LoginNgxsComponent},
  {path: '**', component: IntroductionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
