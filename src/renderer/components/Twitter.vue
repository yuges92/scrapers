<template>
  <div class="card">
    <div class="card-body">
      <form v-on:submit.prevent="runTwitter">
        <div class="form-group row">
          <label for="company-name" class="col-sm-4 col-form-label">Company Name</label>
          <div class="col">
            <input type="text" class="form-control" id="company-name" placeholder="Company Name">
          </div>
        </div>

        <div class="form-group row">
          <label for="any-words" class="col-sm-4 col-form-label">Any of these words</label>
          <div class="col">
            <input type="text" class="form-control" id="any-words" placeholder="Any of these words">
          </div>
        </div>

        <div class="form-group row">
          <label for="start-date" class="col-sm-4 col-form-label">Start Date</label>
          <div class="col">
            <input type="date" class="form-control" id="start-date" />
          </div>
        </div>

        <div class="form-group row">
          <label for="end-date" class="col-sm-4 col-form-label">End Start</label>
          <div class="col">
            <input type="date" class="form-control" id="end-date" />
          </div>
        </div>

        <div class="form-group row">
          <label for="inputPassword" class="col-sm-4 col-form-label">Any of these words</label>
          <div class="col">
            <input type="password" class="form-control" id="inputPassword" />
          </div>
        </div>
        <div class="float-right">
          <submit-btn :loading="running" :textName="'Run'"></submit-btn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      running: false
    };
  },
  methods: {
    runTwitter() {
      console.log("Running");
      this.running = true;
    }
  }
};
</script>

<style>
</style>