import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | toy-robot-description', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:toy-robot-description');
    assert.ok(route);
  });
});
