import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@core/components/baselist.component';
import { User } from '@modules/administration/models/user.model';
import { UsersService } from '@modules/administration/services/users.service';
import { ConfirmationService, MenuItem } from 'primeng/api';

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

  constructor(
    readonly userService: UsersService,
    private confirmationService: ConfirmationService
  ) {
    super(userService);
  }

  ngOnInit(): void {
    this.$getListEntity();
    this.initItems();
  }

  initItems() {
    this.items = [
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
        command: () => {
          this.deleteUser();
        },
      },
      {
        label: 'Liberación',
        icon: 'pi pi-lock-open',
        command: () => {
          this.releaseUser();
        },
      },
    ];
  }

  deleteUser() {
    console.log('Entra');
    this.confirmationService.confirm({
      message: 'El registro se eliminará de forma permanente',
      header: 'Eliminación',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      accept: () => {
        //this.onDelete();
      },
    });
  }

  releaseUser() {
    console.log('Entra');
    this.confirmationService.confirm({
      message:
        '¿Está seguro que desea liberar la jornada del usuario jbecerra?',
      header: 'Liberación',
      acceptLabel: 'Aceptar',
      rejectLabel: 'Cancelar',
      accept: () => {
        //Actual logic to perform a confirmation
      },
    });
  }
}
