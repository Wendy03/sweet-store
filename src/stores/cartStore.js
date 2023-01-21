// const { defineStore } = Pinia;
import { defineStore } from "pinia";
import productsStore from "./productsStore.js";

export default defineStore("cart", {
  state: () => ({
    cart: [],
  }),
  actions: {
    addToCart(productId, qty = 1) {
      //取得已經有加入購物車的項目
      //進行判斷，如果購物車有該項目則 +1，如果沒有則西曾一個故務車項目
      const currentCart = this.cart.find(
        (item) => item.productId === productId
      );

      if (currentCart) {
        currentCart.qty += qty;
      } else {
        this.cart.push({
          id: new Date().getTime(),
          productId,
          qty,
        });
      }

      console.log(this.cart);
    },
    setCartQty(id, event) {
      const currentCart = this.cart.find((item) => item.id === id);
      currentCart.qty = event.target.value * 1;
    },
    removeCartItem(id) {
      const index = this.cart.findIndex((item) => item.id === id);
      this.cart.splice(index, 1);
    },
  },
  getters: {
    cartList: ({ cart }) => {
      //購物車的品項資訊，需要整合產品資訊
      //必須計算小計的金額
      //必須提供總金額
      const { products } = productsStore(); //取用另一 store 直接執行
      const carts = cart.map((item) => {
        //單一產品取出
        const product = products.find(
          (product) => product.id === item.productId
        );
        return {
          ...item,
          product,
          subtotal: product.price * item.qty,
        };
      });
      const total = carts.reduce((a, b) => a + b.subtotal, 0);
      return {
        carts,
        total,
      };
    },
  },
});
