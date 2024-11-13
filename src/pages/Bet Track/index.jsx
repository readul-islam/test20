import React, { useEffect, useState } from "react";
import BetList from "./BetList";
import SearchInput from "../../components/SearchInput";
import { betTrackHeaderData, betTrackList } from "../../utils/mockData";

const BetTrack = () => {
	const [BetTrackData, setBetTrackData] = useState(betTrackList);
	const [playerName, setPlayerName] = useState("");

	//
	useEffect(() => {
		if (playerName === "") {
			setBetTrackData(betTrackList);
		} else {
			const regex = new RegExp(playerName, "i");
			const filteredData = betTrackList.filter((item) =>
				regex.test(item.player)
			);
			setBetTrackData(filteredData);
		}
	}, [playerName]);

	return (
		<>
			<div className="mb-2">
				<SearchInput
					onChange={(e) => setPlayerName(e.target.value)}
					placeHolder={"Enter player name"}
				/>
			</div>
			<BetList
				betTrackHeaderData={betTrackHeaderData}
				BetTrackData={BetTrackData}
			/>
		</>
	);
};

export default BetTrack;
