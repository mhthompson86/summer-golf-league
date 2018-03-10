import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTableModule, MatButtonModule, MatExpansionModule, MatIconModule,
  MatDatepickerModule, MatToolbarModule, MatTabsModule, MatNativeDateModule, MatInputModule, MatCardModule,
  MatSelectModule, MatChipsModule, MatMenuModule, MatAutocompleteModule, MatDialogModule, MatSnackBarModule
} from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatTableModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatExpansionModule,
    MatIconModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatTabsModule, MatCardModule,
    MatSelectModule, MatChipsModule, MatMenuModule, MatAutocompleteModule, MatDialogModule, MatSnackBarModule,
  ],
  declarations: [],
  exports: [
    MatTableModule, MatListModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatExpansionModule,
    MatIconModule, MatDatepickerModule, MatNativeDateModule, MatToolbarModule, MatTabsModule, MatCardModule,
    MatSelectModule, MatChipsModule, MatMenuModule, MatAutocompleteModule, MatDialogModule, MatSnackBarModule,
  ]
})
export class AppMaterialModule { }
