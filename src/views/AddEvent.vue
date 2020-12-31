<template>
  <div>
    <div class="wrapper">
      <div class="banner">
        <div class="row">
          <div class="col-12">
            <h1 class="title">eventListener | Find your events...</h1>
            <h3 class="subtitle">Send us your events</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="container text-center my-4">
      <h3 class="side-title my-4">Add your events below</h3>
      <p style="max-width: 550px; text-align: center; margin: 0 auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis laborum nostrum hic praesentium, ad, totam facilis perferendis magni quis illo exercitationem provident, aspernatur magnam
        delectus autem odit officiis beatae et!
      </p>
    </div>
    <div class="container-fluid bg-primary">
      <div class="row">
        <div class="col-12">
          <div class="card text-white bg-primary my-4">
            <div class="card-body">
              <form class="m-auto" style="max-width: 75%">
                <fieldset>
                  <div class="form-group">
                    <input type="text" v-model="formData.title" class="form-control" placeholder="Event Name..." id="inputDefault" />
                  </div>
                  <div class="form-group">
                    <input type="text" v-model="formData.eventDate" class="form-control" placeholder="Event Date..." id="inputDefault" />
                  </div>
                  <div class="form-group">
                    <input type="text" v-model="formData.imageUrl" class="form-control" placeholder="Url of Image..." id="inputDefault" />
                  </div>
                  <div class="form-group">
                    <label for="exampleTextarea">Descripe your event</label>
                    <textarea class="form-control" v-model="formData.description" id="exampleTextarea" rows="3"></textarea>
                  </div>
                  <div class="button-div">
                    <button type="submit" @click="addEventToDb" class="btn btn-success" style="width: 50%">Submit</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      formData: {
        title: "",
        description: "",
        imageUrl: "",
        eventDate: "",
      },
    };
  },
  methods: {
    addEventToDb() {
      axios.post("http://localhost:3000/upcomings", this.formData).then(() => {
        this.formData = {
          title: "",
          description: "",
          imageUrl: "",
          eventDate: "",
        };
      });
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-image: url("../assets/bg-2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 325px;
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
.subtitle {
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
}
.button-div {
  display: flex;
  justify-content: center;
}
button {
  transition: 300ms ease;
  border: 1px solid #fff;
}
button:hover {
  color: #fff;
  border: 1px solid #fff;
  background-color: rgba(0, 0, 0, 0);
}
</style>