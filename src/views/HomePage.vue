<template>
  <div class="wrapper">
    <div class="banner">
      <div class="row">
        <div class="col-12">
          <h1 class="title">eventListener | Find your events...</h1>
          <h3 class="subtitle">Lorem ipsum dolor sit amet.</h3>
          <div class="button-block">
            <button class="btn btn-secondary">Sign Up to Browse Events</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
  background-image: url("https://cdn.auth0.com/blog/vue-meetup/event-banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
}
.banner {
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title {
    color: #fff;
    font-size: 3rem;
}
.subtitle{
    text-align: center;
    color: #fff;
    font-size: 1.5rem;
}
.button-block{
    margin-top: 2rem;
    text-align: center;
}
button {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: .75rem;
    transition: 300ms ease;
    border: 1px solid #fff;
}
button:hover {
    color: #fff;
    border: 1px solid #fff;
    background-color: rgba(0, 0, 0, 0);
}
</style>