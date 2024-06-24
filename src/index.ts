import { DuneClient } from "@duneanalytics/client-sdk";
import "dotenv/config";

const { DUNE_API_KEY = "" } = process.env;
const client = new DuneClient(DUNE_API_KEY);
const UNISWAP_USDC_WETH_PAIRS_QUERY_ID = 3851868;

client
  .getLatestResult({ queryId: UNISWAP_USDC_WETH_PAIRS_QUERY_ID })
  .then((uniswapUsdcWethPairs) => console.log(uniswapUsdcWethPairs.result?.rows))
  .catch((error) => console.log(error));
