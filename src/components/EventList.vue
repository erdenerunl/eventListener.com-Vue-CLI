<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card mb-3">
      <h3 class="card-header">{{ event.title }}</h3>
      <img :src="event.imageUrl" class="d-block" max-width="100%" height="300" />
      <div class="card-body desc">
        <p class="card-text">{{ event.description }}</p>
      </div>
      <div class="card-body">
        <a href="#" class="card-link">click for more...</a>
      </div>
      <div class="card-footer text-muted">{{ event.eventDate }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["event"],
};
</script>

<style scoped>
.desc {
  width: 100%;
  max-height: 80px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>