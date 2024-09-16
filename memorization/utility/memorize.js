
/**
 * Memoizes a function, so that it will only be called once for each set of
 * arguments. The result of the function will be cached and returned
 * immediately when the same arguments are given again.
 *
 * @param {Function} fn - The function to memoize.
 * @param {Function} [getKey=JSON.stringify] - A function that takes the
 *     arguments to the memoized function and returns a key to use in the
 *     cache. The default is `JSON.stringify`, which works for most use
 *     cases.
 * @returns {Function} The memoized function.
 */
function memorize(fn, getKey = JSON.stringify, maxCacheSize = 100) {
    const cache = new Map()

    return function (...args) {
        const key = getKey(args)
        if (cache.has(key)) {
            return cache.get(key)
        }
        const result = fn(...args)
        if (cache.size >= maxCacheSize) {
            cache.delete(cache.keys().next().value) // this will remove the oldest entry
        }
        cache.set(key, result)
        return result
    }
}

module.exports = memorize