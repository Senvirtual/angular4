import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenueComponent } from './menue/menue.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AnimeComponent } from './content/anime/anime.component';
import { ManngaComponent } from './content/mannga/mannga.component';
import { GeemuComponent } from './content/geemu/geemu.component';
import { OnngakuComponent } from './content/onngaku/onngaku.component';
import { SliderComponent } from './plugin/slider/slider.component';
import { RightViewComponent } from './slider/right-view/right-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenueComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    AnimeComponent,
    ManngaComponent,
    GeemuComponent,
    OnngakuComponent,
    SliderComponent,
    RightViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
