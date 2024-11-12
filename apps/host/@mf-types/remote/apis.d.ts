
    export type RemoteKeys = 'remote/button' | 'remote/store';
    type PackageType<T> = T extends 'remote/store' ? typeof import('remote/store') :T extends 'remote/button' ? typeof import('remote/button') :any;