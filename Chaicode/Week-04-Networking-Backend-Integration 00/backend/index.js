import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }))

app.get("/api/v1/hello-world", (req, res) => {
    return res.json({ data: "Hello World" }).status(200)
})

app.listen(3000, () => {
    console.log("Server is runnning");
})