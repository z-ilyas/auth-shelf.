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
  sqlText = `SELECT * FROM "item" WHERE "user_id" = $1`;
  sqlValue = [req.user.id];
  pool
    .query(sqlText, sqlValue)
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
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  // endpoint functionality
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
