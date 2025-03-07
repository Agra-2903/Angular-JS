import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';  // Import your components here
// import { AboutComponent } from './about/about.component';  // Example component

const routes: Routes = [
  { path: '', component: AppComponent },  // Default route
  // { path: 'about', component: AboutComponent }  // Example About route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Register routes
  exports: [RouterModule]  // Make RouterModule available for the app
})
export class AppRoutingModule { }
