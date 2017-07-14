import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { mydbService} from '../service/dbService';

@Component({
  selector: 'app-profile',
  template: `
 <ul *ngIf='student'>
    <li>{{student.name}}</li>
        <li>{{student.StudId}}</li>
            <li>{{student.email}}</li>
    </ul>
       `,
  styles: []
})
export class ProfileComponent implements OnInit {
    id;
    student;
  constructor(private route:ActivatedRoute,private service:mydbService) { 
     route.params.subscribe(params => {this.id = params['id']} );
  }
     

 ngOnInit() {
   this.student = this.service.getStudent(this.id);
  }

}
