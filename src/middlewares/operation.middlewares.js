export function handleOperationsError(err, req, res, next) {
    switch (err.code) {
        case 101:
            console.log(err.message);
            res.redirect("/operaciones/operation-error")
            break;
        default:
            console.log("no se que paso");
            break;
    }
}