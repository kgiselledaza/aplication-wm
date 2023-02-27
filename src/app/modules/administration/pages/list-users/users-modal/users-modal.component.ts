import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseModalComponent } from '@core/components/basemodal.component';
import { User } from '@modules/administration/models/user.model';
import { UsersService } from '@modules/administration/services/users.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.scss'],
})
export class UsersModalComponent
  extends BaseModalComponent<User>
  implements OnInit
{
  optionsList: any = {
    gender: [],
    typeCompany: []
  };

  constructor(readonly userService: UsersService) {
    super(userService);
  }
  ngOnInit(): void {
    this.initGeneralService();
  }

  initGeneralService(){
    forkJoin({
      gender: this.userService.getMethodExterno('General', 'ObtenerGenero'),
      typeCompany: this.userService.getMethodExterno('General', 'ObtenerTipoCompania')
    }
    ).subscribe((data: any) => {
      data?.gender.map((option:any) => {
        this.optionsList.gender.push({label:option, value:option})
      });

      data?.typeCompany.map((option:any) => {
        this.optionsList.typeCompany.push({label:option, value:option})
      });
    })
  }

  getCompany(typeCompany: any){
    console.log(typeCompany);
    this.userService.getMethodExterno('General', 'ObtenerCompaniaListado?TipoCompania='+typeCompany).subscribe(data => {
      console.log(data);
    })
  }
}
