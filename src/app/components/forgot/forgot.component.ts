import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  email:string='';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  forgotpassword(){
    this.auth.forgotpassword(this.email);
    this.email='';
  }

}
