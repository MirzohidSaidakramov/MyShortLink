import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomValidators } from '../common/custom.validators';
import { HttpService } from '../common/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formControl = {
    login: new FormControl('',[
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
      CustomValidators.noSpace
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(15),
      CustomValidators.noSpace
    ])
  }
  formGroup = new FormGroup(this.formControl);
  constructor(private http:HttpService, private router:Router, private matSnackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  returnErrors(errors:any) {
    if (errors.maxlength) return 'Maxsimum kiritish kerak bo\'lgan belgilar:'+ errors.maxlength.requiredLength + '.Sizda:' +errors.maxlength.actualLength;
    if (errors.minlength) return 'Minimum kiritish kerak bo\'lgan belgilar:'+ errors.minlength.requiredLength + '.Sizda:' +errors.minlength.actualLength;
    if (errors.required) return 'Kiritish majburiy';
    if (errors.nospace) return 'Kiritilgan ma\'lumotda probel bo\'lishi mumkin emas';
   
   

    return 'Kiritishda xatolik bor';
  }
  controlForm(control:string) {
    return this.formGroup.get(control);
  }
  signIn(){
    this.http.signIn(this.formGroup.value).subscribe((result:any)=>{
      if (result.isValid) {
        this.router.navigate(['/']);
        this.matSnackBar.open('Muvaffaqiyatli saytga kirdingiz!','',{
          duration:5000
        });
        localStorage.setItem('token', result.token)
     

      }else{
        this.matSnackBar.open('Login yoki Parol xato!','',{
          duration:5000
        });
        

      }
    })

    
  }

}
