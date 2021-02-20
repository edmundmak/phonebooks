import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../interface/phonebook';
import { LoginService } from '../services/login.service';
import { ValidatorsService } from '../services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public submitting = false;
  public formLogin: FormGroup;
  public login: Login;
  submitAttempt = false;
  errorMessage:string;  
  loading = false;
  error: string;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validationService: ValidatorsService,
    private readonly loginservice: LoginService,
    private readonly router: Router,
    private readonly renderer: Renderer2,
) { }

  ngOnInit(): void {
    const { username,password } = (this.login) || {
      username:'',
      password: ''
  };

    this.formLogin = this.formBuilder.group({
     /*  username: new FormControl(username, [this.validationService.requiredValidation('You must specify Username')]),
      password: new FormControl(password, [this.validationService.requiredValidation('You must specify Password')]), */
      username: ['', Validators.required],
      password: ['', Validators.required]
  }
     
  );
}

get username(): AbstractControl {
  return this.formLogin.get('username');
}

get password(): AbstractControl {
  return this.formLogin.get('password');
}
submit() {
  this.submitAttempt = true;
  this.loading = false;
  if (this.formLogin.valid) {
      this.loginservice.Login({username:this.username.value,password:this.password.value}).subscribe(    
    data => {    
      debugger;    
      if(data.success)    
      {       
        this.router.navigate(['/home']);  
      }    
      else{    
        this.errorMessage = data.Message;    
      }    
    },    
    error => {    
      this.errorMessage = error.message;    
      this.error = error;
      this.loading = false;
    });    
};    
}


}

