from django.shortcuts import render
from django.http import JsonResponse
from .models import Customer, Category, Product, Order

def product_list(request):
    products = Product.objects.all()
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'category': product.category.id
        })
    return JsonResponse(data, safe=False)

def product_detail(request, id):
    product = Product.objects.get(id=id)
    data = {
        'id': product.id,
        'name': product.name,
        'price': product.price,
        'description': product.description,
        'category': product.category.id
    }
    return JsonResponse(data)

def category_list(request):
    categories = Category.objects.all()
    data = []
    for category in categories:
        data.append({
            'id': category.id,
            'name': category.name,
        })
    return JsonResponse(data, safe=False)

def customer_list(request):
    customers = Customer.objects.all()
    data = []
    for customer in customers:
        data.append({
            'id': customer.id,
            'name': customer.name,
            'email': customer.email,
            'is_active': customer.is_active,
        })
    return JsonResponse(data, safe=False)

def order_list(request):
    orders = Order.objects.all()
    data = []
    for order in orders:
        data.append({
            'id': order.id,
            'customer': order.customer.name,
            'product': order.product.name,
            'quantity': order.quantity,
            'created_at': order.created_at
        })
    return JsonResponse(data, safe=False)

def order_detail(request, id):
    order = Order.objects.get(id=id)
    data = {
        'id': order.id,
        'customer': order.customer.name,
        'product': order.product.name,
        'quantity': order.quantity,
        'created_at': order.created_at
    }
    return JsonResponse(data)

def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = []
    for product in products:
        data.append({
            'id': product.id,
            'name': product.name,
            'price': product.price,
            'description': product.description,
            'category': product.category.id
        })
    return JsonResponse(data, safe=False)

def customer_order(request, id):
    orders = Order.objects.filter(customer_id=id)
    data = []
    for order in orders:
        data.append({
            'id': order.id,
            'customer': order.customer.name,
            'product': order.product.name,
            'quantity': order.quantity,
            'created_at': order.created_at
        })
    return JsonResponse(data, safe=False)



