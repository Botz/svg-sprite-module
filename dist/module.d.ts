import * as _nuxt_schema from '@nuxt/schema';
import { OptimizeOptions } from 'svgo';

interface ModuleOptions {
    input?: string;
    output?: string;
    iconsPath: string;
    defaultSprite?: string;
    optimizeOptions?: OptimizeOptions;
}
declare const _default: _nuxt_schema.NuxtModule<ModuleOptions>;

export { ModuleOptions, _default as default };
