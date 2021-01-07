import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { CreatePhoneBook, GetPhoneBooks } from '../store/actions/phonebook.actions';
import { selectPhoneBookList } from '../store/selectors/phonebook.selectors';
import { IAppState } from '../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-createentry',
  templateUrl: './createentry.component.html',
  styleUrls: ['./createentry.component.scss']
})
export class CreateentryComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private _store: Store<IAppState>, private _router: Router
   
  ) { }

 

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required]
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.form.controls; }


  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }
    
    this.loading = true;
    this._store.dispatch(new CreatePhoneBook([{name:this.form.value.name,phoneNumber:
      this.form.value.phoneNumber,success:false,message:""}]));
}

}
