const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');


/**
 * Get all of the items on the shelf
 */
router.get('/', rejectUnauthenticated, (req, res) => {

  //user id?
  console.log('req.user.id:', req.user.id);

  //select from shelf, where user_id is req.user.id
  // sqlText = `SELECT * FROM "item" WHERE "user_id" = $1`;
  sqlText = `SELECT * FROM "item"`;

  sqlValue = [req.user.id];
  pool
    .query(sqlText)
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error making SELECT for shelf items:', error);
      res.sendStatus(500);
    })
  //res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
  console.log(req.body);
  const description = req.body.description
  const image = req.body.image
  const userID = req.user.id

  const createShelf = `
  INSERT INTO "item" ("description", "image_url", "user_id")
  VALUES ($1, $2, $3);`;
  pool.query(createShelf, [description, image, userID])
  .then(result => {
    res.sendStatus(201);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500)
  })
});


/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  
  if (req.user != undefined) {
    idToDelete = req.params.id;
    userID = req.user.id;

    sqlQuery = `DELETE FROM item WHERE item.id=$1 AND item.user_id=$2;`
    sqlValues = [idToDelete, userID]

    pool
    .query(sqlQuery, sqlValues)
    .then(response => {
      res.send(200)
    })
    .catch(error => {
      console.log('Error deleting from database', error)
    })
  } else {
    console.log('User Not Logged In');
  }


});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
