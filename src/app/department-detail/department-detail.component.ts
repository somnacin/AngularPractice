import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3> 
      you selected {{departmentId}}
    </h3>
    <p>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
    </p>
    <router-outlet> </router-outlet><!-- users are able to navigate from the url--> 
    <p>  
    <button (click)="goPrevious()">Previous  </button>
    <button (click)="goNext()">  Next</button>
    </p>
    <div> 
      <button (click)="gotoDepartments()">Back</button> 
    </div>
  `,
  styles: [
  ]
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  public departmentId;
  ngOnInit() {
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious()
  {
    let previousId = this.departmentId - 1; // get the previous ID
    this.router.navigate(['/departments', previousId]);
  }

  goNext()
  {
    let nextId = this.departmentId + 1; // get the previous ID
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments()
  {
    let selectedId = this.departmentId ? this.departmentId : null;
    //this.router.navigate(['/departments',{id:selectedId, text:'testVal'}]);
    this.router.navigate(['../',{id: selectedId}], {relativeTo: this.route}); //../ go back to the previous segment

  }

  showOverview()
  {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact()
  {
    this.router.navigate(['contact'],{relativeTo: this.route});
  }
}
