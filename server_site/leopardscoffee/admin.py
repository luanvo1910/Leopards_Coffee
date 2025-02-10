from django.contrib import admin
from .models import *

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price', 'isValid', 'get_category_name')
    list_filter = ['category', 'isValid']
    search_fields = ['name']

    def get_category_name(self, obj):
        return obj.category.name
    get_category_name.admin_order_field = 'category'
    get_category_name.short_description = 'category'

class RoleAdmin(admin.ModelAdmin):
    list_display = ['name']
    search_fields = ['name']

class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'get_role_name')
    list_filter = ['role']
    search_fields = ['name', 'email', 'phone']

    def get_role_name(self, obj):
        return obj.role.name
    get_role_name.admin_order_field = 'role'
    get_role_name.short_description = 'Role'

admin.site.register(Categories, CategoryAdmin)
admin.site.register(Products, ProductAdmin)
admin.site.register(Roles, RoleAdmin)
admin.site.register(Users, UserAdmin)