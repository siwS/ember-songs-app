import { test } from 'qunit';
import moduleForAcceptance from 'embercom-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | songs list');

test('visiting /songs-list', function(assert) {
  visit('/songs-list');

  andThen(function() {
    assert.equal(currentURL(), '/songs-list');
  });
});
