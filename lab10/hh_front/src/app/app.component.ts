import { Component,OnInit } from '@angular/core';
import { EventsService } from "./events.service";
import { Company, Vacancy } from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hh-front';

  companies: Company[] = []
  vacancies: Vacancy[] = []

  constructor(private eventsService: EventsService) {
  }
  ngOnInit() {
    this.eventsService.getCompanies().subscribe((companies)=>{
      this.companies = companies;
    })
  }
  companyVacancies(company_id: number) {
    this.eventsService.getVacanciesOfCompany(company_id).subscribe((vacancies)=>{
      this.vacancies = vacancies;
    })
  }
}