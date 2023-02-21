<template>
  <router-link>
    <img :src="Gift.url" alt="" class="img-fluid rounded">
  </router-link>
  <h3>
    {{ Gift.tag }}
  </h3>
</template>


<script>
import { Gift } from '../models/Gift.js';

export default {

  props: {
    gift: { type: Gift }
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped></style>