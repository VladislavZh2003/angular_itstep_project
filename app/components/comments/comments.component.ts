import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentsService: CommentsService) { }

  comments: Comment[] = []
  loading: boolean = true

  ngOnInit(): void {
    this.commentsService.getAll$().subscribe({
      next: (res: Comment[]) => { this.comments = res },
      error: (err) => { console.error(err) },
      complete: () => { this.loading = false }
    })
  }

}
