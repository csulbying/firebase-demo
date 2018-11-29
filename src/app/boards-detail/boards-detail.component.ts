import { Component, OnInit } from '@angular/core'

import { ActivatedRoute, Router } from '@angular/router'

import { FirestoreService } from '../firestore.service'

@Component({
  selector: 'app-boards-detail',
  templateUrl: './boards-detail.component.html',
  styleUrls: ['./boards-detail.component.css'],
})
export class BoardsDetailComponent implements OnInit {
  id: string
  board: any

  constructor(private route: ActivatedRoute, private router: Router, private fs: FirestoreService) {
    this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.getBoardDetails()
  }

  private getBoardDetails() {
    this.fs.getBoard(this.id).subscribe(board => {
      console.log(board)
      this.board = board
    })
  }

  deleteBoard(id) {
    this.fs.deleteBoards(id).subscribe(
      _ => {
        this.router.navigate(['/boards'])
      },
      err => {
        console.log(err)
      },
    )
  }
}
