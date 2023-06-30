/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) {
    return "";
  }

  
  return (
    <div className="px-8 pt-8 mt-4 -mx-8 bg-gray-100">
	<AddressLink>
		{place.address}
	</AddressLink>
      <PlaceGallery place={place} />
      <div className="mt-8 mb-8 gap-4 grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        <div className="">
          <div className="my-4">
            <h2 className="text-2xl font-semibold">Description</h2>
            {place.description}
          </div>
          Check-in: {place.checkIn}
          <br />
          Check-out: {place.checkOut}
          <br />
          Max number of guests: {place.maxGuests}
        </div>
        <div className="">
          <BookingWidget place={place} />
        </div>
      </div>
      <div className="px-8 py-8 -mx-8 bg-white border-t">
        <div>
          <h2 className="text-2xl font-semibold">Extra info</h2>
        </div>
        <div className="mt-2 text-sm leading-5 text-gray-700 by-4">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
}
