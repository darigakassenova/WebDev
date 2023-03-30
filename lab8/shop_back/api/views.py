from django.http.response import JsonResponse
from django.shortcuts import render
from api.models import Product, Category

products = Product.objects.all()
categories = Category.objects.all()

def product_list(request):
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe = False)


def product_details(request, product_id):
    for p in products:
        if p.to_json()["id"] == product_id:
            return JsonResponse(p.to_json())

    return JsonResponse({'error': 'Product not found'})

def category_list(request):
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False)

def category_details(request, category_id):
    for c in categories:
        if c.to_json()["id"] == category_id:
            return JsonResponse(c.to_json())
    return JsonResponse({'error': 'Category not found'})

def category_products(request, category_id):
    for c in categories:
        if c.to_json()['id'] == category_id:
            category = c
            break
    product_list = []
    for p in products:
        if p.to_json()['id'] == category.product_id:
            product_list.append(p.to_json())
    return JsonResponse(product_list, safe=False)