"use strict";

const expect = require("chai").expect;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);
const testcases = require("./basic_testcases.json");

describe("Binet's formula", () => {
  testcases.forEach((testcase) => {

    it(testcase.title, () => {
      return app.run([testcase.input]).spread((exitCode, stdOut) => {
        expect(exitCode).to.equal(0, "expect CLI to exit with status code 0");

        let result = parseInt(stdOut.join(""));
        expect(result).to.be.not.NaN
        expect(result).to.equal(testcase.output);
      });
    });
  });
});
