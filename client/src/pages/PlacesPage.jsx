import { Link, useParams } from "react-router-dom";

export default function PlacesPage() {
  const { action } = useParams();
  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            className="inline-flex items-center gap-1 px-6 py-2 text-white rounded-full bg-primary"
            to={"/account/places/new"}
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            Add new place
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form action="">
            <h2 className="mt-4 text-2xl">Title</h2>
            <p className="text-sm text-gray-500">
              title for your place. should be short and catchy as in
              advertisement
            </p>
            <input
              type="text"
              placeholder="title, for example: My lovely house"
            />
            <h2 className="mt-4 text-2xl">Address</h2>
            <p className="text-sm text-gray-500">Address to this place</p>
            <input type="text" placeholder="address" />
            <h2 className="mt-4 text-2xl">Photos</h2>
            <p className="text-sm text-gray-500"> more = better</p>
            <div className="flex gap-2">
              <input type="text" placeholder={"Add using a link ... jpg"} />
              <button className="px-4 bg-gray-200 rounded-2xl">
                Add&nbsp;photos
              </button>
            </div>
            <div className="grid grid-cols-3 gap-1 mt-2 lg:grid-cols-6 md:grid-cols-4">
              <button className="flex justify-center p-8 text-2xl text-gray-600 bg-transparent border rounded-2xl">
                <svg
                  className="w-8 h-8"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.81825 1.18188C7.64251 1.00615 7.35759 1.00615 7.18185 1.18188L4.18185 4.18188C4.00611 4.35762 4.00611 4.64254 4.18185 4.81828C4.35759 4.99401 4.64251 4.99401 4.81825 4.81828L7.05005 2.58648V9.49996C7.05005 9.74849 7.25152 9.94996 7.50005 9.94996C7.74858 9.94996 7.95005 9.74849 7.95005 9.49996V2.58648L10.1819 4.81828C10.3576 4.99401 10.6425 4.99401 10.8182 4.81828C10.994 4.64254 10.994 4.35762 10.8182 4.18188L7.81825 1.18188ZM2.5 9.99997C2.77614 9.99997 3 10.2238 3 10.5V12C3 12.5538 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2238 12.2239 9.99997 12.5 9.99997C12.7761 9.99997 13 10.2238 13 10.5V12C13 13.104 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2238 2.22386 9.99997 2.5 9.99997Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Upload
              </button>
            </div>
			<h2 className="mt-4 text-2xl">Description</h2>
            <p className="text-sm text-gray-500">description of the place</p>
            <textarea />
			<h2 className="mt-4 text-2xl">Perks</h2>
            <p className="text-sm text-gray-500">select all the perks of your place</p>
			<div className="grid grid-cols-2 gap-2 mt-2 md:grid-cols-3 lg:grid-cols-6">
				<label className="flex items-center gap-2 p-4 border cursor-pointer rounded-2xl">
					<input type="checkbox" className="" />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
					</svg>
					<span>Wifi</span>
				</label>
				<label className="flex items-center gap-2 p-4 border cursor-pointer rounded-2xl">
					<input type="checkbox" className="" />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
					</svg>
					<span>Free parking spot</span>
				</label>
				<label className="flex items-center gap-2 p-4 border cursor-pointer rounded-2xl">
					<input type="checkbox" className="" />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
					</svg>
					<span>TV</span>
				</label>
				<label className="flex items-center gap-2 p-4 border cursor-pointer rounded-2xl">
					<input type="checkbox" className="" />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
					</svg>
					<span>Pets</span>
				</label>
				<label className="flex items-center gap-2 p-4 border cursor-pointer rounded-2xl">
					<input type="checkbox" className="" />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
					</svg>
					<span>Private entrance</span>
				</label>
				<label className="flex items-center gap-2 p-4 border cursor-pointer rounded-2xl">
					<input type="checkbox" className="" />
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
					</svg>
					<span>Radio</span>
				</label>
			</div>
			<h2 className="mt-4 text-2xl">Extra info</h2>
            <p className="text-sm text-gray-500">house rules, etc</p>
			<textarea />
			<h2 className="mt-4 text-2xl">Check in&out times, max quests</h2>
            <p className="text-sm text-gray-500">add check in and out times, remember to have some time window for cleaning the room between quests</p>
			<div className="grid gap-2 sm:grid-cols-3">
				<div>
					<h3 className="mt-2 -mb-2">Check in time</h3>
					<input type="text" placeholder="14:00"/>
				</div>
				<div>
					<h3 className="mt-2 -mb-2">Check out time</h3>
					<input type="text" />
				</div>
				<div>
					<h3 className="mt-2 -mb-2">Max number of guests</h3>
					<input type="text" />
				</div>
			</div>
			<button className="my-4 primary">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
