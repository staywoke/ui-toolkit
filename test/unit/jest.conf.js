const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue'
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/unit/fileMock.js',
    '\\.(css|less)$': '<rootDir>/test/unit/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest'
  },
  testPathIgnorePatterns: [],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: ['<rootDir>/test/unit/setup'],
  coverageDirectory: '<rootDir>/test/unit/coverage',
  collectCoverageFrom: [
    'src/**/*.vue',
    '!**/node_modules/**',
    // These components are third party components that can't easily be tested locally ( but have their own external tests )
    '!src/components/atoms/breadcrumb-item/*',
    '!src/components/atoms/carousel-item/*',
    '!src/components/atoms/collapse-item/*',
    '!src/components/atoms/dropdown-item/*',
    '!src/components/atoms/form-item/*',
    '!src/components/atoms/menu-item/*',
    '!src/components/atoms/option/*',
    '!src/components/atoms/popover/*',
    '!src/components/atoms/scrollbar/*',
    '!src/components/atoms/spinner/*',
    '!src/components/atoms/tab-pane/*',
    '!src/components/atoms/tooltip/*',
    '!src/components/molecules/dropdown/*',
    '!src/components/molecules/dropdown-menu/*',
    '!src/components/molecules/menu-item-group/*',
    '!src/components/molecules/option-group/*',
    '!src/components/molecules/submenu/*'
  ]
}
