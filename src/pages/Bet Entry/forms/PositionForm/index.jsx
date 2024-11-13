import { Form, Formik } from "formik";
import React, { useEffect } from "react";
import InputField from "../../../../components/UI Components/basic/InputField";
import Label from "../../../../components/UI Components/basic/Label";
import Card from "../../../../components/UI Components/wrappers/Card";
import InputSelect from "../../../../components/UI Components/basic/InputSelect";
import { marketList } from "../../../../utils/mockData";
import useInitialData from "../../../../hooks/useInitialData";

const INITIAL_DATA = {
    player_name: "",
    market: "",
    stake: 0,
    odds: 0,
    expected_return: 0,
    potential_win: 0,
};

const MatchupForm = ({ handleFormSubmit, formId, initialData }) => {
    const { isDataEmpty, initialValues } = useInitialData({
        initialData,
        INITIAL_DATA,
    });

    return (
        <div className="mt-4 max-w-4xl mx-auto">
            <Card formId={formId} isButtons>
                <Formik
                    initialValues={initialValues}
                    onSubmit={handleFormSubmit}
                    enableReinitialize={isDataEmpty}
                    //   validationSchema={employeeAddress}
                >
                    {({
                        handleSubmit,
                        isSubmitting,
                        setFieldValue,
                        values,
                        resetForm,
                    }) => {
                        useEffect(() => {
                            const expected_return = values.odds * values.stake;
                            const potential_win = expected_return - values.stake;
                            setFieldValue("expected_return", expected_return);
                            setFieldValue("potential_win", potential_win);
                        }, [values.odds, values.stake, setFieldValue]);

                        return (
                            <Form id={formId} onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <Label required htmlFor="player_name">
                                        Player Name
                                    </Label>
                                    <InputField
                                        id="player_name"
                                        name="player_name"
                                        type="text"
                                        placeholder="name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <Label required htmlFor="market">
                                        Market
                                    </Label>
                                    <InputSelect
                                        onChange={(e) => setFieldValue("market", e.target.value)}
                                        id="market"
                                        options={marketList}
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
                                    <Label required htmlFor="odds">
                                        Odds
                                    </Label>
                                    <InputField
                                        id="odds"
                                        name="odds"
                                        type="number"
                                        placeholder="0"
                                    />
                                </div>
                                <div className="mb-3">
                                    <Label required htmlFor="expected_return">
                                        Expected Return
                                    </Label>
                                    <InputField
                                        value={values.expected_return}
                                        id="expected_return"
                                        name="expected_return"
                                        type="number"
                                        placeholder="0"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3">
                                    <Label required htmlFor="potential_win">
                                        Potential Win
                                    </Label>
                                    <InputField
                                        value={values.potential_win}
                                        id="potential_win"
                                        name="potential_win"
                                        type="number"
                                        placeholder="0"
                                        readOnly
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

export default MatchupForm;
