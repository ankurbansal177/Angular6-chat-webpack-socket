import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ChathouseComponent} from "./chathouse/chathouse.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
    { path: 'chat',
      component: ChathouseComponent },
    { path: '',
      redirectTo: '/chat',
      pathMatch: 'full'
    },
    { path: 'profile',
      component: ProfileComponent
    }
];
@NgModule({
    imports: [
        CommonModule, RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }