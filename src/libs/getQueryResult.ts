import { type DuneClient, type ResultsResponse } from "@duneanalytics/client-sdk";
import { parseResponse } from "./helpers";
import { Config } from "./config";

const UNISWAP_USDC_WETH_PAIRS_QUERY_ID = 3851868;
const PING_FREQUENCY = 5;

async function getUniswapUsdcWethCreatedPair(duneClient: DuneClient) {
  const uniswapUsdcWethPairsResultStatus = await duneClient.refreshResults(
    UNISWAP_USDC_WETH_PAIRS_QUERY_ID,
    {},
    PING_FREQUENCY,
  );

  const response = await fetch(
    `https://api.dune.com/api/v1/execution/${uniswapUsdcWethPairsResultStatus.execution_id}/results`,
    {
      method: "get",
      headers: {
        "X-DUNE-API-KEY": Config.ENV.DUNE_API_KEY,
      },
    },
  );

  const { result } = await parseResponse<ResultsResponse>(response);

  return result;
}

export { getUniswapUsdcWethCreatedPair };
