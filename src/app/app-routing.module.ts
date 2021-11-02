import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOMEComponent } from './home/home.component';
import { COURSESComponent } from './courses/courses.component';
import { JOINNOWComponent } from './join-now/join-now.component';
import { ABOUTComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:HOMEComponent},
  {path:'courses',component: COURSESComponent},
  {path:'join-now',component:JOINNOWComponent},
  {path:'about',component:ABOUTComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
