import os
import uuid
from django.core.validators import RegexValidator

def get_product_image_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('static/images/product/', filename)

def get_user_image_path(instance, filename):
    ext = filename.split('.')[-1]
    filename = "%s.%s" % (uuid.uuid4(), ext)
    return os.path.join('static/images/user/', filename)

phone_regex = RegexValidator(
    regex=r'^\+?1?\d{9,15}$',  
    message="Số điện thoại phải có từ 9 đến 15 chữ số và có thể bắt đầu bằng dấu '+'."
)