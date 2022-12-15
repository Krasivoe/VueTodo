<template>
  <main class="container about">
    <h2 class="main-title">About</h2>
    <hr class="bottom-line">
    <img src="@/assets/images/cat.png" alt="cat">
  </main>
</template>

<style scoped lang="scss">
.about {
  @include flex-center();
  flex-direction: column;
  padding-bottom: 30px;
}

@media screen and (max-width: 400px) {
  .about {
    & img {
      width: 400px;
      height: 400px;
    }
  }
}
</style>
