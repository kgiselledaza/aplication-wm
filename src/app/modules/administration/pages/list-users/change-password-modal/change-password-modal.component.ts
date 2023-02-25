import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '@core/components/basemodal.component';
import { User } from '@modules/administration/models/user.model';
import { UsersService } from '@modules/administration/services/users.service';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.scss'],
})
export class ChangePasswordModalComponent
  extends BaseModalComponent<User>
  implements OnInit
{
  constructor(readonly userService: UsersService) {
    super(userService);
  }
  ngOnInit(): void {}
}
