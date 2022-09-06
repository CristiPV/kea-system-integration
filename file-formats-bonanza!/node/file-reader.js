const chalk = require("chalk");
const fs = require("fs");
const yml = require("js-yaml");
const xml = require("xml2js");
const csv = require("csv");

const jsonFile = require("../files/file4.json");

function readTxt() {
  return fs.readFileSync(`${getFilesDirectory()}/file1.txt`, {
    encoding: "utf-8",
  });
}

function readYml() {
  const rawFile = fs.readFileSync(`${getFilesDirectory()}/file2.yml`, {
    encoding: "utf-8",
  });
  return yml.load(rawFile);
}

function readXml() {
  const rawFile = fs.readFileSync(`${getFilesDirectory()}/file3.xml`, {
    encoding: "utf-8",
  });
  const xmlParser = new xml.Parser();
  xmlParser.parseString(rawFile, (_, result) => console.log(result));
}

function readCsv() {
  const rawFile = fs.readFileSync(`${getFilesDirectory()}/file5.csv`, {
    encoding: "utf-8",
  });
  return csv
    .parse(rawFile, { delimiter: "|" })
    .pipe(csv.transform((record) => record.map((value) => value.toUpperCase())))
    .pipe(csv.stringify({ quoted: true }))
    .pipe(process.stdout);
}

function readAll() {
  printSpacer();
  console.log(chalk.red("Text file: "), chalk.green(readTxt()));
  printSpacer();
  console.log(chalk.red("Yaml file: "), readYml());
  printSpacer();
  console.log(chalk.red("Xml file: "));
  readXml();
  printSpacer();
  console.log(chalk.red("Json file: "), jsonFile);
  printSpacer();
  console.log(chalk.red("Csv file: "));
  readCsv();
}

function printSpacer() {
  console.log(
    chalk.blueBright("\n*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*\n")
  );
}

function getFilesDirectory() {
  const currentDirectory = __dirname.split("/");
  currentDirectory.pop();
  currentDirectory.push("files");

  return currentDirectory.join("/");
}

readAll();
