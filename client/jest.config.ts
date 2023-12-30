export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    moduleNameMapper: {
        '.+\\.svg?.+$': '<rootDir>/src/tests/__mocks__/fileMock.ts',
        '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    collectCoverageFrom: [
        'src/pages/**/*.{ts,tsx}',
        'src/components/**/*.{ts,tsx}',
        '!src/**/*.{test,spec,types}.{ts.tsx}',
    ],
}
