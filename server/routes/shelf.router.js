const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  res.sendStatus(200); // For testing only, can be removed
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  // endpoint functionality
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
