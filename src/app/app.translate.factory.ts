import { TranslateLoader } from '@ngx-translate/core';
import { Observable, from } from 'rxjs';

export class TranslateFactory implements TranslateLoader {
    public getTranslation(lang: string): Observable<any> {
        return from(import(`../assets/i18n/${lang}.json`))
    }
}

export const translateLoaderFactory = () => new TranslateFactory();