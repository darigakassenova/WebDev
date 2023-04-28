import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Company, Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  BASE_URL = 'http://127.0.0.1:8000'
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.client.get<Company[]>(
      `${this.BASE_URL}/api/companies/`
    )
  }

  getVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/`
    )
  }

  getVacanciesOfCompany(company_id: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${company_id}/vacancies/`
    )
  }
}
