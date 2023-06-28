import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

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
    <div className="px-8 py-8 mt-4 -mx-8 bg-gray-100">
      <h1 className="text-3xl">{place.title}</h1>
      <a className='block my-2 font-semibold underline' target='_blank' href={'https://maps.google.com/?q='+place.address} rel="noreferrer">{place.address}</a>
    </div>
  );
}
