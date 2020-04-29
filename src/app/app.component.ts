import { Component } from '@angular/core';
import {FormFields} from './models/form-fields';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'FormBuilder';
  receivedValues: any;
  fields: FormFields[] = [
    {type: 'textarea', key: 'testarea', label: 'testarea'},
    {type: 'text', key: 'test', label: 'test'},
    {type: 'text', key: 'defaultTest', value: 'test'},
    {type: 'text', key: 'placeholderTest', placeholder: 'placeholder'},
    {type: 'select', key: 'dropdownTest', value: 'option1', options: [
      {key: 'option1', value: 'test'},
      {key: 'option2', value: 'test2'}
    ]
   }
  ];
  getFormValues(value) {
      this.receivedValues = value;
      console.log(value);
  }
}
