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
 * @param {string} key The key of the object entry that might be created on a new object
 * @example
 * import {ensureObject} from "magina"
 * ensureObject("abc", "importantKey")
 * // { importantKey: "abc" }
 * @returns {object} An object
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

/**
 * Returns `value`, or `value[key]` if `value` is not an object
 * @param {*} value The value that might be an object
 * @param {string} key The key whose value gets used on possible unpacking
 * @example
 * import {unpackObject} from "magina"
 * unpackObject({id: "abc"}, "id")
 * // "abc"
 * @returns {object} Either the value or an unpacked value
 */
export const unpackObject = (value, key) => {
  if (value |> isObject) {
    return value[key]
  } else {
    return value
  }
}