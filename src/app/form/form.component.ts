import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  studentsList :Student[] = [];
  studentObj : Student = {
    id: '',
    name: '',
    dob: '',
    email: '',
    sex: '',
    intrest:''
  };

    id : string='';
    name : string='';
    email : string='';
    dob : string='';
    sex : string='';
    intrest : string='';

  constructor(private auth: AuthService,private data :DataService) { }

  file:any;
  getFile(event:any){
    this.file=event.target.files[0];

    console.log('file',this.file);
  }

  ngOnInit(): void {
  }

  register(){
    this.auth.logout();
  }

  resetForm(){
    this.id = '';
    this.name = '';
    this.sex = '';
    this.email = '';
    this.intrest = '';
    this.dob = '';
  }

  addStudent(){
    if(this.name==''||this.dob==''||this.email==''||this.intrest==''||this.sex==''){
      alert('Fill all Input Field');
      return;
    }
    else{
      alert('SucessFully registered');
    }

    this.studentObj.id = '';
    this.studentObj.email = this.email;
    this.studentObj.sex = this.sex;
    this.studentObj.name = this.name;
    this.studentObj.dob = this.dob;
    this.studentObj.intrest = this.intrest;

    this.data.addStudent(this.studentObj);
    this.resetForm();

  }

  updateStudent(){

  }
}
