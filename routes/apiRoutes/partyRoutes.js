const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// GET route to READ all parties
router.get('/parties', (req, res) => {
    const sql = `SELECT * FROM parties`;
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
  // GET route to READ a single party
  router.get('/party/:id', (req, res) => {
    const sql = `SELECT * FROM parties WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err, row) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: row
      });
    });
  });
  
  // DELETE route to delete a party
  router.delete('/party/:id', (req,res) => {
    const sql = `DELETE FROM parties WHERE id = ?`;
    const params = [req.params.id];
    db.query(sql, params, (err,result) => {
      if (err) {
        res.status(400).json({ error:err.message });
        return;
        // checks if anything was deleted "zero affected rows"
      } else if (!result.affectedRows) {
        res.json({ 
          message: 'Party not found'
        });
      } else {
        res.json({
          message: 'deleted',
          changes: result.affectedRows,
          id: req.params.id
        });
      }
    });
  });
  
  module.exports = router;