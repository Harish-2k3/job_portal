import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore' 
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  //add student
  addStudent(student : Student){
    student.id = this.afs.createId();
    return this.afs.collection('/students').add(student);
  }

   //get all students
   getAllStudents(){
    return this.afs.collection('/students').snapshotChanges();
  }

  //delete students
  deleteStudent(student : Student){
    return this.afs.doc('/students/'+student.id).delete();
  }

  //update Student
  updateStudent(student : Student){
    this.deleteStudent(student);
    this.addStudent(student);
  }

}
