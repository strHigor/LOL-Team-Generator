<template>
  <header>
    <div class="menu">
      <nav>
        <button id="menuButton" @click="newSweepstake()"> Novo Sorteio </button>
      </nav>
    </div>
    <RouterView />
  </header>
</template>

<script>
export default {
  methods: {
    newSweepstake() {
      window.location.href = "/";
    }
  }
}
</script>

<style scoped>
header {
  gap: 10px;
}

.menu {}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

#menuButton {
  font-family: 'Belanosima', sans-serif;
  font-size: 17px;
  color: #c7c7c7;
  text-shadow: 2px 2px 2px #212121;
  width: 100px;
  height: 60px;
  background-color: #fff98a20;
  box-shadow: 1px 1px 10px 1px inset #ffffff;
  border-radius: 5px;
  transition: 800ms;
  border-color: aliceblue;
}

#menuButton:hover {
  background-color: #fbff0320;
  border-color: #dfdfdf;
  box-shadow: 1px 1px 10px 5px inset #fdd54dd0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
