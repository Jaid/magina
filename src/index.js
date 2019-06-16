/** @module magina */

import {isObjectLike} from "lodash"

const isObject = value => {
  if (Array.isArray(value)) {
    return false
  }
  return isObjectLike(value)
}

/**
 * Returns `value`, or `[value]` if `value` is not an array
 * @param {*} value The value that will be converted to an array
 * @example
 * import {ensureArray} from "magina"
 * ensureArray("abc")
 * // ["abc"]
 * @returns {*[]} An array
 */
export const ensureArray = value => {
  if (value === undefined) {
    return []
  }
  if (Array.isArray(value)) {
    return value
  } else {
    return [value]
  }
}

/**
 * Returns `value`, or `{key: value}` if `value` is not an object
 * @param {*} value The value that will be converted to an array
 * @example
 * import {ensureObject} from "magina"
 * ensureObject("abc", "importantKey")
 * // { importantKey: "abc" }
 * @returns {object} An array
 */
export const ensureObject = (value, key) => {
  if (value === undefined) {
    return {}
  }
  if (value |> isObject) {
    return value
  } else {
    return {
      [key]: value,
    }
  }
}

export default ensureObject