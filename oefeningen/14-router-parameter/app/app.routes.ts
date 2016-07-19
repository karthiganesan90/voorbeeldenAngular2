/**
 * Created by Peter Kassenaar on 19-7-2016.
 */
import {provideRouter, RouterConfig} from '@angular/router';
import {AppComponent} from "./app.component";
import {CityAddComponent} from "./city.add.component";
import {CityDetailComponent} from "./city.detail.component";

// The RouterConfig is an array of routes that describe how to navigate.
// Each Route maps a URL path to a component.
const routes:RouterConfig = [
	{path: '', component: AppComponent},
	{path: 'home', component: AppComponent},
	{path: 'add', component: CityAddComponent},
	{path: 'detail/:id', component: CityDetailComponent}  // the :id denotes the parameter. It is dynamic.
];

// We pass the configuration array to the provideRouter() function
// which returns (among other things) a configured Router service provider.
// Note: this can also be handled in main.ts. It's a matter of choice, I believe
export const appRouterProviders = [
	provideRouter(routes)
];