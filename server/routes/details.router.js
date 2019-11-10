const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/:id', (req, res) => {
    console.log(req.params.id)
  const queryText = `SELECT "movies"."id", "genres".name, "movies".title, "movies".poster, "movies".description FROM "genres"
    JOIN "movie-genres" ON "movie-genres"."genre-id" = "genres"."id"
    JOIN "movies" ON "movies"."id" = "movie-genres"."movie-id"
    WHERE "movies"."id" =$1;`;
  pool.query(queryText, [req.params.id])
    .then((result) => { 
        console.log(result.rows);
        res.send(result.rows); 
    })
    .catch((err) => {
      console.log('Error completing SELECT details query', err);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
    const updatedMovie = req.body;
  
    const queryText = `UPDATE "movies"
    SET "title" = $1, 
    "description" = $2 
    WHERE id=$3;`;
  
    const queryValues = [
      updatedMovie.title,
      updatedMovie.description,
      updatedMovie.id
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing Update movie query', err);
        res.sendStatus(500);
      });
  });

module.exports = router;
