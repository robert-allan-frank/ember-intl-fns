import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | intl-relative-time-format', function(hooks) {
  setupRenderingTest(hooks);

  test('can format relative time as auto', async function(assert) {
    const locale = 'en-US';
    const value = -1;
    const unit = 'day';
    const hash = {
      localeMatcher: 'best fit',
      numeric: 'auto',
      style: 'short'
    };

    this.set('locale', locale);
    this.set('value', value);
    this.set('unit', unit);
    this.set('hash', hash);

    await render(hbs`{{intl-relative-time-format locale value unit hash}}`);

    assert.equal(this.element.textContent.trim(), 'yesterday');
  });

  test('can format relative time as always', async function(assert) {
    const locale = 'en-US';
    const value = -1;
    const unit = 'day';
    const hash = {
      localeMatcher: 'best fit',
      numeric: 'always',
      style: 'long'
    };

    this.set('locale', locale);
    this.set('value', value);
    this.set('unit', unit);
    this.set('hash', hash);

    await render(hbs`{{intl-relative-time-format locale value unit hash}}`);

    assert.equal(this.element.textContent.trim(), '1 day ago');
  });

  test('can format relative time with default options', async function(assert) {
    const locale = 'en-US';
    const value = 10;
    const unit = 'minute';

    this.set('locale', locale);
    this.set('value', value);
    this.set('unit', unit);

    await render(hbs`{{intl-relative-time-format locale value unit}}`);

    assert.equal(this.element.textContent.trim(), 'in 10 minutes');
  });

  test('can format relative time with no intl support', async function(assert) {
    const intl = window.Intl;
    window.Intl = null;

    const locale = 'en-US';
    const value = 10;
    const unit = 'minute';

    this.set('locale', locale);
    this.set('value', value);
    this.set('unit', unit);

    await render(hbs`{{intl-relative-time-format locale value unit}}`);

    window.Intl = intl;

    assert.equal(this.element.textContent.trim(), '10 minute');
  });
});
