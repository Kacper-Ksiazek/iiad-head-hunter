import type {Config} from 'jest'

const config: Config = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.svelte$': 'svelte-jester',
        '^.+\\.ts$': 'ts-jest',
    },
    moduleFileExtensions: ['js', 'ts', 'svelte'],
    // setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect' ],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1', // Adjust the path accordingly
    },

}

export default config;