// Danh sách sản phẩm (ví dụ)
const products = [
  { id: 1, name: "Sữa Asumiru", price: 899000, quantity: 1 },
  { id: 2, name: "Tã Pampers", price: 230000, quantity: 1 },
  { id: 3, name: "Bỉm Merries", price: 500000, quantity: 1 },
];

// Hiển thị sản phẩm trong giỏ hàng
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;

  products.forEach((product, index) => {
    const productTotal = product.price * product.quantity;
    total += productTotal;

    const row = `
            <tr>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}đ</td>
                <td>
                    <input type="number" class="quantity-input" min="1" value="${
                      product.quantity
                    }" onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>${productTotal.toLocaleString()}đ</td>
                <td><button class="remove-btn" onclick="removeProduct(${index})">Xóa</button></td>
            </tr>
        `;

    cartItems.insertAdjacentHTML("beforeend", row);
  });

  document.getElementById(
    "cart-total"
  ).textContent = `${total.toLocaleString()}đ`;
}

// Cập nhật số lượng sản phẩm
function updateQuantity(index, quantity) {
  products[index].quantity = parseInt(quantity);
  renderCart();
}

// Xóa sản phẩm khỏi giỏ hàng
function removeProduct(index) {
  products.splice(index, 1);
  renderCart();
}

// Hiển thị giỏ hàng khi trang được tải
document.addEventListener("DOMContentLoaded", renderCart);
