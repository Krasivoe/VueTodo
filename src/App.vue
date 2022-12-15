<template>
  <header class="header">
    <h1>Todo Vue Application</h1>
  </header>
  <nav class="container nav">
    <div class="nav__links">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/todo">Todos</router-link>
      <router-link class="link" to="/about">About</router-link>
    </div>
  </nav>
  <router-view/>
</template>

<style lang="scss">
h1 {
  font-size: 28px;
  color: $black;
}

.main-title {
  @include flex-center();
  font-size: 24px;
  color: $dark;
}

.header {
  @include flex-center();
  align-items: flex-end;
  min-height: 70px;
}

.nav {
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  &__links {
    display: flex;
    gap: 20px;
  }
  & .link {
    font-size: 20px;
    color: $black;
    text-decoration: none;
    border: 1px solid $light;
    border-radius: 30px;
    padding: 4px 10px;
    transition: color 0.3s linear, border 0.3s linear;
    &:hover {
      color: $dark;
      border: 1px solid $dark;
    }
  }
}

.bottom-line {
  width: 100%;
  height: 1px;
  background: $dark;
  margin: 10px 0;
}
</style>
