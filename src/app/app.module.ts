import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home-component/home.component';
import { InactivePostsComponent } from './inactive-posts-component/inactive-posts.component';
import { ActivePostsComponent } from './active-posts-component/active-posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostTypeColorDirective } from './post-type-color.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    PostCardComponent,
    PostTypeColorDirective
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
