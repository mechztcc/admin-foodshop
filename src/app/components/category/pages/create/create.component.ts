import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


import { faPlus, faSave, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { NotifierService } from 'angular-notifier';
import { CategoryService } from '../../shared/category.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

  faPlus = faPlus;
  faSave = faSave;
  faChevronLeft = faChevronLeft;


  public form: FormGroup;

  constructor(private titleService: Title, private fb: FormBuilder, private categoryService: CategoryService, private router: Router, private notifierService: NotifierService) { }

  ngOnInit(): void {
    this.initForm();
    this.setTitlePage();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(4)
      ])]
    })
  }


  onSubmit() {
    if (this.form.valid) {
      this.categoryService.create(this.form.value)
        .subscribe({
          next: () => { this.notifierService.notify('success', `Categoria ${this.form.value.name} criada com sucesso!`) }
        }).add(() => { this.router.navigate(['/categorias'])})
    } else this.notifierService.notify('error', `Não foi possível concluir a operação.`) 
  }


  setTitlePage() {
    this.titleService.setTitle('Criando nova categoria')
  }
}
