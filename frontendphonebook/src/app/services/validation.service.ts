import { Injectable } from '@angular/core';
import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import PhoneNumber from 'awesome-phonenumber';
import { validate as validateEmail } from 'email-validator';
import { takeWhileAlive } from 'take-while-alive';

@Injectable({ providedIn: 'root' })
export class ValidatorsService {
    constructor() {}

  

    companyRegNoValidation(errorMessage: string) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const regNo = control.value || '';
            const valid = new RegExp('[0-9]{4}/?[0-9]{6}/?[0-9]{2}', 'i').test(regNo);
            return valid ? null : { regNo: { value: regNo, message: errorMessage } };
        };
    }

    phoneNumberValidation(errorMessage: string, isRequired = true) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const phone = control.value || '';
            if (phone === '' && !isRequired) {
                return null;
            }

            const pn = new PhoneNumber(phone, 'ZA');
            const valid = pn.isValid();
            return valid ? null : { phoneNumber: { value: phone, message: errorMessage } };
        };
    }

    isValidEmail(email: string): boolean {
        return validateEmail(email);
    }

    emailValidation(errorMessage: string, optional = false) {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const email = control.value || '';
            if (!email && optional) {
                return null;
            }
            const valid = this.isValidEmail(email);
            return valid ? null : { email: { value: email, message: errorMessage } };
        };
    }


    requiredValidation(errorMessage: string, autoInvalid = false, optional = false): ValidatorFn {
        return this.requiredValidationOrZero(errorMessage, autoInvalid, false, optional);
    }

    regexValidation(regex: RegExp, errorMessage: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const value = control.value || '';
            const valid = regex.test(value);
            return valid ? null : { regex: { value, message: errorMessage } };
        };
    }

    requiredValidationWithZero(errorMessage: string, autoInvalid = false): ValidatorFn {
        return this.requiredValidationOrZero(errorMessage, autoInvalid, true);
    }

    private requiredValidationOrZero(errorMessage: string, autoInvalid = false, orZero = false, optional = false): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const val = { required: { value: control.value, message: errorMessage } };
            if (autoInvalid) {
                return val;
            }

            let invalid = true;

            if (optional) {
                return null;
            }

            if (control.value === false) {
                return null;
            }

            if (orZero && (control.value === '0' || control.value === 0)) {
                return null;
            }

            if (control.value) {
                invalid = false;

                if (typeof control.value === 'object') {
                    invalid = control.value[0] === '';
                }
            }

            return invalid ? val : null;
        };
    }
}
