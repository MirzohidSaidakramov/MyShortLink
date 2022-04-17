
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { HttpService } from "./services/http.service";

@Injectable()

export class CustomValidators {

    isTakenEmail: AsyncValidatorFn = (controls: AbstractControl): Promise<ValidationErrors | null> => {
        return new Promise((resolve, reject) => {
            this.httpSvc.searchEmail(controls.value).subscribe((result) => {
                console.log(result);
                //console.log(controls.value)
                if (result) {
                    resolve({ istakenemail: true })
                } else {
                    resolve(null)
                }
            }
            )
        })
    }
    isTakenLogin: AsyncValidatorFn = (controls: AbstractControl): Promise<ValidationErrors | null> => {
        return new Promise((resolve, reject) => {
            this.httpSvc.searchLogin(controls.value).subscribe((result) => {
                console.log(result);
                //console.log(controls.value)
                if (result) {
                    resolve({ istakenlogin: true })
                } else {
                    resolve(null)
                }
            }
            )
        })
    }




    constructor(private httpSvc: HttpService) {

    }


    static noSpace(controls: AbstractControl): ValidationErrors | null {
        if ((controls.value as string).includes(' '))
            return { nospace: true }
        return null

    }



}