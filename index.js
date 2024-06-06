const path = require("path");
const AdmZip = require("adm-zip");

function countDigitsInArchive(archivePath) {
  const digitCounts = Array(10).fill(0);
  const zip = new AdmZip(archivePath);

  const zipEntries = zip.getEntries();
  zipEntries.forEach((entry) => {
    if (!entry.isDirectory) {
      const content = entry.getData().toString("utf8");
      for (let char of content) {
        if (char >= "0" && char <= "9") {
          digitCounts[char - "0"]++;
        }
      }
    }
  });

  return digitCounts;
}

const archivePath = path.join(__dirname, "archive.zip");
const result = countDigitsInArchive(archivePath);
console.log(result);
