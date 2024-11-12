
    export type RemoteKeys = 'remote/button' | 'remote/store' | 'remote/bridge';
    type PackageType<T> = T extends 'remote/bridge' ? typeof import('remote/bridge') :T extends 'remote/store' ? typeof import('remote/store') :T extends 'remote/button' ? typeof import('remote/button') :any;