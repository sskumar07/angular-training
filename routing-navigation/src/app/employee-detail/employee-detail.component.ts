import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employeeId: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.employeeId = this.route.snapshot.paramMap.get('id');
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.employeeId = params.get('id');
    });
  }

}
