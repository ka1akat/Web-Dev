from django.urls import path
from .views import product_list, product_detail, category_list, customer_list,order_list, order_detail,category_products, customer_order

urlpatterns = [
    path('products/', product_list),
    path('products/<int:id>/', product_detail),
    path('categories/', category_list),
    path('customers/', customer_list),
    path('orders/', order_list),
    path('orders/<int:id>/', order_detail),
    path('categories/<int:id>/products/', category_products),
    path('customers/<int:id>/orders/', customer_order),
]