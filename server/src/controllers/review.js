import db from '../config/mysql.js'

const createReviews = (req, res) => {
    try {
        const { movieName, movieReview } = req.body;

        const sqlInsert = `INSERT INTO movieReview (movieName,movieReview) VALUES ('${movieName}','${movieReview}')`
        db.query(sqlInsert, (err, results) => {
            if (err) {
                res.status(400).send(err)
            }
            res.status(201).send(results)
        })
    }
    catch (err) {
        res.status(500).send({ message: `server side Error ${err}` })
    }
}
const getReviews = (req, res) => {
    try {
        const sqlInsert = `SELECT * FROM movieReview`
        db.query(sqlInsert, (err, results) => {
            if (err) {
                res.status(400).send(err)
            }
            res.status(200).send({message:"success",data:results})
        })
    }
    catch (err) {
        res.status(500).send({ message: `server side Error ${err}` })
    }
}
export { createReviews, getReviews }