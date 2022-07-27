import express from "express";
import morgan from "morgan";
import cors from "cors";
import PetsRoutesV1 from "./v1/routes/pets.routes";
import UsersRoutesV1 from "./v1/routes/users.routes";
import PostsRoutesV1 from "./v1/routes/posts.routes";

const app = express();

//settings
app.set("port", process.env.PORT || 3000);

//middlewares
const corsOptions = {
    origin: "http://localhost:4200"
}
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/api/v1", PetsRoutesV1);
app.use("/api/v1", UsersRoutesV1);
app.use("/api/v1", PostsRoutesV1);

export default app;
