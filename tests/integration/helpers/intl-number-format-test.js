import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | intl-number-format', function(hooks) {
  setupRenderingTest(hooks);

  test('can format decimal number', async function(assert) {
    const locale = 'en-US';
    const value = 123456.789;
    const hash = { style: 'decimal', maximumFractionDigits: 2, useGrouping: true };

    this.set('locale', locale);
    this.set('value', value);
    this.set('hash', hash);

    await render(hbs`{{intl-number-format locale value hash}}`);

    assert.equal(this.element.textContent.trim(), '123,456.79');
  });

  test('can format currency number', async function(assert) {
    const locale = 'en-US';
    const value = 123456.7;
    const hash = { style: 'currency', currency: 'USD', currencyDisplay: 'symbol', useGrouping: true };

    this.set('locale', locale);
    this.set('value', value);
    this.set('hash', hash);

    await render(hbs`{{intl-number-format locale value hash}}`);

    assert.equal(this.element.textContent.trim(), '$123,456.70');
  });

  test('can format decimal number with default options', async function(assert) {
    const locale = 'en-US';
    const value = 123456.789;

    this.set('locale', locale);
    this.set('value', value);

    await render(hbs`{{intl-number-format locale value}}`);

    assert.equal(this.element.textContent.trim(), '123,456.789');
  });

  test('can format decimal number with no intl support', async function(assert) {
    const intl = window.Intl;
    window.Intl = null;

    const locale = 'en-US';
    const value = 123456.789;

    this.set('locale', locale);
    this.set('value', value);

    await render(hbs`{{intl-number-format locale value}}`);

    window.Intl = intl;

    assert.equal(this.element.textContent.trim(), '123456.789');
  });
});
