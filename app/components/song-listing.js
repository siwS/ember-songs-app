import Ember from 'ember';

// how a component behaves

export default Ember.Component.extend({
  isWide: false, // cause we want the image to be small in the beginning

  actions: {
    toggleImageSize() {

      this.toggleProperty('isWide');
    }
  }
});
