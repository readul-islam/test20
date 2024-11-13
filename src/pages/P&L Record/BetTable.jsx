// src/components/BetTable.js
import React from "react";

const BetTable = ({ headerData, rowData }) => {
	const total = rowData.reduce(
		(accumulator, currentValue) =>
			parseInt(accumulator) + parseInt(currentValue),
		0
	);

	console.log(total);
	return (
		<div className="overflow-x-auto">
			<table className="min-w-full bg-white">
				<thead>
					<tr>
						{headerData.map((header, index) => (
							<th
								key={index}
								className="py-2 px-4 !bg-sky-800 text-white text-xs uppercase border-b border-gray-200  text-left  leading-4  tracking-wider"
							>
								{header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rowData.map((row) => (
						<React.Fragment key={row.id}>
							{row.bets.map((bet, betIndex) => (
								<tr
									key={betIndex}
									className={
										row.status === "win" && betIndex === 0
											? "bg-green-50"
											: "" || (row.status === "lost" && betIndex === 0)
												? "bg-red-50"
												: ""
									}
								>
									{betIndex === 0 && (
										<td
											className="py-2 px-4 border-b border-gray-200"
											rowSpan={row.bets.length}
										>
											{row.name}
										</td>
									)}
									<td className="py-2 px-4 border-b  border-gray-200">
										{bet.bet_type}
									</td>
									<td className="py-2 px-4 border-b border-gray-200">
										{bet.stake}
									</td>
									<td className="py-2 px-4 border-b border-gray-200">
										{bet.odds}
									</td>
									<td className="py-2 px-4 border-b border-gray-200">
										{bet.profit}
									</td>
									{betIndex === 0 && (
										<td
											className="py-2 px-4 border-b border-gray-200"
											rowSpan={row.bets.length}
										>
											{row.total}
										</td>
									)}
									{betIndex === 0 && (
										<td
											className="py-2 px-4 border-b border-gray-200"
											rowSpan={row.bets.length}
										>
											{row.status}
										</td>
									)}
								</tr>
							))}
						</React.Fragment>
					))}

					<tr>
						<td className="py-2 px-4 border-b border-gray-200">
							Unrealized Profit
						</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td className="py-2 px-4 border-b border-gray-200">68289.53</td>
						<td></td>
					</tr>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Profit</td>
						<td className="py-2 px-4 border-b border-gray-200">55480.04</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td className="py-2 px-4 border-b border-gray-200">Loss</td>
						<td className="py-2 px-4 border-b border-gray-200">12809.49</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default BetTable;
