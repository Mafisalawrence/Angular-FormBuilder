import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormFields } from 'src/app/models/form-fields';
import { EventEmitter } from '@angular/core';
import { format } from 'url';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.sass']
})
export class FormBuilderComponent implements OnInit {

  form: FormGroup;
  @Input() formFields: FormFields[];
  @Output() emitFormValues = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.buildFormGroup(this.formFields);
  }
  buildFormGroup(formFields: FormFields[]) {
    const group: any = {};
    formFields.forEach(field => {
      group[field.key] = new FormControl(field.value || '');
    });
    this.form = new FormGroup(group);
  }
  onSubmit(value) {
    this.emitFormValues.emit(value);
  }
}
