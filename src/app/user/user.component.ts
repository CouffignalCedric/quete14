import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = new FormControl('');
  email = new FormControl('');
  password  = new FormControl('');
  street = new FormControl('');
  postalCode = new FormControl('');
  city = new FormControl('');
  submit: boolean= false;
  constructor() { }

  ngOnInit() {
  }
changeusername(){
  this.username.setValue('kitten69');
}
onSubmit(){
  this.submit= true;
}
}
