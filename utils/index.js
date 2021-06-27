const fs = require("fs");
const sharp = require("sharp");

const [small, medium, large] = [550, 835, 1120],
  sizes = Object.entries({ small, medium, large });

fs.readdir(`${__dirname}/images`, (errors, fileNames) => {
  !errors &&
    fileNames.forEach((fileName) => {
      sizes.forEach(([sizeName, width]) => {
        sharp(`${__dirname}/images/${fileName}`)
          .resize({ width })
          .toFile(
            `${__dirname}/../assets/images/restaurants/${sizeName}/${fileName}`
          );
      });
    });
});
