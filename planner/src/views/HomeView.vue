<template>

  <div class="home">
    <v-container>
      <section>
        <v-row>
          <v-col col="12">
            <v-img :src="hero_img" max-height="300px"></v-img>
          </v-col>
        </v-row>
      </section>
      <DatePicker class="datepicker"/>
    </v-container>
  </div>

</template>

<script>

import DatePicker from '@/components/DatePicker.vue';

export default {
  data(){
    return{
      hero_img: 'https://static.vueling.com/corporative7/media/1913/herobanner-1440x345.webp'
    }
  },
  components: {
    DatePicker
  },
  metaInfo: {
      title: 'Home',
  },
};
</script>

<style lang="scss">

  .datepicker{
    margin-top:-80px
  }

</style>