import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GetPhoneBooks } from '../store/actions/phonebook.actions';
import { selectPhoneBookList } from '../store/selectors/phonebook.selectors';
import { IAppState } from '../store/state/app.state';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';




@Component({
  selector: 'app-get-phone-book',
  templateUrl: './get-phone-book.component.html',
  styleUrls: ['./get-phone-book.component.scss']
})

export class GetPhoneBookComponent implements OnInit {
  displayedColumns: string[] = ['name', 'phoneNumber'];
  phonebooks$ = this._store.pipe(select(selectPhoneBookList));
  dataSource:any  = [];
  constructor(private _store: Store<IAppState>, private _router: Router) {}

  ngOnInit() {
    this._store.dispatch(new GetPhoneBooks());
    this.phonebooks$.subscribe(response => {
     this.dataSource = new MatTableDataSource(response);;
    });
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
