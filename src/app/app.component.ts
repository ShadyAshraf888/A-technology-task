import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'A-technology-task';
  languages: any[] | undefined;
  selectedLanguage: any | undefined;

  constructor(private _TranslateService: TranslateService) {}

  ngOnInit() {
    this.languages = [
      { name: 'English', code: 'en' },
      { name: 'Arabic', code: 'ar' },
    ];
    this.selectedLanguage = this.languages[1];
    this._TranslateService.setDefaultLang('ar');
  }
  changeLanguage(event: any) {
    this._TranslateService.use(event.value.code);
    console.log(event);
    console.log(event.value.code);
    console.log(this._TranslateService.use(event.value.code));
  }
}
