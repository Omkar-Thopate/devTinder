const express = require("express");

const app = express();                                                                  // calling server

app.use("/test", (req, res) => {
    res.send("Hello from the server!");
});

app.listen(3000, () => {
    console.log("Server is successfully listening on port 3000");
});                                                                                     //listener enabled on port 3000