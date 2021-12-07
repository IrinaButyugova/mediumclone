import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

import {ArticleComponent} from './components/article/article.component'
import {ArticleService as SharedArticleService} from '../shared/services/article.service'
import {reducers} from 'src/app/article/store/reducers'
import {GetArticleEffect} from 'src/app/article/store/effects/getArticle.effect'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module'
import {TagListModule} from 'src/app/shared/modules/tagList/tagList.module'
import {DeleteArticleEffect} from './store/effects/deleteArticle.effect'
import {ArticleService} from 'src/app/article/services/article.service'
import {FollowModule} from '../shared/modules/follow/follow.module'
import {AddToFavoriteModule} from '../shared/modules/addToFavorites/addToFavorites.module'

const routes = [
  {
    path: 'articles/:slug',
    component: ArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('article', reducers),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    LoadingModule,
    ErrorMessageModule,
    TagListModule,
    FollowModule,
    AddToFavoriteModule
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService, SharedArticleService]
})
export class ArticleModule {}
