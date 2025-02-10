from django.db import models
from .helpers import *
from .custom_field import *

class Categories(models.Model):
    name = models.CharField(unique=True, max_length=100)

class Products(models.Model):
    name = models.CharField(unique=True, max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=3)
    isValid = CustomBooleanField()
    image = models.ImageField(upload_to=get_file_path)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)