import { Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { StructuralDirectiveComponent } from './components/directives/structural-directive/structural-directive.component';
import { AttributeDirectiveComponent } from './components/directives/attribute-directive/attribute-directive.component';
import { ComponentDirectiveComponent } from './components/directives/component-directive/component-directive.component';
import { CustomComponent } from './components/directives/custom/custom.component';

export const routes: Routes = [
    {path:'', component:DirectivesComponent},
    {path:'directives', component:DirectivesComponent, children:[
        {path: 'structural', component:StructuralDirectiveComponent},
        {path: 'attribute', component:AttributeDirectiveComponent},
        {path: 'component', component:ComponentDirectiveComponent},
        {path: 'custom', component:CustomComponent},
    ]
    },
    {path:'pipes', component:PipesComponent},
    {path: '**', component:NotFoundComponent}
];
