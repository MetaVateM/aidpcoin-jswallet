import { ChainType } from "./Types";


export function getBaseCurrencyByNetwork(network: ChainType): string {
  const map = {
    evr: "EVR",
    "evr-test": "EVR",
    rvn: "AIDP",
    "aidp-test": "AIDP",
  };
  return map[network];
}
