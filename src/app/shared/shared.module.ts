import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbModalModule,
  NgbPaginationModule
} from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbPaginationModule,
    NgbModalModule,
    FormsModule,
    TranslateModule
  ],
  exports: [NgbPaginationModule, NgbModalModule, FormsModule, TranslateModule]
})
export class SharedModule {}
