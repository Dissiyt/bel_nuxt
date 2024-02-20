import type { Reservation } from "~/types";
// @ts-ignore
export default defineEventHandler(async (event) => {
    // Make the fetch request to the reservation server
    const body = await readBody(event);
                    const res = await $fetch<Reservation>("http://ictbelplawp01:8080/reservations", {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: body,
                    })
                    console.log(res)

});
