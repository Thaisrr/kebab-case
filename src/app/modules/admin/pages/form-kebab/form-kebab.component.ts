import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Sandwich} from "../../../../utils/models/sandwich";
import {KebabService} from "../../../../utils/services/kebab.service";

@Component({
  selector: 'app-form-kebab',
  templateUrl: './form-kebab.component.html',
  styleUrls: ['./form-kebab.component.css']
})
export class FormKebabComponent  {
  file?: File;

  kebab_groupe = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
    is_best_seller: new FormControl<boolean>(false),
    is_visible: new FormControl<boolean>(true),
    quantity: new FormControl<number>(0, [Validators.required, Validators.min(0)]),
   // img: new FormControl<File | null>( null, [Validators.required])
  });

  constructor(private kebabService: KebabService) {}

  handleSubmit() {
    if(this.file) {
      if(this.kebab_groupe.valid) {
        const kebab: Sandwich = this.kebab_groupe.value as Sandwich;
        this.kebabService.create(kebab, this.file).subscribe({
          next: () => this.kebab_groupe.reset(),
          error: (err) => console.log(err)
        });
      }
    }

  }

  changeImg(e: Event) {
    const target = e.target as HTMLInputElement;
    if(target.files && target.files.length > 0) {
      this.file = target.files[0];
      console.log(this.file);
    }
  }

  get name() {
    return this.kebab_groupe.controls.name;
  }
  get description() {
    return this.kebab_groupe.controls.description;
  }
  get price() {
    return this.kebab_groupe.controls.price;
  }


}
