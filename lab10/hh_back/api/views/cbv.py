from django.shortcuts import Http404

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

class CompanyListAPIView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompanyDetailAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(id=company_id)
        except Company.DoesNotExist as e:
            raise Http404
    def get(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(company)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def put(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanySerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, company_id):
        company = self.get_object(company_id)
        company.delete()
        return Response({'delete':True})

class VacancyListAPIView(APIView):
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VacancyDetailAPIView(APIView):
    def get_object(self, vacancy_id):
        try:
            return Vacancy.objects.get(id=vacancy_id)
        except Vacancy.DoesNotExist as e:
            raise Http404
    def get(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data, status=status.HTTP_200_OK)
    def put(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        serializer = VacancySerializer(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, vacancy_id):
        vacancy = self.get_object(vacancy_id)
        vacancy.delete()
        return Response({'delete':True}, status=status.HTTP_200_OK)

class CompanyVacanciesAPIView(APIView):
    def get_object(self, company_id):
        try:
            return Company.objects.get(id=company_id)
        except Company.DoesNotExist as e:
            raise Http404

    def get(self, request, company_id):
        company = self.get_object(company_id)
        vacancies = company.vacancies.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)