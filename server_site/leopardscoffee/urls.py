from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'tables', TableViewSet)
router.register(r'dishes', DishViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'users', UserViewSet)
router.register(r'carts', CartViewSet)
router.register(r'bills', BillViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
