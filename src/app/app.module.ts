import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JcloudDataService } from './_services/jcloud-data.service';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { ProjectsComponent } from './_components/projects/projects.component';
import { NavHeaderComponent } from './_components/nav-header/nav-header.component';
import { SearchComponent } from './_components/search/search.component';
import { MainPageComponent } from './_components/main-page/main-page.component';
import { ProjectPageComponent } from './_components/project-page/project-page.component';
import { SwfViewerComponent } from './_components/_helpers/swf-viewer/swf-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProjectsComponent,
    NavHeaderComponent,
    SearchComponent,
    MainPageComponent,
    ProjectPageComponent,
    SwfViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: MainPageComponent },
      { path: "project/:name", component: ProjectPageComponent },
      { path: "swf/:file", component:SwfViewerComponent },
      { path: "**", redirectTo: "", pathMatch:"full" },
    ],
    { useHash: true })
  ],
  providers: [JcloudDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
