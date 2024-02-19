import defineStore  from '@pinia/nuxt'
import type {Reservation} from "~/types";

// @ts-ignore
export const useReservationStore = defineStore("reserve",() => {
    const reservation = ref()
    const setReservation = (data?: any) => (reservation.value = data)
    const reserve = async (data: any) =>{
        try{
            const res = await $fetch<Reservation>("http://ictbelplawp01:8080/reservations", {
                method: "POST",
                body: data,
            })
            setReservation(res.reservant)
        } catch (error) {
            setReservation()
            console.log(error)
        }
    }
})