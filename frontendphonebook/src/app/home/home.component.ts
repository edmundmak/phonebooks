import { Component, OnInit, Renderer2 } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../interface/phonebook';
import { PhoneBookService } from '../services/phonebook.service';
import { ValidatorsService } from '../services/validation.service';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, MatTable,MatRow} from '@angular/material/table';

import {
 MatTableModule,
  MatHeaderRow, MatHeaderCell, MatHeaderCellDef, MatHeaderRowDef,
   MatRowDef,  MatCell, MatCellDef,
} from '@angular/material/table';
import { PhonebookName } from '../constants';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public submitting = false;
  public formHome: FormGroup;
  submitAttempt = false;
  errorMessage:string;  
  dataSource:any  = [];
  displayedColumns: string[] = ['name', 'phoneNumber'];

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly validationService: ValidatorsService,
    private readonly phoneBookService: PhoneBookService,
    private readonly router: Router,
    private readonly renderer: Renderer2,
) { }

  ngOnInit(): void {
   this.fetchPhoneBooks();
  };

fetchPhoneBooks() {
      this.phoneBookService.getPhoneBooks(PhonebookName).subscribe(    
    data => {    
      debugger;    
      if(data.success)    
      {       
        this.dataSource = new MatTableDataSource(data.getEntryResponses);;
      }    
      else{    
        this.errorMessage = data.Message;    
      }    
    },    
    error => {    
      this.errorMessage = error.message;    
    });  
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

}



