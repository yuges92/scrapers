<template>
  <div>
    <button class="btn btn-primary px-5" v-show="!loading">{{textName ? textName :'Create'}}</button>

    <button class="btn btn-primary " type="button" disabled v-show="loading">
      <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
      {{loadingText ? loadingText :'Running'}}...
    </button>
  </div>
</template>

<script>
export default {
  props: ['loading', 'textName', 'loadingText'],
  data() {
    return {};
  }
};
</script>