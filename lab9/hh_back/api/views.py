from django.http.response import JsonResponse
from django.shortcuts import render
from api.models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe = False, json_dumps_params={'indent':2})

def company_details(request, company_id):
    company = Company.objects.filter(id=company_id).first()
    if company:
        return JsonResponse(company.to_json(), json_dumps_params={'indent':2})
    return JsonResponse({'error': 'Product not found'})

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent':2})

def vacancy_details(request, vacancy_id):
    vacancy = Vacancy.objects.filter(id=vacancy_id).first()
    if vacancy:
        return JsonResponse(vacancy.to_json(), json_dumps_params={'indent':2}) 
    return JsonResponse({'error': 'Category not found'})

def top_ten_vacancies(request):
    top_ten_v = Vacancy.objects.order_by('-salary')[:3]
    vacancies_json = [v.to_json() for v in top_ten_v]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent':2})