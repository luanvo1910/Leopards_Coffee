from rest_framework import serializers
from .models import *
from cloudinary.models import CloudinaryField

class TableSerializer(serializers.ModelSerializer):
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = Table
        fields = ['id', 'number', 'isActive', 'total_price']

    def get_total_price(self, obj):
        return obj.total_price()

class DishSerializer(serializers.ModelSerializer):
    image_url = serializers.CharField(source='image.url', read_only=True)
    class Meta:
        model = Dish
        fields = '__all__'

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BillItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = BillItem
        fields = '__all__'

class BillSerializer(serializers.ModelSerializer):
    bill_items = BillItemSerializer(many=True, read_only=True)

    class Meta:
        model = Bill
        fields = ['id', 'user', 'table', 'total_price', 'status', 'created_at', 'bill_items']

class CartItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CartItem
        fields = '__all__'

class CartSerializer(serializers.ModelSerializer):
    cart_items = CartItemSerializer(many=True, read_only=True)
    total_price = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = ['id', 'user', 'total_price', 'created_at', 'cart_items']

    def get_total_price(self, obj):
        return obj.total_price()

class UserSerializer(serializers.ModelSerializer):
    image = CloudinaryField('profile_picture')

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'phone', 'password', 'image', 'role']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
