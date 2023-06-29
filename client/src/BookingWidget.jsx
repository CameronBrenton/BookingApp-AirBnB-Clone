export default function BookingWidget({place}) {
  return (
    <div className="p-4 bg-white shadow rounded-2xl">
      <div className="text-2xl text-center">
        Price: ${place.price} / per night
      </div>
      <div className="mt-4 border rounded-2xl">
        <div className="flex">
          <div className="px-4 py-3">
            <label htmlFor="">Check in:</label>
            <input type="date" className="" />
          </div>
          <div className="px-4 py-3 border-l">
            <label htmlFor="">Check out:</label>
            <input type="date" className="" />
          </div>
        </div>
        <div className="px-4 py-3 border-t">
          <label htmlFor="">Number of guests:</label>
          <input type="number" className="" value={1} />
        </div>
      </div>
      <button className="mt-4 primary"> Book this place</button>
    </div>
  );
}
