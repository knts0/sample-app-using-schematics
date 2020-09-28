import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { <%= classify(name) %>Service } from './<%= dasherize(name) %>.service'

@Component({
  selector: '<%= dasherize(name) %>',
  templateUrl: './<%= dasherize(name) %>.component.html',
  styleUrls: ['./<%= dasherize(name) %>.component.scss']
})
export class <%= classify(name) %>Component implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private <%= camelize(name) %>Service: <%= classify(name) %>Service,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      // please implement
    })
  }

  onSubmit(): void {
    this.<%= name %>Service.create(this.form.value)
  }

}
