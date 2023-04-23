import type {Config} from 'jest';

const config: Config = {
    testPathIgnorePatterns: ['<rootDir>/dist/']
};

export default config;