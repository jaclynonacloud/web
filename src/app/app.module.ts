import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavDesktopComponent } from './nav-desktop/nav-desktop.component';
import { JcloudDataService } from './services/jcloud-data.service';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProjectsComponent,
    NavDesktopComponent,
    ProjectModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [JcloudDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
