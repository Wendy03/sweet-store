<template>
  <div class="bg-light p-4 my-3">
    <div v-if="!cartList.carts.length">購物車沒有任何品項</div>
    <table v-else class="table align-middle">
      <tbody>
        <tr v-for="item in cartList.carts" :key="item.id">
          <td width="100">
            <a
              href="#"
              class="text-dark"
              @click.prevent="removeCartItem(item.id)"
              ><i class="fas fa-times"></i
            ></a>
          </td>
          <td width="100">
            <img :src="item.product.imageUrl" class="table-image" alt="" />
          </td>
          <td>{{ item.product.title }}</td>
          <td width="200">
            <select
              name=""
              id=""
              class="form-select"
              :value="item.qty"
              @change="(evt) => setCartQty(item.id, evt)"
            >
              <option :value="i" v-for="i in 20" :key="i">{{ i }}</option>
            </select>
          </td>
          <td width="200" class="text-end">$ {{ item.subtotal }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-end">總金額 NT$ {{ cartList.total }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import cartStore from "../stores/CartStore.js";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(cartStore, ["cartList"]),
  },
  methods: {
    ...mapActions(cartStore, ["removeCartItem", "setCartQty"]),
  },
};
</script>
