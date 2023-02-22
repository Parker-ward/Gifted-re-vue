<template>
  <div class="row">
    <div class="col-md-3">
      <img :src="gift.url" alt="" class=" img-fluid rounded">
    </div>
  </div>
  <h2>
    {{ gift.tag }}
  </h2>
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