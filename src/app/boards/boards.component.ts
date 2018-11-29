import { Component, OnInit } from '@angular/core'

import { DataSource } from '@angular/cdk/collections'
import { FirestoreService } from '../firestore.service'

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css'],
})
export class BoardsComponent implements OnInit {
  displayedColumns = ['title', 'description', 'author']
  dataSource = new BoardDataSource(this.fs)

  constructor(private fs: FirestoreService) {}

  ngOnInit() {}
}

export class BoardDataSource extends DataSource<any> {
  constructor(private fs: FirestoreService) {
    super()
  }

  connect() {
    return this.fs.getBoards()
  }

  disconnect() {}
}
