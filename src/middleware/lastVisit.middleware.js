export const lastVisitMiddleware = (req, res, next) => {
    const previousVisit = req.cookies.lastVisit;

    if (previousVisit){
        req.lastVisit=previousVisit;
    }

    /* set /update the last visit cookie to current date and time */
    res.cookie("lastVisit",Date.now(),{
        maxAge: 7*24*60*60*1000, // 7 days
        httpOnly: true,
    });
    next();
};

