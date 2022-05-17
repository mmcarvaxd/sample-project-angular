import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

import * as enUS from '../../../translations/en-US.json';
import * as ptBR from '../../../translations/pt-BR.json';

const languageKey = 'language';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  defaultLanguage!: string;
  supportedLanguages!: string[];

  private langChangeSubscription!: Subscription;

  /**
   * Sets the current language.
   * Note: The current language is saved to the local storage.
   * If no parameter is specified, the language is loaded from local storage (if present).
   * @param language The IETF language code to set.
   */
  set language(language: string) {
    let newLanguage =
      language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang() || '';
    let isSupportedLanguage = this.supportedLanguages.includes(newLanguage);

    if (newLanguage && !isSupportedLanguage) {
      newLanguage = newLanguage.split('-')[0];
      newLanguage =
        this.supportedLanguages.find((supportedLanguage) => supportedLanguage.startsWith(newLanguage)) || '';
      isSupportedLanguage = Boolean(newLanguage);
    }

    if (!newLanguage || !isSupportedLanguage) {
      newLanguage = this.defaultLanguage;
    }

    language = newLanguage;
    this.translateService.use(language);
  }

  /**
   * Gets the current language.
   * @return The current language code.
   */
  get language(): string {
    return this.translateService.currentLang;
  }

  constructor(private translateService: TranslateService) {
    translateService.setTranslation('en-US', enUS)
    translateService.setTranslation('pt-BR', ptBR)
  }
  /**
   * Initializes i18n for the application.
   * Loads language from local storage if present, or sets default language.
   * @param defaultLanguage The default language to use.
   * @param supportedLanguages The list of supported languages.
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {
    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = '';

    this.langChangeSubscription = this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem(languageKey, event.lang);
    });
  }
  
  /**
   * Cleans up language change subscription.
   */
  destroy() {
    if (this.langChangeSubscription) {
      this.langChangeSubscription.unsubscribe();
    }
  }
}
