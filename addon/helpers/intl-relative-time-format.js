import { helper } from '@ember/component/helper';

/**
 * Perform relative time format of value.
 *
 * @param {string} locale The BCP 47 locale.
 * @param {number} value The numeric value.
 * @param {string} unit The time unit.
 * @param {Object} hash The optional hash of options.
 */
export function intlRelativeTimeFormat([locale, value, unit, hash = {}]) {
  if (!Intl || !Intl.RelativeTimeFormat) {
    return `${value} ${unit}`;
  }

  const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, hash);
  const format = relativeTimeFormat.format(value, unit);
  return format;
}

export default helper(intlRelativeTimeFormat);
