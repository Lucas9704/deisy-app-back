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
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
	res.send("<div>Welcome to the API</div>"
		+ "<div>Version 1 Documentation in progress...</div>"
		+ "<div>Test API v1 Get all Pets: /api/v1/pets?size=10&page=1?name=deisy </div>"
		+ "<div>size: cant elements for page</div>"
		+ "<div>page: page number</div>"
		+ "<div>name: name of pet (optional)</div>"
		
		);
});

app.use("/api/v1", PetsRoutesV1);
app.use("/api/v1", UsersRoutesV1);
app.use("/api/v1", PostsRoutesV1);

export default app;
