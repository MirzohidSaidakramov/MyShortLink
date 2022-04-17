import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomValidators } from '../common/custom.validators';
import { HttpService } from '../common/services/http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  formControl = {
    silka: new FormControl('',[
      Validators.required,
      CustomValidators.noSpace,
      CustomValidators.includeHttp
    ]),}
    formGroup = new FormGroup(this.formControl);

    returnErrors(errors:any) {
      if (errors.required) return 'Kiritish majburiy';
      if (errors.nospace) return 'Kiritilgan ma\'lumotda probel bo\'lishi mumkin emas';
      if (errors.includeHttp) return 'Kiritilgan ma\'lumot silka emas';
      return 'Kiritishda xatolik bor';
    }

    controlForm(control:string) {
      return this.formGroup.get(control);
    }

  constructor( private http:HttpService, private router:Router) { }

  ngOnInit(): void {
  }

  save(){
      this.http.generate(this.formGroup.value).subscribe((result:any)=>{
        this.router.navigate(['/link',`${result._id}`]);
      })

  }

}
