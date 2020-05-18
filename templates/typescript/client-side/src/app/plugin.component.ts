import {
  Component,
  ViewEncapsulation,
  OnInit,
  OnDestroy
} from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "plugin",
  templateUrl: "./plugin.component.html",
  styleUrls: ["./plugin.component.scss"],
  providers: [

    ],
  // To override parent component styling
  encapsulation: ViewEncapsulation.None
})
export class PluginComponent implements OnInit, OnDestroy {

  installing: boolean = false;

  constructor(
    public translate: TranslateService
  ) {
    let userLang = 'en';
    translate.setDefaultLang(userLang);
    userLang = translate.getBrowserLang().split('-')[0]; // use navigator lang if available
    translate.use(userLang);
  }


  ngOnInit() {
  }

  ngOnDestroy() {
    
  }
}
