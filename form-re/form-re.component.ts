import { Component, OnInit } from '@angular/core';
import { FormGroup,Validator,FormControl, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-re',
  templateUrl: './form-re.component.html',
  styleUrls: ['./form-re.component.scss']
})
export class FormREComponent implements OnInit {

  formreactive!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.formreactive = new FormGroup({
      nome: new FormControl(null,Validators.required),
      alter: new FormControl(null,Validators.required),
      power: new FormControl(null,Validators.required),
      nemico: new FormControl(null,Validators.required),
      pianeta: new FormControl(null,Validators.required),
      debolezza: new FormControl(null,Validators.required)
    }
    )
  }

  onSubmit(){
    console.log(this.formreactive.value);
    this.formreactive.reset();
  }

}
