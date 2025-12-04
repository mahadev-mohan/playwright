module.exports = {
  default: {
    formatOptions: {
      snippetInterface: "async-await",
    },
    require: [
      "tests/pages/**/*.ts",
      "tests/steps/**/*steps.ts",
      "tests/support/**/*.ts",
      "tests/data/testData.json"
    ],
    requireModule: ["ts-node/register"],
    tags:"@test",
    parallel:3,
    dryRun:false,
    format: ["progress","html:reports/cucumber-report.html",
      "json:reports/cucumber-report.json"],
    
    paths: ["tests/features/**/*.feature"]
  }
  
};