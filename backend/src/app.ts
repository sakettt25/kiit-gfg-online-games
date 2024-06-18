import express from 'express';
import { config } from 'dotenv';
import connectDB from './configs/db';
import cors from 'cors';
import login from './routes/login_route';

config();

const PORT = process.env.PORT || 3000;

const app = express();
const corsOptions = { origin: '*', optionsSuccessStatus: 200};
app.use(cors(corsOptions));
app.use(express.json());

// define all routes here
app.use("/api/login",login)
app.use("/api/signup",login)

app.all("*", (_req, _res) => {
  _res.status(404).send("Page Not Found");
});


async function startServer() {
  await connectDB();
  app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`http://localhost:${PORT}`);
  });
}
startServer();
