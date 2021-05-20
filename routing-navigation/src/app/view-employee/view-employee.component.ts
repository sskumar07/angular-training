import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  employeeList = [
    {employeeId: 1, name: 'Satheesh'},
    {employeeId: 2, name: 'Kumar'}
  ];

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  showEmployeeDetail(employeeId: number){
this.router.navigate(['employee-detail', employeeId], {relativeTo: this.route});
  }
}
