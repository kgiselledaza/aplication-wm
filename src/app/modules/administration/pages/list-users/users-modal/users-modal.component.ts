import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseModalComponent } from '@core/components/basemodal.component';
import { User } from '@modules/administration/models/user.model';
import { UsersService } from '@modules/administration/services/users.service';

@Component({
  selector: 'app-users-modal',
  templateUrl: './users-modal.component.html',
  styleUrls: ['./users-modal.component.scss'],
})
export class UsersModalComponent
  extends BaseModalComponent<User>
  implements OnInit
{
  constructor(readonly userService: UsersService) {
    super(userService);
  }
  ngOnInit(): void {}
}
