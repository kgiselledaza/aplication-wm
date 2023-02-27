import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonModule } from 'primeng/button';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministrationComponent } from './administration.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ListCompaniesComponent } from './pages/list-companies/list-companies.component';
import { UsersModalComponent } from './pages/list-users/users-modal/users-modal.component';
import { DialogModule } from 'primeng/dialog';
import { SplitButtonModule } from 'primeng/splitbutton';
import { SharedModule } from '@shared/shared.module';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import { ChangePasswordModalComponent } from './pages/list-users/change-password-modal/change-password-modal.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {PasswordModule} from 'primeng/password';
import { CompanyModalComponent } from './pages/list-companies/company-modal/company-modal.component';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    AdministrationComponent,
    ListUsersComponent,
    ListCompaniesComponent,
    UsersModalComponent,
    ChangePasswordModalComponent,
    CompanyModalComponent,
  ],
  imports: [
    CommonModule,
    AdministrationRoutingModule,
    TableModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    DialogModule,
    SplitButtonModule,
    SharedModule,
    DropdownModule,
    InputSwitchModule,
    ConfirmDialogModule,
    PasswordModule,
    ToastModule
  ],
  providers: [
    ConfirmationService,
    MessageService
  ]
})
export class AdministrationModule {}
