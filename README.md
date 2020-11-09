# Angular Nested Routes
In case something like this is needed
* Main (has the main router-outlet
  * Settings (has its own router-outlet)
    * Sites
    * Users
  * Other...

1. Create the app with routing support
   ```
   ng new angular-nested-routes --routing-true
   ```
2. Add a module for administration with its own routing support
   ```
   ng g module admin --routing=true
   ```   
3. Add ***AdminModule*** to the imports declaration of app.module
   
   ```javascript
      @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        AdminModule
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
   ```   
4. Set path structure in ***admin-routing.module.ts***
   ```javascript
   const routes: Routes = [
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: 'sites', component: SitesComponent },
          { path: 'users', component: UsersComponent }
        ]
      }
    ];

    @NgModule({
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    })
    export class AdminRoutingModule { }
   ```   
5. Add ***routerLinks*** and a ***router-outlet*** element in ***settings.component.html***   
    ```html
    <p>settings works!</p>

    <a routerLink="sites" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Sites</a>

        <a routerLink="users" routerLinkActive="active"
        [routerLinkActiveOptions]="{ exact: true }">Users</a>

    <router-outlet></router-outlet>

    ```
## Code
https://github.com/atorres16/angular-nested-routes
