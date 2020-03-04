import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms'
import { MatchPassword } from '../match-password';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private matchPassword: MatchPassword) { }

  signupForm = new  FormGroup({
    name: new FormControl('',[
      Validators.required
    ]),
    username: new FormControl('',[
      Validators.required
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    
    favQuote: new FormControl('', [
      Validators.required,
      Validators.maxLength(25),
      Validators.minLength(10)
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  }, { validators: this.matchPassword.validate})

  ngOnInit() {
  }

  onSubmit(event) {
    event.preventDefault()
    console.log('value', this.signupForm.value)
  }

  onReset() {
  
  }

  
}
