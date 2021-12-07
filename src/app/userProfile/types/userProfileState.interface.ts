import {UserProfileInterface} from '../../shared/types/userProfile.interface'

export interface UserProfileStateInterface {
  data: UserProfileInterface | null
  isLoading: boolean
  error: string | null
}
