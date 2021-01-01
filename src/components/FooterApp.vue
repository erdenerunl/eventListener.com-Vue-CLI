<template>
  <footer class="list-group w-100 ">
    <div class="list-group-item list-group-item-action flex-column align-items-start bg-grey">
      <div class="d-flex w-100 justify-content-around mb-3">
        <h4 class="mb-1">Menu</h4>
        <router-link active-class="active" to="/"> Home </router-link>
        <router-link active-class="active" to="/addevent"> Add Event </router-link>
        <router-link active-class="active" to="/about"> About </router-link>
      </div>
      <p class="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.bg-grey {
  background-color: #343a40 !important;
}
h4,p {
  color: #fff;
}
a {
  color : #fff;
  text-decoration: none;
}
</style>