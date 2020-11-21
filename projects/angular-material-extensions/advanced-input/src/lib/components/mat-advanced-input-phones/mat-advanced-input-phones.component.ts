import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

export type PhoneType = 'MOBILE' | 'PRIVATE' | 'BUSINESS' | 'OTHERS';


export interface PhoneNumber {
  type?: PhoneType;
  value: string;
}

@Component({
  selector: 'lib-mat-advanced-input-phones',
  templateUrl: './mat-advanced-input-phones.component.html',
  styleUrls: ['./mat-advanced-input-phones.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MatAdvancedInputPhonesComponent),
      multi: true
    }
  ]
})
export class MatAdvancedInputPhonesComponent implements OnInit, ControlValueAccessor {

  @Input()
  label = 'Phone number';

  @Input()
  disabled: boolean | undefined;

  private _value: PhoneNumber[] = [];


  @Input()
  get value(): PhoneNumber[] {
    return this._value;
  }

  set value(value: PhoneNumber[]) {
    this._value = value;
    this.propagateChange(this.value);
  }

  phoneNumbers: FormArray;

  constructor(private formBuilder: FormBuilder) {
    this.phoneNumbers = this.formBuilder.array([]);
  }

  ngOnInit(): void {
  }

  propagateChange = (_: any) => {
  };

  createPhoneNumber(phoneNumber?: PhoneNumber): FormGroup {
    return this.formBuilder.group({
      type: [phoneNumber && phoneNumber.type ? phoneNumber.type : 'MOBILE'],
      value: [phoneNumber && phoneNumber.value ? phoneNumber.value : null]
    });
  }

  add(phoneNumber: PhoneNumber): void {
    this.value.push(phoneNumber);
    this.propagateChange(this.value);
  }

  remove(value: PhoneNumber): void {
    this.value = this.value.filter((item => item !== value));
    // this.propagateChange(this.value);
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.propagateChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
