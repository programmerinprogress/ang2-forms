import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'; 

@Component({
    selector: 'contact-form-reactive',
    templateUrl: 'contact-form-reactive.component.html'
})
export class ContactFormReactiveComponent implements OnInit {
    
    formModel: FormGroup;
    
    constructor(fb:FormBuilder) { 
        this.formModel = fb.group({
            'name' : ['',  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])], 
            'email': '', 
            'message': '' 
        }); 
    }

    submitForm(value: any):void {
        console.log('Reactive form data: ');
        console.log(value); 
    }

    ngOnInit() { }
}