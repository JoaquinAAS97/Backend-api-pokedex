import { Module } from '@nestjs/common';
import { FetchAdapter } from './adapter/fetch.adapter';

@Module({
    providers: [
        {
            provide: 'HttpAdapter', // token del contrato
            useClass: FetchAdapter, // Implementación elegida, se puede cambiar por FetchAdapter
        },
    ],
    exports: ['HttpAdapter'], // <-- Se exporta el contrato.
})
export class CommonModule { }
