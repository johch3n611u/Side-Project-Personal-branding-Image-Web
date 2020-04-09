import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from '../app/sign-in/sign-in.component';
import { HomeComponent } from '../app/home/home.component';
// import { SignInGuard } from './sign-in/sign-in.guard' ;
import { ManagementComponent } from '../app/home/mangement/management.component';


// ### Original
// const routes: Routes = [
//   {
//     path: 'Home', component: HomeComponent,
//     children: [
//       { path: 'Management', component: ManagementComponent }
//     ]
//   }, //canActivate: [SignInGuard]
//   { path: 'SignIn', pathMatch: 'full', component: SignInComponent, },
//   { path: '**', pathMatch: 'full', redirectTo: '/SignIn' },
// ];

// ### Template https://forum.angular.tw/t/topic/1758/2
// const routes: Routes = [
//   {
//     path: '',
//     canActivate: [AuthGuard],
//     component: SidenavComponent,
//     children: [
//       { path: '', redirectTo: 'login', pathMatch: 'full' },
//       { path: 'Management1', component: Management1Component },
//       { path: 'Management2 ', component: Management2Component },
//     ],
//   },
//   { path: 'login', component: LoginComponent },
// ];

const routes: Routes = [
  {
    path: '',
    // canActivate: [SignInGuard],
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'SignIn', pathMatch: 'full' },
      { path: 'Management', component: ManagementComponent },
    ],
  },
  { path: 'SignIn', component: SignInComponent },
  { path: '**', redirectTo: 'SignIn', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
