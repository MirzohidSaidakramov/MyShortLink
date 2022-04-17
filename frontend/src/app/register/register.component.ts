import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomValidators } from '../common/custom.validators';
import { HttpService } from '../common/services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [CustomValidators]
})
export class RegisterComponent implements OnInit {

  controls  = {
    login: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
      CustomValidators.noSpace
    ],[
      this.customValidators.isTakenLogin
    ]),
    email: new FormControl('',[
      Validators.email,
      Validators.required,
      CustomValidators.noSpace
    ],[
      this.customValidators.isTakenEmail
    ]),
    password: new FormControl('',[
      Validators.maxLength(15),
      Validators.minLength(8),
      Validators.required,
      CustomValidators.noSpace

    ])
  
  }
  formGroup  = new FormGroup(this.controls)

  constructor( private matSnackBar:MatSnackBar, private httpSvc :HttpService, private customValidators:CustomValidators,private router:Router ) { }

  ngOnInit(): void {
  }
  
  returnErrors(errors:any):string {
   
    if (errors.maxlength) return 'Maxsimum kiritish kerak bo\'lgan belgilar:'+ errors.maxlength.requiredLength + '.Sizda:' +errors.maxlength.actualLength;
    if (errors.minlength) return 'Minimum kiritish kerak bo\'lgan belgilar:'+ errors.minlength.requiredLength + '.Sizda:' +errors.minlength.actualLength;
    if (errors.required) return 'Kiritish majburiy';
    if (errors.email) return 'Kiritilgan ma\'lumot email emas';
    if (errors.nospace) return 'Kiritilgan ma\'lumotda probel bo\'lishi mumkin emas';
    if (errors.istakenlogin) return 'Bu login tarmoqda mavjud';
    if (errors.istakenemail) return 'Bu email tarmoqda mavjud';
   

    return 'Kiritishda xatolik bor';
  }
  register(){
   this.httpSvc.register(this.formGroup.value)
   .subscribe((result:any)=>{
     
     
    if(result.isRegistered){

      this.matSnackBar.open('Ro\'yxatdan muvaffaqiyatli o\'tdingiz!','',{
        duration: 5000
      } )
      localStorage.setItem('token', result.token)

     this.router.navigate(['/me']);
    }else {
      this.formGroup.setErrors({
        isvalid:true
      })
      this.matSnackBar.open('Ro\'yxatdan o\'tishda xatolik','',{
        duration: 5000
      } )
    }
   });
   

  }
  controlForm(controlName:string, ) {
    return this.formGroup.get(controlName);
  }


}
