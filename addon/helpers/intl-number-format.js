import { helper } from '@ember/component/helper';

/**
 * Perform number format of value.
 *
 * @param {string} locale The BCP 47 locale.
 * @param {number} value The numeric value.
 * @param {Object} hash The optional hash of options.
 */
export function intlNumberFormat([locale, value, hash = {}]) {
  if (!Intl || !Intl.NumberFormat) {
    return value;
  }

  const numberFormat = new Intl.NumberFormat(locale, hash);
  const format = numberFormat.format(value);
  return format;
}

export default helper(intlNumberFormat);
