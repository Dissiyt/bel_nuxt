<template>
  <h1>Belegungsplan</h1>
  <!--  <STG_SVG @click="toggleReserve"/>-->


    <h1>{{rooms[0].name}}</h1>
    <div class="Map" v-html="rooms[0].map" ></div>


</template>

<script setup>

const {data: rooms} = await useFetch('http://ictbelplawp01:8080/rooms?buildingId=1')


const { data: occupations } = await useFetch('http://ictbelplawp01:8080/occupations?roomId=1')
console.log(occupations)
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