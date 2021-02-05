import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

export type PhoneType = 'MOBILE' | 'PRIVATE' | 'BUSINESS' | 'OTHERS';


export interface PhoneNumber {
  type?: PhoneType;
  value: string;
}

@Component({
  selector: 'mat-advanced-input-phones',
  templateUrl: './mat-advanced-input-phones.component.html',
  styleUrls: ['./mat-advanced-input-phones.component.scss']
})
export class MatAdvancedInputPhonesComponent implements OnInit {

  @Input()
  label = 'Phone number';

  @Input()
  disabled: boolean | undefined;

  @Input()
  formArray: FormArray | undefined;

  phoneNumbers: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.phoneNumbers = this.formBuilder.array([]);
  }

  ngOnInit(): void {
  }

  createPhoneNumber(phoneNumber?: PhoneNumber): FormGroup {
    return this.formBuilder.group({
      type: [phoneNumber && phoneNumber.type ? phoneNumber.type : 'MOBILE'],
      value: [phoneNumber && phoneNumber.value ? phoneNumber.value : null]
    });
  }

  addPhoneNumber(phoneNumber?: PhoneNumber): void {
    this.phoneNumbers = this.formArray as FormArray;
    this.phoneNumbers.push(this.createPhoneNumber(phoneNumber));
  }

  removePhoneNumber(index: number): void {
    this.phoneNumbers = this.formArray as FormArray;
    this.phoneNumbers.removeAt(index);
  }

}
