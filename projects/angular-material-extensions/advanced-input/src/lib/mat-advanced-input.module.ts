import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAdvancedInputPhonesComponent } from './components/mat-advanced-input-phones/mat-advanced-input-phones.component';


@NgModule({
  declarations: [MatAdvancedInputPhonesComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [MatAdvancedInputPhonesComponent]
})
export class MatAdvancedInputModule {
}
