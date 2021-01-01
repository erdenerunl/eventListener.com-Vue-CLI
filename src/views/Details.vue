<template>
  <div>
      <product-detail v-for="detail in details" :key="detail.id" :detail="detail" />
  </div>
</template>

<script>
import axios from 'axios'
import ProductDetail from '@/components/ProductDetail.vue';
export default {
    components : {
        ProductDetail
    },
    data(){
        return {
            details : []
        }
    },
    created(){
        axios.get(`http://localhost:3000/upcomings?id=${this.eventId}`)
        .then(response => {
            this.details = response.data
        }).catch(e => console.log(e))
    },
    computed : {
        eventId(){
            return this.$route.params.id;
        }
    }
}
</script>

<style>

</style>