from django.db import models
from .helpers import *
from .custom_field import *

class Categories(models.Model):
    name = models.CharField(unique=True, max_length=100)
    def __str__(self):
        return self.name

class Products(models.Model):
    name = models.CharField(unique=True, max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=3)
    isValid = CustomBooleanField()
    image = models.ImageField(upload_to=get_product_image_path)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)

class Roles(models.Model):
    name = models.CharField(unique=True, max_length=100)
    def __str__(self):
        return self.name

class Users(models.Model):
    name = models.CharField(unique=True, max_length=100)
    email = models.EmailField(unique=True, max_length=255)
    phone = models.CharField(validators=[phone_regex], max_length=15, unique=True)
    image = models.ImageField(upload_to=get_user_image_path)
    role = models.ForeignKey(Roles, on_delete=models.CASCADE, default=2)