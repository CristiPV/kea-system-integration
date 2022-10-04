import fs from "fs";
import path from "path";
import yml from "js-yaml";
import xml from "xml2js";
import * as csv from "csv";

import jsonFile from "../files/file4.json" assert { type: "json" };

export function readTxt() {
  return fs.readFileSync(path.resolve("./files/file1.txt"), {
    encoding: "utf-8",
  });
}

export function readYml() {
  const rawFile = fs.readFileSync(path.resolve("./files/file2.yml"), {
    encoding: "utf-8",
  });
  return yml.load(rawFile);
}

export function readXml() {
  const rawFile = fs.readFileSync(path.resolve("./files/file3.xml"), {
    encoding: "utf-8",
  });
  const xmlParser = new xml.Parser();
  return xmlParser.parseStringPromise(rawFile);
}

export function readJson() {
  return jsonFile;
}

export function readCsv(callback) {
  const rawFile = fs.readFileSync(path.resolve("./files/file5.csv"), {
    encoding: "utf-8",
  });
  return csv.parse(
    rawFile,
    { delimiter: "|" },
    (error, content) => {
      callback(content);
    }
  );
}
