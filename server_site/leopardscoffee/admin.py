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

class TableDishInline(admin.TabularInline):
    model = TableDish
    extra = 1  
    autocomplete_fields = ['dish']  


@admin.register(Table)
class TableAdmin(admin.ModelAdmin):
    list_display = ('number', 'isActive', 'total_price_display') 
    search_fields = ('number',) 
    list_filter = ('isActive',)  
    inlines = [TableDishInline]  

    def total_price_display(self, obj):
        return f"{obj.total_price()} VND"
    total_price_display.short_description = "Tổng tiền"

admin.site.register(Category, CategoryAdmin)
admin.site.register(Dish, ProductAdmin)
admin.site.register(Role, RoleAdmin)
admin.site.register(User, UserAdmin)