<template>
  <div>
  <header>
  <nav>
  <div class="router">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
  </div>
</nav>

  </header>

    <div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>

nav {
  position: sticky;
  top: 0;
  padding: 30px;
  background: #0A5F5A;
}

nav a {
  font-size: large;
  font-weight: bold;
  color: #2c3e50;
  margin-left: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.router {
  flex: 1 1 auto;
  margin-right: 30px;
}

img {
  flex: 1 1 auto;
  width: 250px;
  height: auto;
}
.topleft {
  position: absolute;
  top: 20px;
  left: 16px;
  padding-right: 10px;
  font-size: 18px;
}
.scontainer {
  float: right;
  border: none;
  margin-right: 16px;
  font-size: 17px;
  top: -25px;
  position: relative;
}

.searchTerm {
  color: #9DBFAF;
  height: 1.5rem;

}

.sbutton {
  background: white;
  font-weight: bold;
  height: 2rem;
}

@media only screen and (max-width: 600px) {
  nav {
    top: 0;
    width: 100%;
    height: 5rem;
    flex-direction: row;
  }
  .topleft{
    display: none;
  }
  nav a {
    justify-content: center;
  }

}



</style>
