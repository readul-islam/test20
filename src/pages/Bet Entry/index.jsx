import React, { useId, useState } from "react";
import BetEntryButton from "./BetEntryButton";
import MatchupForm from "./forms/MatchupForm";
import PositionForm from "./forms/PositionForm";

const BetEntry = () => {
	const positionFormId = useId();
	const [selectedForm, setSelectedForm] = useState("Outright/Position");

	const handleClick = (formName) => {
		setSelectedForm(formName);
	};

	const positionBetEntryHandleSubmit = async (values, { resetForm }) => {
		const response = await fetch(
			"http://127.0.0.1:8000/api/bet-entry/position",
			{
				method: "POST", // *GET, POST, PUT, DELETE, etc.

				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values),
			}
		);
		const movies = await response.json();
		console.log(movies);
	};

	return (
		<div className=" ">
			<BetEntryButton activeButton={selectedForm} handleClick={handleClick} />
			<div className=" w-full mx-auto">
				{selectedForm === "Outright/Position" && (
					<PositionForm
						handleFormSubmit={positionBetEntryHandleSubmit}
						formId={positionFormId}
					/>
				)}
				{selectedForm === "Matchups" && <MatchupForm />}
			</div>
		</div>
	);
};

export default BetEntry;
