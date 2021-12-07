import {Component, Input, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {followAction} from '../../store/actions/follow.action'

@Component({
    selector: 'mc-follow',
    templateUrl: './follow.component.html'
})
export class FollowComponent implements OnInit {
    @Input('following') followingProps: boolean
    @Input('userProfileSlug') userProfileSlugProps: string
    @Input('userName') userNameProps: string
  
    following: boolean
    userName: string
  
    constructor(private store: Store) {}
  
    ngOnInit(): void {
      this.following = this.followingProps
      this.userName = this.userNameProps
    }
  
    handleFollow(): void {
      this.store.dispatch(
        followAction({
          following: this.following,
          slug: this.userProfileSlugProps
        })
      )
  
      this.following = !this.following
    }
  }