module.exports = {
    moduleFileExtensions: ['js'],
    transformIgnorePatterns: ['/node_modules/'],
    testMatch: ['**/tests/*.(js)|**/tests/unit/**/*.spec.(js)|**/__tests__/*.(js)'],
    testPathIgnorePatterns: ['/node_modules/', '/client'],
    testURL: 'http://localhost/'
}
