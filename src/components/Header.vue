<script>
export default {
  setup() {},
};
</script>

<template>
  <header>
    <h1 class="app-header__title">
      <router-link class="title__link" to="/">Team Builder</router-link> With
      Composition API
    </h1>
    <div class="app-header__buttons">
      <router-link class="btn btn--level" tag="button" to="/level"
        >Levels</router-link
      >
      <router-link class="btn btn--team" tag="button" to="/team"
        >Teams</router-link
      >
      <router-link class="btn btn--person" tag="button" to="/person"
        >Add Person</router-link
      >
    </div>
  </header>
</template>
