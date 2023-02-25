import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from '@core/components/baselist.component';
import { Company } from '@modules/administration/models/companie.model';
import { CompaniesService } from '@modules/administration/services/companies.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmationService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-list-companies',
  templateUrl: './list-companies.component.html',
  styleUrls: ['./list-companies.component.scss'],
})
export class ListCompaniesComponent
  extends BaseListComponent<Company>
  implements OnInit
{
  items: MenuItem[] = [];

  constructor(
    readonly companiesService: CompaniesService,
    private confirmationService: ConfirmationService
  ) {
    super(companiesService);
  }

  ngOnInit(): void {
    this.$getListEntity();
    this.initItems()
  }

  initItems() {
    this.items = [
      {
        label: 'Editar usuario',
        icon: 'pi pi-pencil',
        command: () => {
          this.openModal('company');
        },
      },

      {
        label: 'Eliminar',
        icon: 'pi pi-trash',
        command: () => {
          this.deleteCompany();
        },
      },
    ];
  }

  deleteCompany() {
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
}
