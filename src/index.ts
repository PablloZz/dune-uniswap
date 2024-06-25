import { DuneClient } from "@duneanalytics/client-sdk";
import "dotenv/config";
import { Config } from "./libs/config";
import {
  getUniswapUsdcWethCreatedPair,
  getUniswapUsdcWethSwapsCountAndTotalVolume,
} from "./libs/getQueryResult";

const client = new DuneClient(Config.ENV.DUNE_API_KEY);

async function init() {
  console.log(await getUniswapUsdcWethCreatedPair(client));
  console.log(await getUniswapUsdcWethSwapsCountAndTotalVolume(client));
}

init();
