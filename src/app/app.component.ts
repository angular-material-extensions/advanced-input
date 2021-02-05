import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'advanced-input';

  fc = new FormControl();

  fa: FormArray | undefined;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {

    this.fa = this.formBuilder.array([]);
    this.fa.valueChanges.subscribe(fa => console.log('fa', fa));

    this.fc.valueChanges.subscribe(value => console.log('value -> ', value));

    this.fc.patchValue({ value: '2131' });
  }

}
