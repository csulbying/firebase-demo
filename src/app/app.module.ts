import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component'

import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { environment } from '../environments/environment'
import { BoardsComponent } from './boards/boards.component'
import { BoardsDetailComponent } from './boards-detail/boards-detail.component'
import { BoardsCreateComponent } from './boards-create/boards-create.component'
import { BoardsEditComponent } from './boards-edit/boards-edit.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {
  MatInputModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
} from '@angular/material'

import { ReactiveFormsModule } from '@angular/forms'

const appRoutes: Routes = [
  {
    path: 'boards',
    component: BoardsComponent,
    data: { title: 'Boards List' },
  },
  {
    path: 'boards-details/:id',
    component: BoardsDetailComponent,
    data: { title: 'Boards Details' },
  },
  {
    path: 'boards-create',
    component: BoardsCreateComponent,
    data: { title: 'Create Boards' },
  },
  {
    path: 'boards-edit/:id',
    component: BoardsEditComponent,
    data: { title: 'Edit Boards' },
  },
  { path: '', redirectTo: '/boards', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    BoardsComponent,
    BoardsDetailComponent,
    BoardsCreateComponent,
    BoardsEditComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
