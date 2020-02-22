<template>
  <div>
        <router-link to="/" class="home-btn">
          <i class="fas fa-arrow-alt-circle-left"></i>
          <span>Go Home</span>
        </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.home-btn {
  width: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #542fb1;
  border-radius: 5rem;
  padding: 0.3rem 0.5rem;
  color: #542fb1;
  transition: all 200ms ease-in-out;

  i {
    // padding: 0 1rem 0 0;
    font-size: 1.8rem;
    transition: all 200ms ease-in-out;
  }

  &:hover {
    background: #542fb1;
    color: #fff;
    transition: all 200ms ease-in-out;
  }
}
</style>