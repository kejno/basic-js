module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    else if (arr.length == 0) {
        return [];
    }

    let res = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-prev") {
            arr[i - 1] !== undefined ? res.pop() : null
        }

        else if (arr[i] === "--discard-next") i++;

        else if (arr[i] === "--double-prev") {
            arr[i - 1] !== undefined ? res.push(arr[i - 1]) : null
        }

        else if (arr[i] === "--double-next") {
            arr[i + 1] !== undefined ? res.push(arr[i + 1]) : null
        }

        else res.push(arr[i])
    }

    return res
};
