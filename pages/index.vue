<template>
  <h1>Belegungsplan</h1>
  <!--  <STG_SVG @click="toggleReserve"/>-->

  <div v-for="room in rooms" :key="room.floor">
    <h1>{{room.name}}</h1>
    <div class="Map" v-html="room.map" ></div>
  </div>

</template>

<script setup>

const {data: rooms} = await useFetch('http://ictbelplawp01:8080/rooms?buildingId=1')
</script>

<style scoped>
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