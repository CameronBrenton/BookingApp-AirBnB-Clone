import { useState } from "react";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  return (
    <div className="p-4 bg-white shadow rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${place.price} / per night
      </div>
      <div className="mt-4 border rounded-2xl">
        <div className="flex">
          <div className="px-4 py-3">
            <label htmlFor="">Check in:</label>
            <input
              type="date"
              className=""
              value={checkIn}
              onChange={(ev) => setCheckIn(ev.target.value)}
            />
          </div>
          <div className="px-4 py-3 border-l">
            <label htmlFor="">Check out:</label>
            <input
              type="date"
              className=""
              value={checkOut}
              onChange={(ev) => setCheckOut(ev.target.value)}
            />
          </div>
        </div>
        <div className="px-4 py-3 border-t">
          <label htmlFor="">Number of guests:</label>
          <input
            type="number"
            className=""
            value={numberOfGuests}
            onChange={(ev) => setNumberOfGuests(ev.target.value)}
          />
        </div>
      </div>
      <button className="mt-4 primary"> Book this place</button>
    </div>
  );
}
