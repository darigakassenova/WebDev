from math import prod
from django.http.response import JsonResponse
from django.shortcuts import render
from api.models import Product, Category

products = Product.objects.all()
categories = Category.objects.all()

def product_list(request):
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe = False, json_dumps_params={'indent':2})


def product_details(request, product_id):
    product = Product.objects.filter(id=product_id).first()
    if product:
        return JsonResponse(product.to_json())
    return JsonResponse({'error': 'Product not found'})

def category_list(request):
    categories_json = [c.to_json() for c in categories]
    return JsonResponse(categories_json, safe=False, json_dumps_params={'indent':2})

def category_details(request, category_id):
    category = Category.objects.filter(id=category_id).first()
    if category:
        return JsonResponse(category.to_json()) 
    # for c in categories:
    #     if c.to_json()["id"] == category_id:
    #         return JsonResponse(c.to_json())
    return JsonResponse({'error': 'Category not found'})

def category_products(request, category_id):
    product_list = []
    for p in products:
        if p.category_id == category_id:
            product_list.append(p.to_json())
    return JsonResponse(product_list, safe=False, json_dumps_params={'indent':2})