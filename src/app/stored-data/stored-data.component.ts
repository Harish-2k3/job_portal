import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { AuthService } from '../shared/auth.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-stored-data',
  templateUrl: './stored-data.component.html',
  styleUrls: ['./stored-data.component.css']
})
export class StoredDataComponent implements OnInit {
  studentsList :Student[] = [];
  

  constructor(private auth: AuthService,private data :DataService) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
  getAllStudents() {
    this.data.getAllStudents().subscribe(res=>{
      this.studentsList = res.map((e:any)=>{
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    },err=>{
      alert('Error while Fetching data');
    })
  }

  deleteStudent(student : Student){
    if(window.confirm('Are you Sure you Want to delete'+ student.name +''+student.email+' ?')){
      this.data.deleteStudent(student);
    }
  }

}
