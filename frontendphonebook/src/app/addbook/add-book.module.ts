import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddBookRoutingModule } from './add-book-routing.module';

import { AddBookComponent } from './add-book.component';

@NgModule({
    declarations: [AddBookComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AddBookRoutingModule
    ],
    exports: [
        AddBookComponent
    ]
})
export class AddBookModule { }


