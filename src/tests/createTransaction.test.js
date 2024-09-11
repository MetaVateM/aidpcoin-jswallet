const AidpcoinWallet = require("../../dist/index.cjs");
const expect = require("chai").expect;
//Should have 10 AIDP on testnet
const mnemonic =
  "salad hammer want used web finger comic gold trigger accident oblige pluck";

const walletPromise = AidpcoinWallet.createInstance({
  mnemonic,
  network: "aidp-test",
  offlineMode: true,
});

it("Transaction should have AIDP fee", async () => {
  const options = {
    toAddress: "mmmjadMR4LkmHjg7VHQSj3hyp9NjWidzT9",
    amount: 1,
  };
  const wallet = await walletPromise;
  const sendResult = await wallet.createTransaction(options);
  expect(sendResult.debug.fee).to.be.greaterThan(0);
  return true;
});
