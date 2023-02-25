import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '@core/components/basemodal.component';
import { Company } from '@modules/administration/models/companie.model';
import { CompaniesService } from '@modules/administration/services/companies.service';

@Component({
  selector: 'app-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.scss'],
})
export class CompanyModalComponent
  extends BaseModalComponent<Company>
  implements OnInit
{
  constructor(readonly companiesService: CompaniesService) {
    super(companiesService);
  }
  ngOnInit(): void {}
}
