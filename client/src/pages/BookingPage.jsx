import { useParams } from "react-router-dom";

export default function BookingPage() {
	const {id} = useParams();
	console.log(id)
	return (
		<div>single booking: {id}</div>
	);
}