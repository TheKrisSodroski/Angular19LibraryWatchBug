import { provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders, provideAppInitializer, Provider } from '@angular/core';
import { MyTestLibraryService } from './my-test-library.service';

export function provideMyProviderFunction(

): EnvironmentProviders {
    console.log("OriginalText");
    console.log("Not Original Text")
    const providers: Array<Provider | EnvironmentProviders> = [
        provideHttpClient(),
        provideAppInitializer(() => {
            debugger;
            const component = new MyTestLibraryService();
            return component.init();
           
        })
    ];

    return {
        ɵproviders: providers,
    } as unknown as EnvironmentProviders;
}
