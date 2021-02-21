import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../interface/phonebook';
import { LoginService } from '../services/login.service';
import { PhoneBookService } from '../services/phonebook.service';
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
    booksOptions=[];
  loading = false;
  error: string;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validationService: ValidatorsService,
    private readonly loginservice: LoginService,
    private readonly phonebookservice:PhoneBookService,
    private readonly router: Router,
    private readonly renderer: Renderer2,
) { }

  ngOnInit(): void {
    this.getbooks();
    const { username,password } = (this.login) || {
      username:'',
      password: ''
  };

    this.formLogin = this.formBuilder.group({
     /*  username: new FormControl(username, [this.validationService.requiredValidation('You must specify Username')]),
      password: new FormControl(password, [this.validationService.requiredValidation('You must specify Password')]), */
      username: ['', Validators.required],
      password: ['', Validators.required],
      books: ['', Validators.required]
  }
     
  );
}

get username(): AbstractControl {
  return this.formLogin.get('username');
}
get books(): AbstractControl {
  return this.formLogin.get('books');
}

get password(): AbstractControl {
  return this.formLogin.get('password');
}
changeBook(e) {
  debugger
  this.books.setValue(e.target.value, {
    onlySelf: true
  })
}
getbooks()
{
  this.phonebookservice.getBooks().subscribe(    
    data => {    
      debugger;    
      if(data.success)    
      {     
        this.booksOptions = data.books;
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
        sessionStorage.setItem("selectedphonebookName",this.books.value.split(':')[1].replace(/^\s+/g, ''))
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

