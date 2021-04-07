<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :goods-item="item">{{ goods }}</goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "@/components/content/goods/GoodsListItem";

export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  /* 让弹性盒元素在必要的时候拆行，根据子元素width不同拆行情况有所不同 */
  justify-content: space-around;
  /* justify-content: 在弹性盒对象的 <div> 元素中的各项周围留有空白
     space-around: 之前、之间、之后都留有空白 */
  padding: 2px;
}
</style>
