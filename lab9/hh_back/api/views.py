from django.http.response import JsonResponse
from django.shortcuts import render
from api.models import Company, Vacancy

companies = Company.objects.all()
vacancies = Vacancy.objects.all()

def company_list(request):
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe = False)

def company_details(request, company_id):
    for c in companies:
        if c.to_json()["id"] == company_id:
            return JsonResponse(c.to_json())
    return JsonResponse({'error': 'Company not found'})

def vacancy_list(request):
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_details(request, vacancy_id):
    for v in vacancies:
        if v.to_json()["id"] == vacancy_id:
            return JsonResponse(v.to_json())
    return JsonResponse({'error': 'Vacancy not found'})

def top_ten_vacancies(request):
    top_ten_v = vacancies.order_by('-salary')[:3]
    vacancies_json = [v.to_json() for v in top_ten_v]
    return JsonResponse(vacancies_json, safe=False)