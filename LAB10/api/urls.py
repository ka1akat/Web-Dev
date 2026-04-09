from django.urls import path
#FROM1 from api.views.fbv import products_list, product_detail
#2from api.views.cbv import ProductListAPIView, ProductDetailAPIView

from api.views import (
    ProductListAPIView,
    ProductDetailAPIView,
    CategoryListAPIView,
    CategoryDetailAPIView,
    CategoryProductsAPIView,
)

urlpatterns = [
    #2 path('products/', products_list),
    #2 path('products/<int:product_id>/', product_detail),
    #3 path('products/', ProductListAPIView.as_view()),
    #3 path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    #4 path('products/', ProductListAPIView.as_view()),
    #4 path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('products/', ProductListAPIView.as_view()),
    path('products/<int:product_id>/', ProductDetailAPIView.as_view()),
    path('categories/', CategoryListAPIView.as_view()),
    path('categories/<int:category_id>/', CategoryDetailAPIView.as_view()),
    path('categories/<int:category_id>/products/', CategoryProductsAPIView.as_view()),

]