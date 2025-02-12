from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.decorators import action
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
