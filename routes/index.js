const router = require('express').Router();
const store = require('../db/store');

router.get('/notes', (req, res) => {
  store.getNotes()
  .then((notes) => { res.json(notes);
    res.status(500).json({ error: 'Failed to retrieve notes.' });
      console.log(err)
  });
});

router.post('/notes', (req, res) => {
    
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => {
      res.status(500).json({ error: 'Failed to add note.' });
      console.log(err)
    });
});

router.delete('/notes/:id', (req, res) => {
  store.deleteNote(req.params.id)
  .then(() => res.json({ok: true}))
  .catch((err) => {
    res.status(500).json({ error: 'Failed to delete note.' });
    console.log(err)
  });

});


module.exports = router;
