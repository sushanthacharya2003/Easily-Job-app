import express from "express";
import path from "path";
import multer from "multer";
import session from "express-session";
import cookieParser from "cookie-parser";
import expressLayouts from "express-ejs-layouts";

// ✅ Import Routes
import authRoutes from "./src/routes/auth.routes.js";
import jobRoutes from "./src/routes/job.routes.js";
import applicationRoutes from "./src/routes/application.routes.js";
import { lastVisitMiddleware } from "./src/middleware/lastVisit.middleware.js";

// ✅ Create App
const app = express();

// ✅ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(lastVisitMiddleware);
app.use(expressLayouts);
app.set("layout", "layouts/layout");

// ✅ Session Setup
app.use(
  session({
    secret: "job-portal-secret",
    resave: false,
    saveUninitialized: false,
  })
);

// ✅ Static Files (CSS, JS, Uploaded Resumes)
app.use(express.static(path.resolve("src", "public")));

// ✅ View Engine (EJS)
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

// ✅ Routes
app.use("/auth", authRoutes);
app.use("/jobs", jobRoutes);
app.use("/applications", applicationRoutes);

app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});


// ✅ Default Route
app.get("/", (req, res) => {
  res.redirect("/jobs");
});
app.use((req, res) => {
  res.status(404).render("404");
});

export default app;

