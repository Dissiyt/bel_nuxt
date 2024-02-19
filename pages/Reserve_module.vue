<template>
  <div class="reserve">
    <form @submit.prevent="reserveSub">
      <h1>Reservieren</h1>
      <p>{{ desk }}</p>
      <p>{{ day }}. {{ month }}</p>
      <input type="text" class="searchTerm" v-model="reserve" placeholder="Search..."/>
      <button type="submit">Submit</button>
    </form>
    <p>{{ reserve }}</p>
  </div>

</template>

<script setup>
import {ref, defineEmits} from 'vue';
import {useReservationStore} from "../stores/reservation_store.ts";

// Gets Date, const months is an array with all months to select the current
const date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const reserve = ref('');
const desk = "Tisch 1";
const day = date.getDay(); // gets the current day out of date
const month = months[date.getMonth()]; // gets the current month and name of the month
const emit = defineEmits(["confirm", "close"])
const useReservation = useReservationStore();

const reserveSub = async () => {
  emit('close');
  console.log(reserve.value); // debugging
  await useReservation.reserve({
    deskId: 1,
    reservant: "test",
  });
};
const confirm = () => {
  emit('confirm');
};

</script>

<style scoped>

.reserve {
  display: block;
  width: 500px;
  height: 300px;
  border: solid black;
  text-align: center;

}

.reserve p {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>