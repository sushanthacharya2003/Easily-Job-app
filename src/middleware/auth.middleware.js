export const auth = (req, res, next) => {
    if (!req.session.user) {
      return res.redirect("/auth/login");
    }
    next();
  };

  export const recruiterOnly = (req, res, next) => {
    if (!req.session.user) {
      return res.redirect("/auth/login");
    }

    if (req.session.user.role !== "recruiter") {
      return res.status(403).render("404");
    }

    next();
  };

