<template>
  <h1>Belegungsplan</h1>
  <!--  <STG_SVG @click="toggleReserve"/>-->

  <div @click="toggleReserve">
    <h1>{{rooms[0].name}}</h1>
    <div class="Map" v-html="rooms[0].map" ></div>
  </div>

  <div class="reserve" v-if="showReserve">
    <Reserve_module @close="toggleReserve"/>
  </div>

</template>

<script setup>
import Reserve_module from './Reserve_module.vue'
import { ref } from 'vue';
const {data: rooms} = await useFetch('http://ictbelplawp01:8080/rooms?buildingId=1')


const { data: occupations } = await useFetch('http://ictbelplawp01:8080/occupations?roomId=1')
console.log(occupations)

const showReserve = ref(false);

const toggleReserve = () => {
  showReserve.value = !showReserve.value;
};

</script>

<style scoped>
text {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


@media only screen and (max-width: 600px) {
  .Map {
    width: 100%;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }
}
.reserve {
  margin-left: 15px;
  margin-bottom: 5px;
}
</style>