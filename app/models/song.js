import DS from 'ember-data';


export default DS.Model.extend({
  title: DS.attr(),
  composer: DS.attr(),
  duration: DS.attr(),
  image: DS.attr(),
  genre: DS.attr(),
});
