import { type DuneClient, type ResultsResponse } from "@duneanalytics/client-sdk";
import { parseResponse } from "./helpers";
import { Config } from "./config";

const DUNE_API_EXECUTION_ENDPOINT = "https://api.dune.com/api/v1/execution/";
const UNISWAP_USDC_WETH_PAIRS_QUERY_ID = 3851868;
const UNISWAP_USDC_WETH_SWAPS_COUNT_AND_VOLUME_QUERY_ID = 3856794;
const UNISWAP_USDC_WETH_TOP_ROUTING_PATH_QUERY_ID = 3857500;
const PING_FREQUENCY = 5;

async function getUniswapUsdcWethCreatedPair(duneClient: DuneClient) {
  const uniswapUsdcWethPairsResultStatus = await duneClient.refreshResults(
    UNISWAP_USDC_WETH_PAIRS_QUERY_ID,
    {},
    PING_FREQUENCY,
  );

  const response = await fetch(
    `${DUNE_API_EXECUTION_ENDPOINT}${uniswapUsdcWethPairsResultStatus.execution_id}/results`,
    {
      method: "get",
      headers: {
        "X-DUNE-API-KEY": Config.ENV.DUNE_API_KEY,
      },
    },
  );

  const { result } = await parseResponse<ResultsResponse>(response);

  return result?.rows;
}

async function getUniswapUsdcWethSwapsCountAndTotalVolume(duneClient: DuneClient) {
  const uniswapUsdcWethSwapsCountAndTotalVolume = await duneClient.refreshResults(
    UNISWAP_USDC_WETH_SWAPS_COUNT_AND_VOLUME_QUERY_ID,
    {},
    PING_FREQUENCY,
  );

  const response = await fetch(
    `${DUNE_API_EXECUTION_ENDPOINT}${uniswapUsdcWethSwapsCountAndTotalVolume.execution_id}/results`,
    {
      method: "get",
      headers: {
        "X-DUNE-API-KEY": Config.ENV.DUNE_API_KEY,
      },
    },
  );

  const { result } = await parseResponse<ResultsResponse>(response);

  return result?.rows;
}

async function getUniswapUsdcWethTopRoutingPath(duneClient: DuneClient) {
  const uniswapUsdcWethTopRoutingPath = await duneClient.refreshResults(
    UNISWAP_USDC_WETH_TOP_ROUTING_PATH_QUERY_ID,
    {},
    PING_FREQUENCY,
  );

  const response = await fetch(
    `${DUNE_API_EXECUTION_ENDPOINT}${uniswapUsdcWethTopRoutingPath.execution_id}/results`,
    {
      method: "get",
      headers: {
        "X-DUNE-API-KEY": Config.ENV.DUNE_API_KEY,
      },
    },
  );

  const { result } = await parseResponse<ResultsResponse>(response);

  return result?.rows;
}

export {
  getUniswapUsdcWethCreatedPair,
  getUniswapUsdcWethSwapsCountAndTotalVolume,
  getUniswapUsdcWethTopRoutingPath,
};
