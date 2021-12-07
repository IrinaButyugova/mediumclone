import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {map, catchError, switchMap} from 'rxjs/operators'
import {of} from 'rxjs'

import {FollowService} from 'src/app/shared/modules/follow/sevices/follow.service'
import {
  followAction,
  followSuccessAction,
  followFailureAction
} from 'src/app/shared/modules/follow/store/actions/follow.action'
import {UserProfileInterface} from 'src/app/shared/types/userProfile.interface'
import {PersistanceService} from 'src/app/shared/services/persistance.service'

@Injectable()
export class FollowEffect {
  follow$ = createEffect(() =>
    this.actions$.pipe(
      ofType(followAction),
      switchMap(({following, slug}) => {
        const token = this.persistanceService.get('accessToken')
        if (!token) {
            this.router.navigateByUrl('/login')
            return of(followFailureAction())
        }
        
        const userProfile$ = following
          ? this.followService.unFollow(slug)
          : this.followService.follow(slug)
        return userProfile$.pipe(
          map((userProfile: UserProfileInterface) => {
            return followSuccessAction({userProfile})
          }),
          catchError(() => {
            return of(followFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private followService: FollowService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}