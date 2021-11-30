import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckBoxComponent } from './components/check-box/check-box.component';
import { SubTitleComponent } from './components/sub-title/sub-title.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './screens/home/home.component';
import { TaskContainerComponent } from './components/task-container/task-container.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ButtonComponent,
    CheckBoxComponent,
    SubTitleComponent,
    HeaderComponent,
    HomeComponent,
    TaskContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
