export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    automock: false,
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
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
    testEnvironmentOptions: {
        customExportConditions: [''],
    },
}
