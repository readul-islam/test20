import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput";
import Card from "../../components/UI Components/wrappers/Card";
import PastEventList from "./PastEventList";
import PerformanceList from "./PerformanceList";

// Helper function to convert dates to mm/dd/yyyy format
const formatDate = (dateString) => {
	const options = { month: "2-digit", day: "2-digit", year: "numeric" };
	return new Date(dateString).toLocaleDateString("en-US", options);
};

// Initial event list with dates in mm/dd/yyyy format
const initialEventList = [
	{
		event_name: "The Masters Tournament",
		date: formatDate("2024-04-11"),
	},
	{
		event_name: "PGA Championship",
		date: formatDate("2024-05-16"),
	},
	{
		event_name: "U.S. Open",
		date: formatDate("2024-06-13"),
	},
	{
		event_name: "The Open Championship",
		date: formatDate("2024-07-18"),
	},
	{
		event_name: "Ryder Cup",
		date: formatDate("2024-09-27"),
	},
	{
		event_name: "PGA Tour Championship",
		date: formatDate("2024-08-22"),
	},
	{
		event_name: "Presidents Cup",
		date: formatDate("2024-12-12"),
	},
	{
		event_name: "Arnold Palmer Invitational",
		date: formatDate("2024-03-05"),
	},
	{
		event_name: "The Players Championship",
		date: formatDate("2024-03-12"),
	},
	{
		event_name: "WGC-Dell Technologies Match Play",
		date: formatDate("2024-03-25"),
	},
	{
		event_name: "The Honda Classic",
		date: formatDate("2024-02-26"),
	},
	{
		event_name: "Memorial Tournament",
		date: formatDate("2024-05-30"),
	},
	{
		event_name: "BMW PGA Championship",
		date: formatDate("2024-09-12"),
	},
	{
		event_name: "Charles Schwab Challenge",
		date: formatDate("2024-05-23"),
	},
	{
		event_name: "The Genesis Invitational",
		date: formatDate("2024-02-19"),
	},
];

const Performance = () => {
	const [selectedEvent, setSelectedEvent] = useState(null);
	const [eventList, setEventList] = useState(initialEventList);
	const [eventName, setEventName] = useState("");
	const [eventDate, setEventDate] = useState("");

	useEffect(() => {
		let filteredEvents = initialEventList;

		if (eventName) {
			const nameRegex = new RegExp(eventName, "i");
			filteredEvents = filteredEvents.filter((event) =>
				nameRegex.test(event.event_name)
			);
		}

		if (eventDate) {
			const formattedEventDate = formatDate(eventDate);
			filteredEvents = filteredEvents.filter(
				(event) => event.date === formattedEventDate
			);
		}

		setEventList(filteredEvents);
	}, [eventName, eventDate]);

	return (
		<>
			{!selectedEvent && (
				<>
					<div className="mb-2 grid grid-cols-3 gap-x-3">
						<div className="col-span-2">
							<SearchInput
								onChange={(e) => setEventName(e.target.value)}
								placeHolder="Search event name"
							/>
						</div>
						<SearchInput
							onChange={(e) => setEventDate(e.target.value)}
							type="date"
						/>
					</div>
					<PastEventList
						setSelectedEvent={setSelectedEvent}
						eventList={eventList}
					/>
				</>
			)}

			{selectedEvent && (
				<Card
					cancelHandler={() => setSelectedEvent(null)}
					topCloseIcon
					title={selectedEvent.event_name}
				>
					<PerformanceList />
				</Card>
			)}
		</>
	);
};

export default Performance;
