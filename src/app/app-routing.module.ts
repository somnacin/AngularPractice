import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { empty } from 'rxjs';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '',redirectTo: '/departments',pathMatch:'full'}, // pathMatch property tell the routcher how to match the URL segments
  //if we use prefix parm, it will match the prefix; if we use full parm, it only works when the full url is empty
  {path: 'departments',component: DepartmentListComponent},
  {path: 'departments/:id',
   component: DepartmentDetailComponent,
   children:[{path: 'overview',component: DepartmentOverviewComponent},{path: 'contact', component:DepartmentContactComponent}]
  }, // id is a place holder
  {path: 'employees', component: EmployeeListComponent},
  {path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  DepartmentListComponent, 
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailComponent,
  DepartmentOverviewComponent,
  DepartmentContactComponent
]
