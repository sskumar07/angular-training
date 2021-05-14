import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control: AbstractControl) {
    const forbidden = /admin/.test(control.value);
    return forbidden ? { 'forbiddenName': { value: control.value } } : null;
}

export function forbiddenNames(name: RegExp) {
    return (control: AbstractControl) => {
        const forbidden = name.test(control.value);
        return forbidden ? { 'forbidden': { value: control.value } } : null;
    };
}