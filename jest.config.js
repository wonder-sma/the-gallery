"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
        'resources': 'usable'
    },
};
