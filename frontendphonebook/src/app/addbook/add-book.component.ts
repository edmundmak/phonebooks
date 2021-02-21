import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PhonebookName } from '../constants';
import { Login, PhoneBook } from '../interface/phonebook';
import { PhoneBookService } from '../services/phonebook.service';
import { ValidatorsService } from '../services/validation.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  public submitting = false;
  public formPhoneBook: FormGroup;
  public phonebook: PhoneBook;
  submitAttempt = false;
   loading = false;
  error: string;
  errorMessage:string;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validationService: ValidatorsService,
    private readonly phonebookService: PhoneBookService,
    private readonly router: Router,
    private readonly renderer: Renderer2,
) { }

  ngOnInit(): void {

    debugger;
    const { name,phonenumber } = (this.phonebook) || {
      name:'',
      phonenumber: ''
  };

    this.formPhoneBook = this.formBuilder.group({
      phonenumber: new FormControl(phonenumber, [this.validationService.requiredValidation('You must specify Phone NUmber')]),
      name: new FormControl(name, [this.validationService.requiredValidation('You must specify name')])
  }
     
  );
}

get phonenumber(): AbstractControl {
  return this.formPhoneBook.get('phonenumber');
}

get name(): AbstractControl {
  return this.formPhoneBook.get('name');
}
submit() {
  this.submitAttempt = true;
  if (this.formPhoneBook.valid) {
    const phonebookName=sessionStorage.getItem("selectedphonebookName");
      this.phonebookService.createPhoneBooks({PhoneBookName:phonebookName,Name:this.name.value,PhoneNumber:this.phonenumber.value}).subscribe(    
    data => {    
      debugger;    
      if(data.success)    
      {       
        this.name.setValue('');
        this.phonenumber.setValue('');
      }    
      else{    
        this.errorMessage = data.Message;    
      }    
    },    
    error => {    
      this.errorMessage = error.message;    
    });    
};    
}
}



