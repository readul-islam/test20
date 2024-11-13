import React from "react";
import TableBody from "../../components/UI Components/basic/TableBody";
import TableHead from "../../components/UI Components/basic/TableHead";
import Table from "../../components/UI Components/wrappers/Table";

const PastEventList = ({ setSelectedEvent, eventList }) => {
	const betListHeaderData = ["Event Name", "Date"];
	return (
		<>
			<Table>
				<TableHead
					className={"!bg-sky-800 text-white"}
					headerData={betListHeaderData}
				/>
				<TableBody>
					{eventList.map((event, index) => (
						<tr
							onClick={() => setSelectedEvent(event)}
							key={index}
							className="hover:bg-gray-100  cursor-pointer"
						>
							<td className="p-2 ">
								<div className="text-left text-nowrap font-semibold text-gray-600">
									{event.event_name}
								</div>
							</td>
							<td className="py-2 px-[18.5px]">
								<div
									className={` text-center text-gray-500 text-nowrap font-semibold `}
								>
									{event.date}
								</div>
							</td>
						</tr>
					))}
				</TableBody>
			</Table>
		</>
	);
};

export default PastEventList;
