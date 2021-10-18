const express =require("express");
const app = express();
const { createProxyMiddleware } =require("http-proxy-middleware");
const server = require("http").Server(app);
const next = require("next");
const path = require('path')
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const http01 = require('le-challenge-fs').create({ webrootPath: '/tmp/acme-challenges' })

const S3 = {
    bucketName: 'firstletter-multimedia',
    region: "ap-south-1",
    accessKeyId: "AKIA5B57ULBUO35OYLXA",
    secretAccessKey: "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"
}
const store = require('le-store-s3').create({ S3 })


nextApp.prepare().then(() => {

    app.all("*", (req, res) => handle(req, res));
    const greenlock = require('greenlock-express').create({
        server: 'https://acme-v02.api.letsencrypt.org/directory',
        version: 'draft-11',
        configDir: path.join(__dirname, 'acme'),
        approveDomains,
        app: app.use('/',
            createProxyMiddleware({
                target: 'http://pfolio.site',
                changeOrigin: true
            })
        ),
        communityMember: true,
        store,
        debug: process.env.NODE_ENV === 'development',
        renewBy: 10 * 24 * 60 * 60 * 1000,
        renewWithin: 14 * 24 * 60 * 60 * 1000
    })

    function approveDomains(opts, certs, cb) {
        opts.challenges = { 'http-01': http01 }
        opts.email = "sumit.firstletter@gmail.com"
    
        if (certs) {
            opts.domains = [certs.subject].concat(certs.altnames)
        }
        opts.agreeTos = true
        cb(null, { options: opts, certs: certs })
    }
    greenlock.listen(80, 443)
    // server.listen(PORT, err => {
    //     if (err) throw err;
    //     console.log("Express server running");
    // });
});
