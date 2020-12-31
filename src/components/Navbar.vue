<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <router-link class="navbar-brand" to="/"><img style="max-width: 100%" src="../assets/logo.png" alt="logo" /></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/"
            >Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link active-class="active" class="nav-link" to="/addevent">Add Event</router-link>
        </li>
      </ul>
      <div class="loginbox">
        <button class="log1 btn btn-secondary">Sign Up</button>

        <button class="log2 btn btn-success">Login</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>


<style scoped>
#navbarColor01 {
  display: flex;
  justify-content: space-between;
}

.loginbox {
  display: flex;
}
.log1 {
  transition: 300ms ease;
  border: 1px solid #fff;
  border-radius: 0.5rem 0 0 0.5rem;
}
.log1:hover {
  color: #fff;
  border: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0);
}
.log2 {
  transition: 300ms ease;
  border: 1px solid #fff;
  border-radius: 0 0.5rem 0.5rem 0;
}
.log2:hover {
  color: #fff;
  border: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0);
}
</style>
