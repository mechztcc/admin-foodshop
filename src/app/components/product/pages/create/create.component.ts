import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faPlus, faSave, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { NotifierService } from 'angular-notifier';
import { Category } from 'src/app/components/category/shared/category';
import { CategoryService } from 'src/app/components/category/shared/category.service';
import { Product } from 'src/app/components/category/shared/product';
import { ProductService } from '../../shared/product.service';

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
  public categories: Category[] = [];
  

  constructor(private fb: FormBuilder, private productService: ProductService, private categoryService: CategoryService, private notifierService: NotifierService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.listAll()
    .subscribe((categories: Category[]) => {
      this.categories = categories; 
    })
    this.initForm();
  }


  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.compose([
        Validators.required, Validators.minLength(4)
      ])],
      price: ['', Validators.required],
      img: ['', Validators.required],
      categoryId: ['',]
    })
  }

  onSubmit() {

    let product: Product = this.form.value;
    product.id = null;
    console.log(product);
    
    if (this.form.valid) {
      this.productService.create(product)
        .subscribe({
          next: () => { this.notifierService.notify('success', `Produto ${product.name} criado com sucesso!`) }
        }).add(() => { this.router.navigate(['/produtos'])})
    } else this.notifierService.notify('error', `Não foi possível concluir a operação.`) 
  }

  setCategory(value: string) {
    this.form.controls['categoryId'].setValue(value);
  }
}

