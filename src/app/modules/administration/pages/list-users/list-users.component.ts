import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@core/components/baselist.component';
import { User } from '@modules/administration/models/user.model';
import { UsersService } from '@modules/administration/services/users.service';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent
  extends BaseListComponent<User>
  implements OnInit
{
  items: MenuItem[] = [];
  display: boolean = false;
  selectedUserForAction: any = null;

  constructor(
    readonly userService: UsersService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) {
    super(userService);
  }

  ngOnInit(): void {
    this.$getListEntity();
  }

  public handleActionsClick(user:any) {
    this.selectedUserForAction = user;
  }

  getItems: MenuItem[] = [
      {
        label: 'Editar usuario',
        icon: 'pi pi-pencil',
        command: () => {
          this.openModal('user');
        },
      },
      {
        label: 'Editar contraseña',
        icon: 'pi pi-key',
        command: () => {
          this.openModal('pass');
        },
      },
      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => this.deleteUser()
      },
      {
        label: 'Liberación',
        icon: 'pi pi-lock-open',
        command: () => this.releaseUser()
      },
    ]

  deleteUser() {
    this.confirmationService.confirm({
      message: 'El registro se eliminará de forma permanente',
      header: 'Eliminación',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.onDelete(this.selectedUserForAction.IdUsuario);
        this.messageService.add({severity:'success', summary: 'Eliminación satisfactoria', detail: 'El registro se eliminó satisfactoriamente'});
      },
    });
  }

  releaseUser() {
    this.confirmationService.confirm({
      message:
        '¿Está seguro que desea liberar la jornada del usuario jbecerra?',
      header: 'Liberación',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      accept: () => {
        this.userService.postMethodExterno('Seguridad', 'DesbloquearJornadaUsuario', this.selectedUserForAction.IdUsuario).subscribe({
          next: () => {
            this.messageService.add({severity:'success', summary: 'Usuario desbloqueado', detail: 'La jornada del usuario '+this.selectedUserForAction.Nombre+' ha sido liberada satisfactoriamente'});
          }
        });

      },
    });
  }
}
