
    export type RemoteKeys = 'remote/button';
    type PackageType<T> = T extends 'remote/button' ? typeof import('remote/button') :any;