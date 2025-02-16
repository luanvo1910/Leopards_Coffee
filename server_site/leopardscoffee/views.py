from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.hashers import check_password
from rest_framework.authtoken.models import Token
from .models import *
from .serializers import *

class TableViewSet(viewsets.ModelViewSet):
    queryset = Table.objects.all()
    serializer_class = TableSerializer

    @action(detail=True, methods=['post'])
    def checkout(self, request, pk=None):
        table = self.get_object()

        if not table.table_dishes.exists():
            return Response({'message': 'Không có món ăn trong bàn này!'}, status=status.HTTP_400_BAD_REQUEST)

        bill = Bill.objects.create(table=table, total_price=table.total_price(), status='pending')

        for item in table.table_dishes.all():
            BillItem.objects.create(bill=bill, dish=item.dish, quantity=item.quantity)

        table.table_dishes.all().delete()

        table.isActive = False
        table.save()

        return Response(BillSerializer(bill).data, status=status.HTTP_201_CREATED)
    
class TableDishViewSet(viewsets.ModelViewSet):
    queryset = TableDish.objects.all()
    serializer_class = TableSerializer

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)

        table_id = request.data.get('table')
        if table_id:
            table = Table.objects.get(id=table_id)
            table.isActive = True
            table.save()

        return response

class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    @action(detail=False, methods=['post'])
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if isinstance(user, User):
                try:
                    token, created = Token.objects.get_or_create(user=user)
                    return Response({"message": "Đăng ký thành công!", "token": token.key}, status=status.HTTP_201_CREATED)
                except Exception as e:
                    print(f"Error while creating token: {e}")
                    return Response({"error": "Lỗi khi tạo token!"}, status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({"error": "Lỗi trong việc tạo người dùng, không phải là đối tượng User hợp lệ!"}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'])
    def login(self, request):
        email = request.data.get("email")
        password = request.data.get("password")

        try:
            user = User.objects.get(email=email)
            if user.check_password(password):
                token, _ = Token.objects.get_or_create(user=user)
                return Response({"message": "Đăng nhập thành công!", "token": token.key}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Sai mật khẩu!"}, status=status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({"error": "Email không tồn tại!"}, status=status.HTTP_400_BAD_REQUEST)

class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.all()
    serializer_class = CartSerializer

    @action(detail=True, methods=['post'])
    def checkout(self, request, pk=None):
        cart = self.get_object()
        if not cart.cart_items.exists():
            return Response({'message': 'Giỏ hàng trống!'}, status=status.HTTP_400_BAD_REQUEST)

        bill = Bill.objects.create(user=cart.user, total_price=cart.total_price(), status='pending')
        for item in cart.cart_items.all():
            BillItem.objects.create(bill=bill, dish=item.dish, quantity=item.quantity)

        cart.cart_items.all().delete()
        return Response(BillSerializer(bill).data, status=status.HTTP_201_CREATED)

class BillViewSet(viewsets.ModelViewSet):
    queryset = Bill.objects.all()
    serializer_class = BillSerializer

    @action(detail=True, methods=['post'])
    def pay(self, request, pk=None):
        bill = self.get_object()
        bill.status = 'paid'
        bill.save()
        return Response({'message': 'Hóa đơn đã thanh toán'}, status=status.HTTP_200_OK)
