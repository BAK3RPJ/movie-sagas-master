const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => { // fetches all movie data from movies table in db
  const queryText = 'SELECT * FROM "movies" ORDER BY id';
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT movies query', err);
      res.sendStatus(500);
    });
});

// router.post('/', (req, res) => {
//   const newPlant = req.body;
//   const queryText = `INSERT INTO plant ("name", "kingdom", "clade", "order", "family", "subfamily", "genus")
//                     VALUES ($1, $2, $3, $4, $5, $6, $7)`;
//   const queryValues = [
//     newPlant.name,
//     newPlant.kingdom,
//     newPlant.clade,
//     newPlant.order,
//     newPlant.family,
//     newPlant.subfamily,
//     newPlant.genus,
//   ];
//   pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(201); })
//     .catch((err) => {
//       console.log('Error completing SELECT plant query', err);
//       res.sendStatus(500);
//     });
// });

// router.delete('/:id', (req, res) => {
//   const queryText = 'DELETE FROM plant WHERE id=$1';
//   pool.query(queryText, [req.params.id])
//     .then(() => { res.sendStatus(200); })
//     .catch((err) => {
//       console.log('Error completing SELECT plant query', err);
//       res.sendStatus(500);
//     });
// });

module.exports = router;
