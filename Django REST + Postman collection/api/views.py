from django.http import JsonResponse
from rest_framework import viewsets
from .models import Product, Category
from .serializers import CategorySerializer, ProductSerializer
from rest_framework.decorators import action
from rest_framework.response import Response


def products_list(request):
    products = Product.objects.all()
    data = []

    for product in products:
        data.append(
            {
                "id": product.id,
                "name": product.name,
                "price": product.price,
                "description": product.description,
                "count": product.count,
                "is_active": product.is_active,
                "category": product.category.id,
            }
        )

    return JsonResponse(data, safe=False)


def product_detail(request, id):
    product = Product.objects.get(id=id)

    data = {
        "id": product.id,
        "name": product.name,
        "price": product.price,
        "description": product.description,
        "count": product.count,
        "is_active": product.is_active,
        "category": product.category.id,
    }

    return JsonResponse(data)


def categories_list(request):
    categories = Category.objects.all()
    data = []

    for category in categories:
        data.append({"id": category.id, "name": category.name})

    return JsonResponse(data, safe=False)


def category_detail(request, id):
    category = Category.objects.get(id=id)

    data = {"id": category.id, "name": category.name}

    return JsonResponse(data)


def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = []

    for product in products:
        data.append(
            {
                "id": product.id,
                "name": product.name,
                "price": product.price,
                "description": product.description,
                "count": product.count,
                "is_active": product.is_active,
                "category": product.category.id,
            }
        )

    return JsonResponse(data, safe=False)


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

    @action(detail=True, methods=["get"])
    def products(self, request, pk=None):
        products = Product.objects.filter(category_id=pk)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
