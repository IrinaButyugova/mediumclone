import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {UserProfileInterface} from 'src/app/shared/types/userProfile.interface'
import {environment} from 'src/environments/environment'
import {GetUserProfileResponseInterface} from 'src/app/shared/types/getUserProfileResponse.interface'
import {map} from 'rxjs/operators'

@Injectable()
export class FollowService {
  constructor(private http: HttpClient) {}

  follow(slug: string): Observable<UserProfileInterface> {
    const url = this.getUrl(slug)

    return this.http.post(url, {}).pipe(map(this.getProfile))
  }

  unFollow(slug: string): Observable<UserProfileInterface> {
    const url = this.getUrl(slug)

    return this.http.delete(url).pipe(map(this.getProfile))
  }

  getUrl(slug: string): string {
    return `${environment.apiUrl}/profiles/${slug}/follow`
  }

  getProfile(response: GetUserProfileResponseInterface): UserProfileInterface {
    return response.profile
  }
}