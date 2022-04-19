<template>
    <div class="scene">
        <div class="container" >
            <navigation/>
            <router-view>
<!--                <navigation-drawer/>-->
            </router-view>
            <!--todo : add the search component here -->






<!--            <div class="navigation"> &lt;!&ndash;todo : component tobe&ndash;&gt;-->
<!--                <div class="logo">-->
<!--                    <img src="./assets/logos/logo.svg" alt="">-->
<!--                </div>-->
<!--                <div class="nav">-->
<!--                    <button class="nav__link active"><img src="./assets/icons/icon-nav-home.svg" alt=""></button>-->
<!--                    <button class="nav__link"><img src="./assets/icons/icon-nav-movies.svg" alt=""></button>-->
<!--                    <button class="nav__link"><img src="./assets/icons/icon-nav-tv-series.svg" alt=""></button>-->
<!--                    <button class="nav__link"><img src="./assets/icons/icon-nav-bookmark.svg" alt=""></button>-->
<!--                    &lt;!&ndash;todo : download search svg 24x24 same color with the others&ndash;&gt;-->
<!--&lt;!&ndash;                    <button class="nav__link"><img src="./assets/icons/icon-nav-bookmark.svg" alt=""></button>&ndash;&gt;-->
<!--                </div>-->
<!--                <div class="avatar">-->
<!--                    <img src="./assets/images/image-avatar.png" alt="">-->
<!--                </div>-->
<!--            </div>-->


<!--            <div class="nav-drawer"> &lt;!&ndash;todo : component to be : drawer component&ndash;&gt;-->
<!--                <div class="search"> &lt;!&ndash;todo : a component to be : search component &ndash;&gt;-->
<!--                    <img src="./assets/icons/icon-search.svg" alt="">-->
<!--                    <input type="search" placeholder="Search for movies or TV series">-->
<!--                </div>-->

<!--                <div class="trending-items-viewer">-->
<!--                    &lt;!&ndash;todo : a component to be : trending items displayer  component &ndash;&gt;-->
<!--                    <h3 class="trending-items-viewer__title">Trending </h3>-->
<!--                    <div class="slider">-->
<!--                        <div class="item">-->
<!--                            <img src="./assets/thumbnails/beyond-earth/regular/large.jpg" alt="">-->
<!--                            <div class="item__cover">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                                <div class="caption" >-->
<!--                                    <div>-->
<!--                                        <small class="A">2019</small>-->
<!--                                        .-->
<!--                                        <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                        <small class="B">Movie</small>-->
<!--                                        .-->
<!--                                        <small class="C">PG</small>-->
<!--                                    </div>-->
<!--                                    <strong>Beyond The Earth</strong>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <img src="./assets/thumbnails/bottom-gear/regular/large.jpg" alt="">-->
<!--                            <div class="item__cover">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                                <div class="caption" >-->
<!--                                    <div>-->
<!--                                        <small class="A">2021</small>-->
<!--                                        .-->
<!--                                        <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                        <small class="B">Movie</small>-->
<!--                                        .-->
<!--                                        <small class="C">PG</small>-->
<!--                                    </div>-->
<!--                                    <strong>The Bottom Gear</strong>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <img src="./assets/thumbnails/undiscovered-cities/regular/large.jpg" alt="">-->
<!--                            <div class="item__cover">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                                <div class="caption" >-->
<!--                                    <div>-->
<!--                                        <small class="A">2019</small>-->
<!--                                        .-->
<!--                                        <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                        <small class="B">TV Series</small>-->
<!--                                        .-->
<!--                                        <small class="C">E</small>-->
<!--                                    </div>-->
<!--                                    <strong>Undiscovered Cities</strong>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <img src="./assets/thumbnails/beyond-earth/regular/large.jpg" alt="">-->
<!--                            <div class="item__cover">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                                <div class="caption" >-->
<!--                                    <div>-->
<!--                                        <small class="A">2019</small>-->
<!--                                        .-->
<!--                                        <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                        <small class="B">Movie</small>-->
<!--                                        .-->
<!--                                        <small class="C">18+</small>-->
<!--                                    </div>-->
<!--                                    <strong>1998</strong>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item">-->
<!--                            <img src="./assets/thumbnails/dark-side-of-the-moon/regular/large.jpg" alt="">-->
<!--                            <div class="item__cover">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                                <div class="caption" >-->
<!--                                    <div>-->
<!--                                        <small class="A">2018</small>-->
<!--                                        .-->
<!--                                        <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                        <small class="B">TV Series</small>-->
<!--                                        .-->
<!--                                        <small class="C">PG</small>-->
<!--                                    </div>-->
<!--                                    <strong>Dark Side Of The Moon</strong>-->
<!--                                </div>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--                <div class="movie-items-viewer" >&lt;!&ndash;todo : component to be : items displayer &ndash;&gt;-->
<!--                    <h3 class="movie-items-viewer__title">Recommended for you</h3>-->
<!--                    <div class="queue">-->
<!--                        <div class="item"> &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/the-great-lands/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2019</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">E</small>-->
<!--                                </div>-->
<!--                                <strong>The Great Lands</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item" > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/the-diary/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2019</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>The Diary</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div  class="item" > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/earths-untouched/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2019</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">E</small>-->
<!--                                </div>-->
<!--                                <strong>Earth's Untouched</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/no-land-beyond/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2019</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">E</small>-->
<!--                                </div>-->
<!--                                <strong>No Land beyond</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/during-the-hunt/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2016</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>During The Hunt</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/autosport-the-series/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2016</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">18+</small>-->
<!--                                </div>-->
<!--                                <strong>AutoSport The Series</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/same-answer-2/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2017</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">E</small>-->
<!--                                </div>-->
<!--                                <strong>Same Answer II</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/below-echo/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2016</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>Below Echo</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/the-rockies/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2015</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>The Rockies</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/relentless/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2017</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>Relentless</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/community-of-ours/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2018</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">18+</small>-->
<!--                                </div>-->
<!--                                <strong>Community of Ours</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/van-life/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2015</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>Van Life</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/the-heiress/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2021</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>The Heiress</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/off-the-track/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2017</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">18+</small>-->
<!--                                </div>-->
<!--                                <strong>Off the Track</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/whispering-hill/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2017</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">E</small>-->
<!--                                </div>-->
<!--                                <strong>Whispering Hill</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/112/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2013</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>112</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/lone-heart/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2017</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">E</small>-->
<!--                                </div>-->
<!--                                <strong>Lone Heart</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/production-line/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2018</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>Production Line</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/dogs/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2016</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">E</small>-->
<!--                                </div>-->
<!--                                <strong>Dogs</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/asia-in-24-days/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2020</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>Asia in 24 Days</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/the-tasty-tour/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2016</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>The Tasty Tour</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/darker/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2017</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">18+</small>-->
<!--                                </div>-->
<!--                                <strong>Darker</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/unresolved-cases/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2018</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-tv.svg" alt="">-->
<!--                                    <small class="B">TV Series</small>-->
<!--                                    .-->
<!--                                    <small class="C">18+</small>-->
<!--                                </div>-->
<!--                                <strong>Unresolved Cases</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                        <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                            <div class="item__attach">-->
<!--                                <img src="./assets/thumbnails/mission-saturn/regular/large.jpg" alt="">-->
<!--                                <button class="btn-bookmark"><img src="./assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                            </div>-->
<!--                            <div class="item__caption">-->
<!--                                <div>-->
<!--                                    <small class="A">2017</small>-->
<!--                                    .-->
<!--                                    <img src="./assets/icons/icon-category-movie.svg" alt="">-->
<!--                                    <small class="B">Movie</small>-->
<!--                                    .-->
<!--                                    <small class="C">PG</small>-->
<!--                                </div>-->
<!--                                <strong>Mission: Saturn</strong>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->

<!--            </div>-->
        </div>

    </div>
</template>
<style lang="scss">

    .scene {
        background: #10141E;
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        }

    .container {
        width: 100%;
        display: flex;
        overflow: auto;
        position: relative;
        padding: 0;
        @media (max-width: 768px) {
            justify-content: space-around;
            flex-wrap: wrap;
        }
        &::-webkit-scrollbar {
            width: 0;
        }
    }

    /*.navigation {*/
    /*    background: #161D2F;*/
    /*    border-radius: 20px;*/
    /*    padding: 20px 5px;*/
    /*    min-height: calc(100% - 80px);*/
    /*    width: 70px;*/
    /*    margin: 20px 32px;*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    transition: all ease-in-out .30s;*/
    /*    transition: height ease-in-out .15s;*/

    /*    .logo {*/
    /*        margin: 15px auto;*/
    /*        @media (max-width: 768px) {*/
    /*            margin: 0 auto 0 0;*/
    /*        }*/
    /*    }*/

    /*    .nav {*/
    /*        align-self: flex-start;*/
    /*        width: fit-content;*/
    /*        margin: 40px auto auto auto;*/
    /*        @media (max-width: 768px) {*/
    /*            display: flex;*/
    /*            margin: 0;*/
    /*            align-self: center;*/
    /*        }*/

    /*        &__link {*/
    /*            width: 30px;*/
    /*            height: 30px;*/
    /*            background: transparent;*/
    /*            cursor: pointer;*/
    /*            display: flex;*/
    /*            align-items: center;*/
    /*            outline: 0;*/
    /*            border: 0;*/
    /*            margin-bottom: 20px;*/
    /*            border-radius: 3px;*/
    /*            transition: all ease-in-out .30s;*/

    /*            img{*/
    /*                margin: 0 auto;*/
    /*            }*/
    /*            @media (max-width: 768px) {*/
    /*                margin: 0 10px;*/
    /*            }*/

    /*            @media (max-width: 500px) {*/
    /*                margin: 0 1px;*/
    /*            }*/
    /*        }*/

    /*        &__link:hover{*/
    /*            background: rgba(255,255,255,.1);*/
    /*        }*/
    /*    }*/

    /*    .avatar {*/
    /*        align-self: flex-end;*/
    /*        border: solid white 1px;*/
    /*        border-radius: 100%;*/
    /*        height: 50px;*/
    /*        width: 50px;*/
    /*        margin: 0 auto;*/
    /*        overflow: hidden;*/
    /*        cursor: pointer;*/
    /*        img {*/
    /*            height: 100%;*/
    /*            width: 100%;*/
    /*        }*/

    /*        @media (max-width: 768px) {*/
    /*            align-self: center;*/
    /*            margin: 0 0 0 auto;*/
    /*            width: 32px;*/
    /*            height: 32px;*/
    /*        }*/
    /*    }*/

    /*    @media (max-width: 768px) {*/
    /*        flex-direction: row;*/
    /*        align-items: center;*/
    /*        justify-content: space-between;*/
    /*        width: calc(100% - 88px);*/
    /*        margin: 10px 25px 5px 25px;*/
    /*        border-radius: 10px;*/
    /*        padding: 5px 20px;*/
    /*        min-height: 40px;*/
    /*        height: 40px !important;*/
    /*        position: absolute;*/
    /*        z-index: 1;*/
    /*    }*/

    /*    @media (max-width: 500px) {*/
    /*        position: relative;*/
    /*        width: 100%;*/
    /*        margin: 0 ;*/
    /*        border-radius: 0;*/
    /*        padding: 5px 16px;*/
    /*    }*/
    /*}*/


    /*.nav-drawer {*/
    /*    height: 100%;*/
    /*    width: calc(100% - 0px);*/
    /*    overflow-y: auto;*/
    /*    overflow-x: hidden;*/
    /*    @media (max-width: 768px) {*/
    /*        width: 100%;*/
    /*        padding-top: 70px;*/
    /*    }*/

    /*    @media (max-width: 500px) {*/
    /*        padding-top: 0;*/
    /*    }*/
    /*    &::-webkit-scrollbar {*/
    /*        width: 0;*/
    /*    }*/
    /*}*/

    /*.search {*/
    /*    height: fit-content;*/
    /*    position: relative;*/
    /*    margin-top: 30px;*/
    /*    transition: all ease-in-out .30s ;*/
    /*    img {*/
    /*        position: absolute;*/
    /*        left: 0;*/
    /*        top: 12px;*/
    /*        display: inline-block;*/
    /*        height: 32px;*/
    /*        width: 32px;*/
    /*        color: white;*/
    /*        transition: all ease-in-out .30s ;*/
    /*        @media (max-width: 500px) {*/
    /*            height: 24px;*/
    /*            width: 24px;*/
    /*        }*/
    /*    }*/

    /*    input {*/
    /*        width: 100%;*/
    /*        padding: 15px 0 15px 40px;*/
    /*        border: 0;*/
    /*        outline: 0;*/
    /*        font-size: 24px;*/
    /*        color: white;*/
    /*        background: transparent;*/
    /*        transition: all ease-in-out .30s ;*/
    /*        @media (max-width: 500px) {*/
    /*            font-size: 16px;*/
    /*            padding: 15px 0 15px 30px;*/
    /*        }*/
    /*    }*/

    /*    @media (max-width: 768px) {*/
    /*        width: calc(100% - 60px);*/
    /*        margin: 10px auto 0 auto;*/
    /*    }*/

    /*    @media (max-width: 500px) {*/
    /*        width: calc(100% - 35px);*/
    /*        margin: 10px auto 0 auto;*/
    /*    }*/
    /*}*/

    /*.btn-bookmark {*/
    /*    outline: 0;*/
    /*    border: 0;*/
    /*    width: 32px;*/
    /*    height: 32px;*/
    /*    background: rgba(24.24,30.3, 45.45, .3);*/
    /*    padding: 15px;*/
    /*    border-radius: 100%;*/
    /*    cursor: pointer;*/
    /*    color: white;*/
    /*    display: flex;*/
    /*    align-items: center;*/
    /*    justify-content: space-around;*/
    /*    transition: opacity ease-in-out .15s;*/

    /*    img {*/
    /*        display: block;*/
    /*        width: fit-content;*/
    /*        color: white;*/
    /*    }*/

    /*    &:hover {*/
    /*        background: rgba(24.24,30.3, 45.45, .7);*/
    /*    }*/

    /*}*/

    /*.trending-items-viewer{*/
    /*    margin-top: 34px;*/
    /*    padding: 0 ;*/
    /*    color: white;*/
    /*    &__title{*/
    /*        margin: 0 0 24px 0;*/
    /*        font-size: 32px;*/
    /*        font-weight: normal;*/
    /*        transition: all ease-in-out .30s;*/
    /*        @media (max-width: 768px) {*/
    /*            margin: 0 25px 24px 25px;*/
    /*        }*/
    /*        @media (max-width: 500px) {*/
    /*            font-size: 20px;*/
    /*            margin: 0 16px 16px 16px;*/
    /*        }*/
    /*    }*/

    /*    .slider{*/
    /*        display: flex;*/
    /*        overflow-x: auto;*/
    /*        padding: 0;*/

    /*        &::-webkit-scrollbar{*/
    /*            width: 0;*/
    /*            overflow: hidden;*/
    /*        }*/

    /*        .item{*/
    /*            width: 470px;*/
    /*            min-width: 400px;*/
    /*            height: 230px;*/
    /*            border-radius: 8px;*/
    /*            overflow: hidden;*/
    /*            position: relative;*/
    /*            margin-right: 30px;*/
    /*            transition: all ease-in-out .30s;*/

    /*            &:first-child{*/
    /*                margin-left: 0;*/
    /*                @media (max-width: 768px) {*/
    /*                    margin-left: 30px;*/
    /*                }*/
    /*                @media (max-width: 500px) {*/
    /*                    margin-left: 16px;*/
    /*                }*/
    /*            }*/

    /*            & > img{*/
    /*                width: 100%;*/
    /*                height: 100%;*/
    /*            }*/

    /*            &__cover{*/
    /*                background: rgba(0,0,0,.1);*/
    /*                position: absolute;*/
    /*                height: 100%;*/
    /*                width: 100%;*/
    /*                top: 0;*/
    /*                left:0;*/
    /*                display: flex;*/
    /*                !*todo : apply gradient from bottom*!*/

    /*                button{*/
    /*                    position: absolute;*/
    /*                    right: 15px;*/
    /*                    top: 15px;*/
    /*                }*/

    /*                .caption{*/
    /*                    align-self: flex-end;*/
    /*                    width: 100%;*/
    /*                    padding: 24px;*/
    /*                    font-size: 15px;*/
    /*                    transition: all ease-in-out .30s;*/
    /*                    img{*/
    /*                        width: 12px;*/
    /*                        height: 12px;*/
    /*                        margin: 0 5px 0 0;*/
    /*                    }*/

    /*                    strong{*/
    /*                        font-size: 24px;*/
    /*                        transition: all ease-in-out .30s;*/
    /*                        @media (max-width: 500px) {*/
    /*                            font-weight: normal;*/
    /*                            font-size: 16px;*/
    /*                        }*/
    /*                    }*/
    /*                    @media (max-width: 500px) {*/
    /*                        padding: 16px;*/
    /*                    }*/
    /*                }*/
    /*            }*/
    /*            @media (max-width: 500px) {*/
    /*                width: 240px;*/
    /*                min-width: 240px;*/
    /*                height: 140px;*/
    /*                margin-right: 16px;*/
    /*            }*/

    /*            @media (max-width: 380px) {*/
    /*                width: 240px;*/
    /*                min-width: 300px;*/
    /*                height: 180px;*/
    /*            }*/
    /*        }*/

    /*    }*/


    /*    @media (max-width: 768px) {*/
    /*        !*width: calc(100% - 50px);*!*/
    /*        margin: 10px auto 0 auto;*/
    /*    }*/

    /*    @media (max-width: 500px) {*/
    /*        !*width: calc(100% - 32px);*!*/
    /*        margin: 10px auto 0 auto;*/
    /*    }*/
    /*}*/

    /*.A{*/
    /*    display: inline-block;*/
    /*    @media (max-width: 768px) {*/
    /*        margin:0;*/
    /*    }*/
    /*}*/

    /*.B{*/
    /*    display: inline-block;*/
    /*    @media (max-width: 768px) {*/
    /*        margin:0;*/
    /*    }*/
    /*}*/

    /*.C{*/
    /*    display: inline-block;*/
    /*    @media (max-width: 768px) {*/
    /*        margin:0;*/
    /*    }*/
    /*}*/


    /*.movie-items-viewer {*/
    /*    margin-top: 40px;*/
    /*    margin-right: 32px;*/
    /*    padding: 0;*/
    /*    @media (max-width: 768px) {*/
    /*        padding: 0;*/
    /*        width: calc(100% - 50px);*/
    /*        margin: auto;*/
    /*    }*/

    /*    @media (max-width: 500px) {*/
    /*        padding: 0;*/
    /*        width: calc(100% - 32px);*/
    /*        margin: auto;*/
    /*    }*/

    /*    &__title {*/
    /*        color: white;*/
    /*        margin: 0 0 24px 0;*/
    /*        font-size: 32px;*/
    /*        font-weight: normal;*/
    /*        transition: all ease-in-out .30s;*/
    /*        @media (max-width: 500px) {*/
    /*            font-size: 20px;*/
    /*            margin: 0 0 16px 0;*/
    /*        }*/
    /*    }*/

    /*    .queue {*/
    /*        display: flex;*/
    /*        flex-direction: row;*/
    /*        flex-wrap: wrap;*/
    /*        .item {*/
    /*            min-width: 200px;*/
    /*            width: calc(25% - 40px);*/
    /*            margin-right: 40px;*/
    /*            margin-bottom: 32px;*/
    /*            border: solid transparent 1px;*/
    /*            transition: all ease-in-out .15s;*/

    /*            &__attach {*/
    /*                background: rgba(0, 0, 0, .2);*/
    /*                width: 100%;*/
    /*                height: 150px;*/
    /*                overflow: hidden;*/
    /*                border-radius: 10px;*/
    /*                position: relative;*/

    /*                & > img{*/
    /*                    width: 100%;*/
    /*                    height: 100%;*/
    /*                }*/

    /*                button {*/
    /*                    position: absolute;*/
    /*                    right: 15px;*/
    /*                    top: 15px;*/
    /*                }*/

    /*                @media (max-width: 768px) {*/
    /*                    height: 130px;*/
    /*                }*/

    /*                @media (max-width: 500px) {*/
    /*                    height: 130px;*/
    /*                }*/

    /*                @media (max-width: 380px) {*/
    /*                    height: 180px;*/
    /*                }*/
    /*            }*/

    /*            &__caption {*/
    /*                padding: 10px 5px;*/
    /*                color: white;*/
    /*                font-size: 13px;*/

    /*                img{*/
    /*                    width: 12px;*/
    /*                    height: 12px;*/
    /*                    margin-right: 5px;*/
    /*                }*/

    /*                strong {*/
    /*                    margin: 5px 0 0 0 ;*/
    /*                    font-size: 18px;*/
    /*                    display: inline-block;*/
    /*                    font-weight: normal;*/
    /*                    @media (max-width: 500px) {*/
    /*                        font-size: 14px;*/
    /*                    }*/
    /*                }*/
    /*            }*/

    /*            &:nth-child(4n+3){*/
    /*                margin-right: 40px;*/
    /*            }*/

    /*            &:nth-child(4n+4){*/
    /*                margin-right: 0;*/
    /*            }*/

    /*            @media (max-width: 1096px) {*/
    /*                margin-right: 15px;*/
    /*                width: calc(33% - 10px);*/
    /*                min-width: 100px;*/

    /*                &:nth-child(3n+3){*/
    /*                    margin-right: 0;*/
    /*                }*/

    /*                &:nth-child(3n+1),&:nth-child(3n+2){*/
    /*                    margin-right: 15px;*/
    /*                }*/
    /*            }*/

    /*            @media (max-width: 768px) {*/
    /*                width: calc(33% - 10px);*/
    /*                margin-bottom: 24px;*/
    /*                min-width: 100px;*/
    /*                &:nth-child(3n+3){*/
    /*                    margin-right: 0;*/
    /*                }*/
    /*                &:nth-child(3n+1),&:nth-child(3n+2){*/
    /*                    margin-right: 10px;*/
    /*                }*/
    /*            }*/

    /*            @media (max-width: 500px) {*/
    /*                margin-right: 15px;*/
    /*                width: calc(50% - 10px);*/
    /*                min-width: 164px;*/
    /*                margin-bottom: 16px;*/
    /*                &:nth-child(2n+2){*/
    /*                    margin-right: 0;*/

    /*                }*/

    /*                &:nth-child(2n+3){*/
    /*                    margin-right: 15px;*/
    /*                }*/
    /*            }*/

    /*            @media (max-width: 380px) {*/
    /*                margin-right: 0;*/
    /*                width: 100%;*/
    /*                min-width: 100%;*/
    /*            }*/
    /*        }*/
    /*    }*/
    /*}*/
</style>


<script>
    import navigation from './components/side-navigation'
    // import navigationDrawer from './components/navigation-drawer'
    export default {
        name: 'App',
        components: {
            navigation,
            // navigationDrawer
        }
    }

</script>

