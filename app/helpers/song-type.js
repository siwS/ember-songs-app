import Ember from 'ember';

const rockGenres = ['Folk Rock', 'Rock', 'Slowcore Rock'];


export function songType([filteredSongs]) {

  if (rockGenres.includes(filteredSongs)) {
    return 'Rock';
  }
  return 'Other';
}

export default Ember.Helper.helper(songType);
