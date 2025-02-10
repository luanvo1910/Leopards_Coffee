from django.contrib import admin
from .models import *

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'isValid', 'category')
    list_filter = ['category', 'isValid']
    search_fields = ['name']

admin.site.register(Categories, CategoryAdmin)
admin.site.register(Products, ProductAdmin)