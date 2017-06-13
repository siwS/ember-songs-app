export default function() {
  this.namespace = '/api';

  // mocks up the db with contained data.
  let songs = [{
    type: 'songs',
    id: 'sound-of-silence',
    attributes: {
      title: 'Sound of Silence',
      composer: 'Veruca Salt',
      genre: 'Accoustic',
      duration: '3:09',
      image: 'https://i.ytimg.com/vi/4zLfCnGVeL4/hqdefault.jpg'
    }
  }, {
    type: 'songs',
    id: 'this-mess-we-are-in',
    attributes: {
      title: 'This Mess we are in',
      composer: 'PJ Harvey',
      genre: 'Soft Rock',
      duration: '4:09',
      image: 'https://images.991.com/180x180/PJ+Harvey+Stories+From+The+City+Stories+-168794.jpg'
    }
  }, {
    type: 'songs',
    id: 'friday-night',
    attributes: {
      title: 'Friday night',
      composer: 'Chinawoman',
      genre: 'Ballad',
      duration: '2:07',
      image: 'https://i.ytimg.com/vi/cnPjc1RvhQ0/hqdefault.jpg'
    }
  }]

  // filters the songs if query parameters are set.
  this.get('/songs', function(db, request) {
    if(request.queryParams.genre !== undefined) {
      let filteredSongs = songs.filter(function(i) {
        return i.attributes.genre.toLowerCase().indexOf(request.queryParams.genre.toLowerCase()) !== -1;
      });
      return { data: filteredSongs };
    } else {
      return { data: songs };
    }
  });

  // Find and return the provided song from our song list above.
  this.get('/songs/:id', function (db, request) {
    return { data: songs.find((song) => request.params.id === song.id) };
  });
}
