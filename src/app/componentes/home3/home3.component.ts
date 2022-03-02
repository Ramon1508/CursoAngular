import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.scss']
})
export class Home3Component implements OnInit {
  form: FormGroup = new FormGroup({});
  loaded = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loaded = false;
    const data = {
      name: 'Juan',
      lastname: 'Perez'
    };
    this.form = this.fb.group(data);
    this.form.controls.name.addValidators([Validators.required]);
    console.log(this.form);
    this.loaded = true;
  }
  submit() {
    const data = this.form?.value;
    console.log(data);
  }
}
