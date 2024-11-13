import React from "react";
import Table from "../../components/UI Components/wrappers/Table";
import TableHead from "../../components/UI Components/basic/TableHead";
import TableBody from "../../components/UI Components/basic/TableBody";

const BetList = ({ betTrackHeaderData, BetTrackData }) => {
	return (
		<>
			<Table>
				<TableHead
					className={"!bg-sky-800 text-white"}
					headerData={betTrackHeaderData}
				/>
				<TableBody>
					{BetTrackData.map((bet, index) => (
						<tr key={index} className="hover:bg-gray-100 cursor-pointer">
							<td className="p-2">
								<div className="text-left text-nowrap font-semibold text-gray-600">
									{bet.player}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-gray-500 text-nowrap font-semibold ">
									{bet.stake}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-gray-500 text-nowrap font-semibold ">
									{bet.odds}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-gray-500 text-nowrap font-semibold ">
									{bet.profit}
								</div>
							</td>
							<td className="p-2">
								<div className="text-center text-nowrap text-gray-500 font-semibold">
									{bet.average}
								</div>
							</td>
						</tr>
					))}
				</TableBody>
			</Table>
		</>
	);
};

export default BetList;
