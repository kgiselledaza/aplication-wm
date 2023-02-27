import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseModalComponent } from '@core/components/basemodal.component';
import { User } from '@modules/administration/models/user.model';
import { UsersService } from '@modules/administration/services/users.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss'],
})
export class ChangePasswordModalComponent
  extends BaseModalComponent<User>
  implements OnInit
{
  constructor(
    readonly userService: UsersService,
    private messageService: MessageService
  ) {
    super(userService);
  }
  ngOnInit(): void {}

  changePassword(form: NgForm) {
    this.userService.postMethodExterno('Seguridad', 'CambiarContrasenaAdministrador', form.value)
      .subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Edición satisfactoria',
            detail: 'La contraseña se ha modificado satisfactoriamente',
          });
        },
      });
  }
}
