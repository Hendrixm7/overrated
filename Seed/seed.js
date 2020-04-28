const faker = require("faker/locale/en_US");
const axios = require("axios");
const fs = require("fs");
const path = require("path");
const bottleneck = require("bottleneck");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const limiter = new bottleneck({
  minTime: 333,
});

const seed = () => {
  fs.readFile(
    path.join(__dirname, "./fixtures/restaurants_shortened.txt"),
    "utf8",
    (err, data) => {
      if (err) throw err;

      data.split("\n").map(async (name) => {
        const address = `${faker.address.streetAddress()} ${faker.address.streetName()}, ${faker.address.city()}, FL ${faker.address.zipCode()}`;

        limiter
          .schedule(() =>
            axios.post("https://localhost:5001/api/Restaurant/", {
              name,
              location: address,
              imageThumbnail: faker.image.food(),
            })
          )
          .then((res) => {
            const id = res.data.id;
            const rnd = Math.floor(Math.random() * 10);

            for (let i = 0; i < rnd; i++) {
              limiter.schedule(() =>
                axios.post("https://localhost:5001/api/Feedback/", {
                  restaurantId: id,
                  overrated: Math.random() >= 0.5,
                  comment: faker.lorem.paragraph(),
                })
              );
            }
          })
          .catch((err) => {
            console.error("ERROR: ", err);
          });
      });
    }
  );
};

seed();
