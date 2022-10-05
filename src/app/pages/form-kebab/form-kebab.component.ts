import { Component } from '@angular/core';
import {FormControl, FormGroup, Validator, Validators} from "@angular/forms";
import {Sandwich} from "../../utils/models/sandwich";
import {KebabService} from "../../utils/services/kebab.service";

@Component({
  selector: 'app-form-kebab',
  templateUrl: './form-kebab.component.html',
  styleUrls: ['./form-kebab.component.css']
})
export class FormKebabComponent  {

 /*
 *.value
      - FormGroup ->  retourne un objet
      - FormControl -> retourne du primitif : string, number, boolean...
      - FormArray -> retourne un tableau
  */

  kebab_groupe = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    description: new FormControl<string>('', [Validators.required]),
    image: new FormControl<string>('', [Validators.required]),
    price: new FormControl<number>(0, [Validators.required, Validators.min(1)]),
    is_best_seller: new FormControl<boolean>(false)
  });

  constructor(private kebabService: KebabService) {}

  handleSubmit() {
    if(this.kebab_groupe.valid) {
      const kebab: Sandwich = this.kebab_groupe.value as Sandwich;
      this.kebabService.create(kebab);
      this.kebab_groupe.reset();
    }

  }

  get name() {
    return this.kebab_groupe.controls.name;
  }
  get description() {
    return this.kebab_groupe.controls.description;
  }
  get image() {
    return this.kebab_groupe.controls.image;
  }
  get price() {
    return this.kebab_groupe.controls.price;
  }


}
