import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | intl-date-time-format', function(hooks) {
  setupRenderingTest(hooks);

  test('can format date time as chicago', async function(assert) {
    const locale = 'en-US';
    const value = new Date(Date.UTC(2012, 11, 20, 3, 10, 32));
    const hash = {
      localeMatcher: 'best fit',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
      timeZone: 'America/Chicago'
    };

    this.set('locale', locale);
    this.set('value', value);
    this.set('hash', hash);

    await render(hbs`{{intl-date-time-format locale value hash}}`);

    assert.equal(this.element.textContent.trim(), 'December 19, 2012, 9:10:32 PM');
  });

  test('can format date time as los angeles', async function(assert) {
    const locale = 'en-US';
    const value = new Date(Date.UTC(2012, 11, 20, 3, 10, 32));
    const hash = {
      localeMatcher: 'best fit',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
      timeZone: 'America/Los_Angeles'
    };

    this.set('locale', locale);
    this.set('value', value);
    this.set('hash', hash);

    await render(hbs`{{intl-date-time-format locale value hash}}`);

    assert.equal(this.element.textContent.trim(), '12/19/2012, 19:10:32');
  });

  test('can format date time with default options', async function(assert) {
    const locale = 'en-US';
    const value = new Date(Date.UTC(2012, 11, 20, 3, 10, 32));
    const hash = {
      timeZone: 'America/Chicago'
    };

    this.set('locale', locale);
    this.set('value', value);
    this.set('hash', hash);

    await render(hbs`{{intl-date-time-format locale value hash}}`);

    assert.equal(this.element.textContent.trim(), '12/19/2012');
  });

  test('can format date time with no intl support', async function(assert) {
    const intl = window.Intl;
    window.Intl = null;

    const locale = 'en-US';
    const value = new Date(Date.UTC(2012, 11, 20, 3, 10, 32));

    this.set('locale', locale);
    this.set('value', value);

    await render(hbs`{{intl-date-time-format locale value}}`);

    window.Intl = intl;

    assert.equal(this.element.textContent.trim().length > 0, true);
  });
});
