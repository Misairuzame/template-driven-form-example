import { Component, OnInit } from '@angular/core';
import { Studente } from '../studente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  years: string[];
  submitted: boolean;
  model: Studente;
  
  constructor() {
    this.submitted = false;
    this.model = new Studente('18496', 'Chiara', 'Bellini', 1992);
    this.years = ['1992', '1993', '1994', '1995', '1996', '1997',
                  '1998', '1999', '2000', '2001', '2002'];
  }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }

  get test() { return JSON.stringify(this.model); }

}
