import Ember from 'ember';

const rockGenres = ['Soft Rock', 'Rock', 'Hard Rock'];


export function songType([filteredSongs]) {

  if (rockGenres.includes(filteredSongs)) {
    return 'Rock';
  }
  return 'Other';
}

export default Ember.Helper.helper(songType);
