<template>
  <div>
    <div class="card border-primary mb-3" style="max-width: 100%">
      <div class="card-header">{{ detail.title }}</div>
      <div class="row">
        <div class="col-4">
          <div class="card-body">
            <img :src="detail.imageUrl" :alt="detail.title" />
          </div>
        </div>
        <div class="col-8 p-3">
            <p class="card-text">{{ detail.description }}</p>
            <p class="card-text">{{ detail.eventDate }}</p>
            <div class="button-box d-flex justify-content-center align-items-center">
                <button class="btn btn-primary"> Add your schedule </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["detail"],
};
</script>

<style scoped>
img {
  border: 1px solid #1a1a1a;
  width: 350px;
  height: auto;
}
.card-header {
  text-align: center;
  font-size: 1.5rem;
}
</style>