export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
    src: string;
}

export interface BuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    apiUrl: string;
    port: number;
}
