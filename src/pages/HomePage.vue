<template><!-- TODO use a v-for -->
  <div v-for="gift in gift">
    <GiftCard :gift="gift" />
  </div>
</template>

<script>

import { computed, onMounted } from 'vue';
import GiftCard from '../components/GiftCard.vue';
import { giftsService } from '../services/GiftsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      }
      catch (error) {
        Pop.error(error.message);
        logger.error(error);
      }
    }
    onMounted(() => {
      logger.log("Yo dude its the Home Page");
      getGifts();
    });
    return {
      gifts: computed(() => AppState.gifts)
    };
  },
  components: { GiftCard }
}

</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
