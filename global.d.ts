

// Global compile-time constants
declare var __DEV__: boolean
declare var __TEST__: boolean
declare var __BROWSER__: boolean
declare var __GLOBAL__: boolean
declare var __ESM_BUNDLER__: boolean
declare var __ESM_BROWSER__: boolean
declare var __NODE_JS__: boolean
declare var __SSR__: boolean
declare var __COMMIT__: string
declare var __VERSION__: string
declare var __COMPAT__: boolean

// Feature flags
declare var __FEATURE_OPTIONS_API__: boolean
declare var __FEATURE_PROD_DEVTOOLS__: boolean
declare var __FEATURE_SUSPENSE__: boolean

// for tests
declare module 'expect' {
    interface AsymmetricMatchers {
        toShallowEqual(toMatch: string|number): void;
        toShallowMatchObject<T extends any[]>(received: T, toMatch: T): void;
    }
    interface Matchers<R> {
        toShallowEqual(toMatch: string|number): R;
        oShallowMatchObject<T extends any[]>(received: T, toMatch: T): R;
    }
}
