import axios from "axios";
import { useEffect, useState } from "react";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((response) => {
      setPlaces(response.data);
    });
  }, []);
  return (
    <div className="grid mt-8 grid-cold-2 md:grid-col-3 lg:grid-col-4">
      {places.length > 0 &&
        places.map((place) => (
          <div>
            <div className="bg-gray-500">
              {place.photos?.[0] && (
                <img
                  src={"http://localhost:4000/uploads/" + place.photos?.[0]}
                  alt=""
                />
              )}
            </div>
            {place.title}
          </div>
        ))}
    </div>
  );
}
