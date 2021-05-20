import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

const routes: Routes = [
    { path: '', redirectTo: 'add-employee', pathMatch: 'full' },
    { path: 'add-employee', component: AddEmployeeComponent },
    {
        path: 'view-employee',
        component: ViewEmployeeComponent,
        children: [
            {path: 'employee-detail/:id', component: EmployeeDetailComponent}
        ]
    },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }