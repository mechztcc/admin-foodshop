import { Component, OnInit } from '@angular/core';


import { faPlus, faSave, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  faPlus = faPlus;
  faSave = faSave;
  faChevronLeft = faChevronLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
