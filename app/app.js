const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

let playlist = [
  { id: 1, title: 'Imagine', artist: 'John Lennon' },
  { id: 2, title: 'Bohemian Rhapsody', artist: 'Queen' },
  { id: 3, title: 'Billie Jean', artist: 'Michael Jackson' }
];

// Ruta para mostrar playlist
app.get('/playlist', (req, res) => {
  res.json(playlist);
});

// Página principal (simple UI)
app.get('/', (req, res) => {
  res.send(`
    <h1>Playlist Musical</h1>
    <ul>
      ${playlist.map(song => `<li>${song.title} - ${song.artist}</li>`).join('')}
    </ul>
    <form method="POST" action="/add">
      <input name="title" placeholder="Título" required />
      <input name="artist" placeholder="Artista" required />
      <button type="submit">Agregar canción</button>
    </form>
  `);
});

// Agregar canción
app.post('/add', (req, res) => {
  const { title, artist } = req.body;
  playlist.push({ id: playlist.length + 1, title, artist });
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
