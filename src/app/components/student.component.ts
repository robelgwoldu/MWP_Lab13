import { Component, OnInit } from '@angular/core';
import { mydbService} from '../service/dbService';

@Component({
  selector: 'app-student',
  template: `
 <ul><li *ngFor ="let student of data" ><a  href='/profile/{{student.id}}'>{{student.name}}</a></li><ul>
  `,
  styles: []
})
export class StudentComponent {
data;
  constructor(private dbService:mydbService) {

    this.data =this.dbService.getData();
  }


}
