export const resolveMenuPath = (keyPath) => {
    return `/${keyPath.reverse().join('/')}`
}