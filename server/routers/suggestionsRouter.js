const express = require('express');
const router = express.Router();
const Suggestiondb = require('../models/suggestionSchema');

// to create suggestions
router.post('/suggestions', async (req, res) => {
  const { suggestionTitle, suggestionDescription } = req.body;
  try {
    const newSuggestion = new Suggestiondb({
      suggestionTitle,
      suggestionDescription,
    });
    await newSuggestion.save();
    res.status(201).json({ message: 'Suggestion submitted successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting suggestion' });
  }
});

// to fetch the suggestions
router.get('/Admin-suggestions', async (req, res) => {
    try {
      const suggestions = await Suggestiondb.find();
      res.status(200).json(suggestions);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
      res.status(500).json({ message: 'Error fetching suggestions' }); 
    }
  });



module.exports = router;
