import type { Reservation } from "~/types";
// @ts-ignore
export default defineEventHandler(async (req, res) => {
    // Make the fetch request to the reservation server
    if (req.method === "POST") {
        try {
            // No need to parse the request body manually. Express.js does it for you.
            const setReservation = (data?: any) => (req._requestBody = data)
            const reserve = async (data: any) => {
                try {
                    const res = await $fetch<Reservation>("http://ictbelplawp01:8080/reservations", {
                        method: "POST",
                        body: data,
                    })
                    setReservation(res.reservant)
                    console.log(res)
                } catch (error) {
                    setReservation()
                    console.log(error)
                }
            }
            // Accessing deskId and reservant from the request body
            const { deskId, reservant } = req.body;
            await reserve({ deskId, reservant });
        } catch (error) {
            console.log(error)
        }
    }
});
