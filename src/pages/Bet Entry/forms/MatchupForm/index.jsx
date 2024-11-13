import { Form, Formik } from "formik";
import React, { useState, useEffect } from "react";
import InputField from "../../../../components/UI Components/basic/InputField";
import Label from "../../../../components/UI Components/basic/Label";
import Card from "../../../../components/UI Components/wrappers/Card";
import InputSelect from "../../../../components/UI Components/basic/InputSelect";

const MatchupForm2 = ({ handleFormSubmit, formId }) => {
	const [playerOptions, setPlayerOptions] = useState([]);

	useEffect(() => {
		setPlayerOptions([
			{ id: 1, value: "", name: "Select a player" },
			{ id: 2, value: "player_one", name: "Player One" },
			{ id: 3, value: "player_two", name: "Player Two" },
		]);
	}, []);

	return (
		<div className="mt-4 max-w-4xl mx-auto">
			<Card isButtons>
				<Formik
					initialValues={{
						player_one: "",
						player_two: "",
						market: "",
						stake: 0,
						odd: 0,
						expected_return: 0,
						potential_win: 0,
					}}
					onSubmit={handleFormSubmit}
				>
					{({ handleSubmit, values }) => {
						useEffect(() => {
							const options = [
								{ id: 1, value: "", name: "Select a player" },
								...(values.player_one
									? [
											{
												id: 2,
												value: values.player_one,
												name: values.player_one,
											},
										]
									: []),
								...(values.player_two
									? [
											{
												id: 3,
												value: values.player_two,
												name: values.player_two,
											},
										]
									: []),
							];
							setPlayerOptions(options);
						}, [values.player_one, values.player_two]);

						return (
							<Form id={formId} onSubmit={handleSubmit}>
								<div className="mb-3">
									<Label required htmlFor="player_one">
										Player One
									</Label>
									<InputField
										id="player_one"
										name="player_one"
										type="text"
										placeholder="name"
									/>
								</div>
								<div className="mb-3">
									<Label required htmlFor="player_two">
										Player Two
									</Label>
									<InputField
										id="player_two"
										name="player_two"
										type="text"
										placeholder="name"
									/>
								</div>
								<div className="mb-3">
									<Label required htmlFor="market">
										Support
									</Label>
									<InputSelect
										id="market"
										options={playerOptions}
										name="market"
									/>
								</div>
								<div className="mb-3">
									<Label required htmlFor="stake">
										Stake
									</Label>
									<InputField
										id="stake"
										name="stake"
										type="number"
										placeholder="0"
									/>
								</div>
								<div className="mb-3">
									<Label required htmlFor="odd">
										Odd
									</Label>
									<InputField
										id="odd"
										name="odd"
										type="number"
										placeholder="0"
									/>
								</div>
								<div className="mb-3">
									<Label required htmlFor="expected_return">
										Expected Return
									</Label>
									<InputField
										value={values.odd * values.stake}
										id="expected_return"
										name="expected_return"
										type="number"
										placeholder="0"
									/>
								</div>
								<div className="mb-3">
									<Label required htmlFor="potential_win">
										Potential Win
									</Label>
									<InputField
										value={values.odd * values.stake - values.stake}
										id="potential_win"
										name="potential_win"
										type="number"
										placeholder="0"
									/>
								</div>
							</Form>
						);
					}}
				</Formik>
			</Card>
		</div>
	);
};

export default MatchupForm2;
