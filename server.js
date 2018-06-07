const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(`${__dirname}/public`));

app.get("/sitemap", (req, res) => {
    res.sendFile(`${__dirname}/sitemap.xml`);
});

app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/main.html`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
