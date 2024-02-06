import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private apiservice: ApiServiceService) { }
  myForm!: FormGroup;
  successmsg!: string;
  errormsg!: string;
 


  ngOnInit(): void {
    this.initForm();

  }

  initForm(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      number: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      repassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.myForm.value) {
      console.log(this.myForm.value);
    }
       this.apiservice.createNewUser(this.myForm.value).subscribe(
      (res: { message: string }) => {
        console.log(res, 'data submitted');
        this.myForm.reset();
        this.successmsg = res.message;
        console.log(this.myForm.value);

      }
    );

  }
    Ro() {
      // console.log('hello');
    this.router.navigate(['login'])
  }

}


