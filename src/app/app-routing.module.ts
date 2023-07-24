import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { FooterComponent } from './layout/footer/footer.component';

const routes: Routes = [
  { path: 'app-auth-layout', component: AuthLayoutComponent },
  { path: 'app-footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
