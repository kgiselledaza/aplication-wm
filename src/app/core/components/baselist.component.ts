import { BaseExtendedService } from '@core/services/base-extended.service';

export abstract class BaseListComponent<T> {
  listEntity: T[] = [];
  displayFormUser: boolean = false;
  displayFormPassword: boolean = false;
  displayFormCompany: boolean = false;

  $getListEntity: () => void;

  constructor(readonly baseService: BaseExtendedService<T>) {
    this.$getListEntity = () => {
      this.baseService.obtener().subscribe((res: any) => {
        this.listEntity = res;
      });
    };
  }

  private updatelistEntity(): void {
    if (this.$getListEntity) {
      this.$getListEntity();
    }
  }

  onDelete<TValue>(idEntity: TValue): void {
    this.baseService.eliminar(idEntity).subscribe(() => {
      this.updatelistEntity();
    });
  }

  openModal(type: string) {
    if (type === 'user') {
      this.displayFormUser = true;
    } else if (type === 'company') {
      this.displayFormCompany = true;
    } else {
      this.displayFormPassword = true;
    }
  }
}
