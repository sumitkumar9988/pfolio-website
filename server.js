const app =require('./app');
const axios = require("axios");
const path = require("path");
require('dotenv').config();
const http01 = require("le-challenge-fs").create({
  webrootPath: "/tmp/acme-challenges",
});
// const api = require("./src/url");

const S3 = {
  bucketName: process.env.bucketName,
  region: process.env.region,
  accessKeyId:process.env.accessKeyId ,
  secretAccessKey:process.env.secretAccessKey ,
};
const store = require("le-store-s3").create({ S3 });

const greenlock = require("greenlock-express").create({
  server: "https://acme-v02.api.letsencrypt.org/directory",
  version: "draft-11",
  configDir: path.join(__dirname, "acme"),
  approveDomains,
  app:  function (req, res) {
    require('./app.js')(req, res);
  },
  communityMember: true,
  store,
  debug: process.env.NODE_ENV === "development",
  renewBy: 10 * 24 * 60 * 60 * 1000,
  renewWithin: 14 * 24 * 60 * 60 * 1000,
});

function approveDomains(opts, certs, cb) {
    opts.challenges = { 'http-01': http01 }
    opts.email = "sumit.firstletter@gmail.com"

    if (certs) {
        opts.domains = [certs.subject].concat(certs.altnames)
    }
    opts.agreeTos = true
    cb(null, { options: opts, certs: certs })
}

// function approveDomains(opts, certs, cb) {
//   opts.challenges = { "http-01": http01 };
//   opts.email = "sumit.firstletter@gmail.com";

//   if (certs) {
//     opts.domains = [certs.subject].concat(certs.altnames);
//   }

//   checkDomain(opts.domains, (err, agree) => {
//     if (err) {
//       cb(err);
//       return;
//     }
//     opts.agreeTos = agree;
//     cb(null, { options: opts, certs: certs });
//   });
// }

// function checkDomain(domains, cb) {
//   const userAgrees = true;
//   if (domains[0]) {
//     console.log(domains[0]);
//     axios
//       .post(
//         `${api}/profile/check-domain`,
//         {
//           domain: domains[0],
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//       .then((res) => {
//         cb(null, userAgrees);
//       })
//       .catch((err) => {
//         cb(err);
//       });
//   } else {
//     cb(new Error("No domain found"));
//   }
// }
greenlock.listen(80, 443);
