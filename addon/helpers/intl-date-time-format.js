import { helper } from '@ember/component/helper';

/**
 * Perform date time format of value.
 *
 * @param {string} locale The BCP 47 locale.
 * @param {Object} value The date time value.
 * @param {Object} hash The optional hash of options.
 */
export function intlDateTimeFormat([locale, value, hash = {}]) {
  if (!Intl || !Intl.DateTimeFormat) {
    return `${value.toLocaleDateString()} ${value.toLocaleTimeString()}`;
  }

  const dateTimeFormat = new Intl.DateTimeFormat(locale, hash);
  const format = dateTimeFormat.format(value);
  return format;
}

export default helper(intlDateTimeFormat);
