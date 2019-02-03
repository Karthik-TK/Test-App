import { Component, OnInit } from '@angular/core';
import { Log } from '../log';

@Component({
  selector: 'app-log-details',
  templateUrl: './log-details.component.html',
  styleUrls: ['./log-details.component.css']
})
export class LogDetailsComponent implements OnInit {
  clickMessage = '';

  Location = ['Bengaluru', 'Mysuru',
            'Chennai', 'Delhi'];

  model = new Log('', this.Location[0],'',);

  submitted = false;
  
  name: string;
  mobile: number;

  onClickMe() {
    this.clickMessage = 'Thank You for your Response!!!';
    this.submitted = true;
    console.log("Here is your submitted form details:",
    this.model.name, 
    this.model.mobile, 
    this.model.email, 
    this.model.Location );
  }
  constructor() {

   }

  ngOnInit() {
  }

}
