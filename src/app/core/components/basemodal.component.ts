import { NgForm } from '@angular/forms';
import { BaseExtendedService } from '@core/services/base-extended.service';
import { Utility } from '@core/Utilities/utility';

export class BaseModalComponent<T> {
  isUpdate = false;
  isView = false;
  objEntidad!: T;
  objEntidadCopy!: T;

  constructor(
    private baseService: BaseExtendedService<T>,
  ) {}

  initModal(obj: T): void {
    this.objEntidad = Utility.copyObj(obj);
    this.objEntidadCopy = Utility.copyObj(obj);
  }

  onCreate(form: NgForm): void {
    console.log(form);
    
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    this.baseService.crear(form.value).subscribe((res) => {
      console.log(res);
      
    });
  }

  onUpdate(form: NgForm): void {
    if (form.invalid) {
      Object.values(form.controls).forEach((control) => {
        control.markAsTouched();
      });
      return;
    }
    if (this.validateObject()) {
      this.baseService.modificar(this.objEntidad).subscribe((res) => {});
    }
  }

  validateObject(): boolean {
    return !Utility.compareObjects(this.objEntidad, this.objEntidadCopy);
  }
}
