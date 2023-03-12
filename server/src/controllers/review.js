import db from '../config/mysql.js'

const createReviews = (req, res) => {
    try {
        const { movieName, movieReview } = req.body;

        const sqlInsert = `INSERT INTO movieReview (movieName,movieReview) VALUES ('${movieName}','${movieReview}')`
        db.query(sqlInsert, (err, results) => {
            if (err) {
                return res.status(400).send(err)
            }
            return res.status(201).send(results)
        })
    }
    catch (err) {
        return res.status(500).send({ message: `server side Error ${err}` })
    }
}
const getReviews = (req, res) => {
    try {
        const sqlInsert = `SELECT * FROM movieReview`
        db.query(sqlInsert, (err, results) => {
            if (err) {
                return res.status(400).send(err)
            }
            return res.status(200).send({ message: "success", data: results })
        })
    }
    catch (err) {
        return res.status(500).send({ message: `server side Error ${err}` })
    }
}
const updateData = (req, res) => {
    try {
        // const movieName=req.params.id
        console.log(req.body)
        const {movieName,movieReview} = req.body
        const sqlInsert = `UPDATE movieReview SET movieReview=? WHERE movieName=?`
        console.log(sqlInsert)
        db.query(sqlInsert,[movieReview,movieName], (err, results) => {
            if (err) {
                return res.status(400).send(err)
            }
            console.log(results)
            return res.status(200).send({ message: "success", data: results })
        })
    }
    catch (err) {
        return res.status(500).send({ message: `server side Error ${err}` })
    }
}
const deleteData = (req, res) => {
    try {
        const  movieName  = req.params.id
        const sqlInsert = `DELETE FROM movieReview WHERE movieName='${movieName}'`
        db.query(sqlInsert, (err, results) => {
            if (err) {
                return res.status(400).send(err)
            }
            return res.status(200).send({ message: "success", data: results })
        })
    }
    catch (err) {
        return res.status(500).send({ message: `server side Error ${err}` })
    }
}
export { createReviews, getReviews, updateData,deleteData }