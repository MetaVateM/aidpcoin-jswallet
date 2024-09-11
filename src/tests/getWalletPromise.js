const AidpcoinWallet = require("../../dist/index.cjs");

//Account "Crazy Cat" on https://testnet.ting.finance/
const mnemonic =
  "mesh beef tuition ensure apart picture rabbit tomato ancient someone alter embrace";

const walletPromise = AidpcoinWallet.createInstance({
  mnemonic,
  network: "aidp-test",
});

module.exports = walletPromise;
