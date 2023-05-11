import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio-ng';
  translation: string;
  class = ''

  constructor(private readonly translateService: TranslateService) {

  }

  ngOnInit(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
  }

  switchLanguage(lang: string) {
    this.translateService.use(lang);
  }

  getTranslation(key: string): string {
    
    this.translateService.get(key).subscribe((res: string) => {
      this.translation = res;
    });
    return this.translation;
  }

  onClick() {
    this.class = this.class === '' ? 'dark' : ''
    console.log(this.class);
  }
}
