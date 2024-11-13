import React from "react";

const BetEntryButton = ({ activeButton, handleClick }) => {
	return (
		<div className="flex w-full justify-center">
			<div className="flex items-center text-xs justify-start gap-5">
				<div
					onClick={() => handleClick("Outright/Position")}
					className={`uppercase py-1.5 px-5 rounded-lg cursor-pointer font-medium text-black ${activeButton === "Outright/Position" ? "bg-green-500" : "bg-gray-200"}`}
				>
					Outright/Position
				</div>
				<div
					onClick={() => handleClick("Matchups")}
					className={`uppercase py-1.5 px-5 rounded-lg cursor-pointer font-medium ${activeButton === "Matchups" ? "bg-green-500 text-white" : "bg-gray-200 text-black"}`}
				>
					Matchups
				</div>
			</div>
		</div>
	);
};

export default BetEntryButton;
