import {createAction, props} from '@ngrx/store'
import {ActionTypes} from 'src/app/shared/modules/follow/store/actionTypes'
import {UserProfileInterface} from 'src/app/shared/types/userProfile.interface'

export const followAction = createAction(
  ActionTypes.FOLLOW,
  props<{following: boolean; slug: string}>()
)

export const followSuccessAction = createAction(
  ActionTypes.FOLLOW_SUCCESS,
  props<{userProfile: UserProfileInterface}>()
)
export const followFailureAction = createAction(
  ActionTypes.FOLLOW_FAILURE
)