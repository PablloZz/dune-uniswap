import { QueryParameter, DuneClient, type RunQueryArgs } from "@duneanalytics/client-sdk";
import "dotenv/config";

const { DUNE_API_KEY = "" } = process.env;
const client = new DuneClient(DUNE_API_KEY);
const queryId = 1215383;
const options: RunQueryArgs = {
  queryId,
  query_parameters: [
    QueryParameter.text("TextField", "Plain Text"),
    QueryParameter.number("NumberField", 3.1415926535),
    QueryParameter.date("DateField", "2022-05-04 00:00:00"),
    QueryParameter.enum("ListField", "Option 1"),
  ],
};

client.runQuery(options).then((executionResult) => console.log(executionResult.result?.rows));
