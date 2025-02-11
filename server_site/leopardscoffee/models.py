from django.db import models
from .helpers import *
from .custom_field import *

class Category(models.Model):
    name = models.CharField(unique=True, max_length=100)

    def __str__(self):
        return self.name

class Dish(models.Model):
    name = models.CharField(unique=True, max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=3)
    isValid = CustomBooleanField()
    image = models.ImageField(upload_to=get_product_image_path)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class Role(models.Model):
    name = models.CharField(unique=True, max_length=100)

    def __str__(self):
        return self.name

class User(models.Model):
    name = models.CharField(unique=True, max_length=100)
    email = models.EmailField(unique=True, max_length=255)
    phone = models.CharField(validators=[phone_regex], max_length=15, unique=True)
    image = models.ImageField(upload_to=get_user_image_path)
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True)  # Tránh lỗi nếu role không tồn tại

    def __str__(self):
        return self.name

class Table(models.Model):
    number = models.IntegerField(unique=True)
    isActive = CustomBooleanField()

    def total_price(self):
        """
        Tính tổng tiền của bàn bằng cách nhân số lượng với giá món ăn.
        """
        from django.db.models import Sum, F

        total = self.table_dishes.aggregate(
            total=Sum(F('dish__price') * F('quantity'))
        )['total'] or 0
        return total

    def __str__(self):
        return f"Table {self.number}"

class TableDish(models.Model):
    table = models.ForeignKey(Table, on_delete=models.CASCADE, related_name="table_dishes")
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity}x {self.dish.name} on Table {self.table.number}"
