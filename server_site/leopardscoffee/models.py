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
    role = models.ForeignKey(Role, on_delete=models.SET_NULL, null=True, blank=True) 

    def __str__(self):
        return self.name

class Table(models.Model):
    number = models.IntegerField(unique=True)
    isActive = CustomBooleanField()

    def total_price(self):
        """
        Total price
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

class Bill(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Đang xử lý'),
        ('paid', 'Đã thanh toán'),
        ('cancelled', 'Đã hủy'),
    ]

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True)  # User if takeaway
    table = models.ForeignKey(Table, on_delete=models.SET_NULL, null=True, blank=True)  # Table
    total_price = models.DecimalField(max_digits=10, decimal_places=3, default=0)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def calculate_total_price(self):
        """Total price"""
        self.total_price = self.bill_items.aggregate(
            total=models.Sum(models.F('dish__price') * models.F('quantity'))
        )['total'] or 0
        self.save()

    def __str__(self):
        return f"Bill #{self.id} - {self.status} - {self.total_price} VND"


class BillItem(models.Model):
    bill = models.ForeignKey(Bill, on_delete=models.CASCADE, related_name="bill_items")
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity}x {self.dish.name} in {self.bill.id}"

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="carts")
    created_at = models.DateTimeField(auto_now_add=True)

    def total_price(self):
        """Total price"""
        from django.db.models import Sum, F
        total = self.cart_items.aggregate(
            total=Sum(F('dish__price') * F('quantity'))
        )['total'] or 0
        return total

    def __str__(self):
        return f"{self.user.name}'s cart - {self.total_price()} VND"

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name="cart_items")
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.quantity}x {self.dish.name} in {self.cart.id}"