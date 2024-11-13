import React from "react";
import Table from "../../components/UI Components/wrappers/Table";
import TableHead from "../../components/UI Components/basic/TableHead";
import TableBody from "../../components/UI Components/basic/TableBody";
import { betList } from "../../utils/mockData";
import SearchInput from "../../components/SearchInput";

const PerformanceList = () => {
	const betListHeaderData = [
		"Position",
		"bet status",
		"Player Name",
		"total",
		"R1",
		"R2",
		"R3",
		"R4",
		"Stake",
	];
	return (
		<>
			{/* <div className="mb-2">
				<SearchInput placeHolder={"Enter player name"} />
			</div> */}
			<Table>
				<TableHead
					className={"!bg-sky-800 text-white"}
					headerData={betListHeaderData}
				/>
				<TableBody>
					{betList.map((bet, index) => (
						<tr key={index} className="hover:bg-gray-100  cursor-pointer">
							<td className="p-2 ">
								<div className="text-left text-nowrap font-semibold text-gray-600">
									{bet.position}
								</div>
							</td>
							<td className="p-2">
								<div
									className={` text-center text-gray-500 text-nowrap font-semibold `}
								>
									{bet.bet_status}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-gray-500 text-nowrap font-semibold ">
									{bet.player_name}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center  text-red-500 text-nowrap font-semibold ">
									{bet.total}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-gray-500 text-nowrap font-semibold ">
									{bet.round1}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-gray-500 font-semibold">
									{bet.round2}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-gray-500 font-semibold">
									{bet.round3}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-gray-500 font-semibold">
									{bet.round4}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-gray-500 font-semibold">
									{bet.stake}
								</div>
							</td>
						</tr>
					))}
				</TableBody>
			</Table>
		</>
	);
};

export default PerformanceList;
