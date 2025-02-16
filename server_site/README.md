## superuser: 
- `admin` 123456 

## commands:
-   python manage.py runserver
-   python manage.py migrate
-   python manage.py makemigrations leopardscoffee

## API: http://127.0.0.1:8000
-   **Dish API**
- `Thêm món` POST /api/dishes/
- `Lấy danh sách món` GET /api/dishes/
- `Lấy món theo ID` GET /api/dishes/{id}/
- `Cập nhật món` PUT /api/dishes/{id}/
- `Xóa món` DELETE /api/dishes/{id}/
-   **User API**
- `Lấy danh sách người dùng` GET /api/users/
- `Lấy người dùng theo ID` GET /api/users/{id}/
- `Cập nhật người dùng` PUT /api/users/{id}/
- `Xóa người dùng` DELETE /api/users/{id}/
- `Đăng nhập` POST /api/users/login/
- `Đăng kí` POST /api/users/register/
-   **Category API**
- `Thêm danh mục` POST /api/categories/
- `Lấy danh sách danh mục` GET /api/categories/
- `Lấy danh mục theo ID` GET /api/categories/{id}/
- `Cập nhật danh mục` PUT /api/categories/{id}/
- `Xóa danh mục` DELETE /api/categories/{id}/
-   **Table API**
- `Thêm bàn` POST /api/tables/
- `Lấy danh sách bàn` GET /api/tables/
- `Lấy bàn theo ID` GET /api/tables/{id}/
- `Cập nhật bàn` PUT /api/tables/{id}/
- `Xóa bàn` DELETE /api/tables/{id}/
- `Thêm món vào bàn` POST /api/tabledishes/
- `Danh sách các món trong bàn` GET /api/tables/{id}/dishes/
- `Checkout từ bàn` POST /api/tables/{id}/checkout/
-   **Bill API**
- `Thêm hóa đơn` POST /api/bills/
- `Lấy danh sách hóa đơn` GET /api/bills/
- `Chi tiết hóa đơn` GET /api/bills/{id}/
- `Thanh toán hóa đơn` POST /api/bills/{id}/pay/
-    **Cart API**
- `Lấy giỏ hàng của user` GET /api/carts/{id}/
- `Thêm món vào giỏ` POST /api/cartitems/
- `Danh sách các món trong giỏ` GET /api/carts/{id}/items/
- `Thanh toán giỏ hàng` POST /api/carts/{id}/checkout/