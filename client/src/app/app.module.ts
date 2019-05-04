import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to npm install
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
//end 

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Import 3rd party components
import { ChartsModule } from 'ng2-charts/ng2-charts';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import containers
import { DefaultLayoutComponent } from './containers/index';

// services
import { AngularFireModule } from 'angularfire2';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { customHttpProvider } from './helpers/index';
import { AlertComponent } from './directives/alert/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService, VideoService, PostsService, ForgetService } from './services/index';
//import { HomeComponent } from './views/home/index';

import { LoginComponent } from './views/login/index';
import { RegisterComponent } from './views/register/index';
import { ForgetComponent } from './views/forget/index';
import { AsideDirective } from './directives/aside/index';
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/nav-dropdown/index';
import { SidebarToggleDirective, SidebarMinimizeDirective, SidebarOffCanvasCloseDirective, MobileSidebarToggleDirective } from './directives/sidebar/index';
//import { DashboardComponent } from './views/dashboard/index';

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';
import { FocusedDirective } from './directives/focused/index';

const firebaseConfig = {
  apiKey: "AIzaSyAkLv1M3uWZChe1jgrCUaGs4l91CI6n4x8",
  authDomain: "events-conference.firebaseapp.com",
  databaseURL: "https://events-conference.firebaseio.com",
  projectId: "events-conference",
  storageBucket: "events-conference.appspot.com",
  messagingSenderId: "750647605647"
}


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    AsideDirective,
    NavDropdownDirective,
    SidebarToggleDirective,
    SidebarMinimizeDirective,
    SidebarOffCanvasCloseDirective,
    MobileSidebarToggleDirective,
    NavDropdownToggleDirective,
    DefaultLayoutComponent,
    FocusedDirective,
    ForgetComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    PerfectScrollbarModule,
    AppSidebarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],

  providers: [
  customHttpProvider,
  AuthGuard,
  AlertService,
  AuthenticationService,
  UserService,
  PostsService,
  VideoService,
  ForgetService,
  {
  provide: LocationStrategy,
  useClass: HashLocationStrategy
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
