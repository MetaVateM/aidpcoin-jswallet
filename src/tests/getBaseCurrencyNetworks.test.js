const AidpcoinWallet = require("../../dist/index.cjs");
const expect = require("chai").expect;
const getBaseCurrencyByNetwork =
  AidpcoinWallet.default.getBaseCurrencyByNetwork;
it("getBaseCurrencyByNetwork", async () => {
  expect(getBaseCurrencyByNetwork("evr")).to.equal("EVR");
  expect(getBaseCurrencyByNetwork("evr-test")).to.equal("EVR");

  expect(getBaseCurrencyByNetwork("aidp")).to.equal("AIDP");
  expect(getBaseCurrencyByNetwork("aidp-test")).to.equal("AIDP");
});
