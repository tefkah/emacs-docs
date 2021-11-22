import fs from "fs";
import { getPrefix } from "./init";

const rawDirs = "../raw_manuals";

const bestanden = fs.readdirSync(rawDirs);
const goodDirs = bestanden.map((dir) => dir.replaceAll(/\.html/g, ""));

goodDirs.forEach((dir) => {
  const list = fs.readdirSync(dir);
  const betterList = list.map((l) =>
    getPrefix(l)?.title?.replaceAll(/\.md/g, "").replaceAll(/ /g, "-")
  );
  fs.writeFileSync(`${dir}.json`, JSON.stringify(betterList));
});

console.log(bestanden);
