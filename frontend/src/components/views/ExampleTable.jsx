import React from "react";
import SimpleWrapper from "../SimpleWrapper";
import { Table } from "../table";

const dummy_data = [
    ["john doe", "No", "Yes", "No", "Yes"],
    ["john poe", "No", "Yes", "No", "No"],
    ["john woe", "No", "Yes", "Yes", "No"],
    ["john hoe", "No", "No", "No", "Yes"]
];
const dummy_headers = [["Students"], ["th_11_20"], ["th_12_50"], ["th_14_40"], ["th_16_10"]];

function QuestionnaireResults() {
    return (
        <SimpleWrapper>
            <Table
                headers={dummy_headers}
                records={dummy_data}
                lambda={(cell) => (cell === "Yes" ? "bg-success" : "")}
            />
        </SimpleWrapper>
    );
}
export default QuestionnaireResults;
