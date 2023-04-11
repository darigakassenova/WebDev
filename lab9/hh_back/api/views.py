from django.http.response import JsonResponse
from django.shortcuts import render
from api.models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all()
    companies_json = [c.to_json() for c in companies]
    return JsonResponse(companies_json, safe = False, json_dumps_params={'indent':2})

def company_details(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
        return JsonResponse(company.to_json())
    except Company.DoesNotExist as e:
        return JsonResponse({"error":str(e)}, status=400)

def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent':2})

def vacancy_details(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        return JsonResponse(vacancy.to_json())
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"error":str(e)}, status=400)

def top_ten_vacancies(request):
    top_ten_v = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in top_ten_v]
    return JsonResponse(vacancies_json, safe=False, json_dumps_params={'indent':2})

def company_vacancies(request, company_id):
    try: 
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({"error":str(e)}, status=400)
    vacancies = company.vacancies.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)