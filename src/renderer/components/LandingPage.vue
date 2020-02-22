<template>
  <div id="wrapper">
    <main>
      
      <h1 class="main-title text-center">Scrapers</h1>
      <div class="container-fluid scraper-btns-container">
        <router-link to="Twitter" class="scraper-btn">
          <i class="fab fa-twitter"></i>
          <span>Twitter</span>
        </router-link>

        <router-link to="Twitter" class="scraper-btn">
          <i class="fab fa-linkedin-in"></i>
          <span>Linkedin</span>
        </router-link>

        <router-link to="Twiiter" class="scraper-btn">
          <i class="fab fa-instagram"></i>
          <span>Instagram</span>
        </router-link>

        <router-link to="Twiiter" class="scraper-btn">
          <i class="fab fa-twitter"></i>
          <span>Indeed</span>
        </router-link>

        <router-link to="Twiiter" class="scraper-btn">
          <i class="fab fa-twitter"></i>
          <span>Glassdoor</span>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
import SystemInformation from "./LandingPage/SystemInformation";

export default {
  name: "landing-page",
  components: { SystemInformation },
  methods: {
    open(link) {
      this.$electron.shell.openExternal(link);
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");
@import "~@fortawesome/fontawesome-free/css/all.css";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.main-title {
  color: #4c00ff;
}
.scraper-btns-container {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  .scraper-btn {
    margin: 1rem;
    background-color: #4c00ff;
    color: #fff;
    font-size: 2rem;
    padding: 3rem;
    text-decoration: none;
    border-radius: 1rem;
    text-align: center;
    width: 15rem;
    display: flex;
    flex-direction: column;

    &:hover{
    background-color: #552ead;

    }
  }
}

a {
  text-decoration: none !important;
}
</style>
