<template>
    <div class="nav-drawer"> <!--todo : component to be : drawer component-->
<!--        <div class="search"> &lt;!&ndash;todo : a component to be : search component &ndash;&gt;-->
<!--            <img src="../assets/icons/icon-search.svg" alt="">-->
<!--            <input type="search" placeholder="Search for movies or TV series">-->
<!--        </div>-->

<!--        <div class="trending-items-viewer">-->
<!--            &lt;!&ndash;todo : a component to be : trending items displayer  component &ndash;&gt;-->
<!--            <h3 class="trending-items-viewer__title">Trending </h3>-->
<!--            <div class="slider">-->
<!--                <div class="item">-->
<!--                    <img src="../assets/thumbnails/beyond-earth/regular/large.jpg" alt="">-->
<!--                    <div class="item__cover">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                        <div class="caption" >-->
<!--                            <div>-->
<!--                                <small class="A">2019</small>-->
<!--                                .-->
<!--                                <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                                <small class="B">Movie</small>-->
<!--                                .-->
<!--                                <small class="C">PG</small>-->
<!--                            </div>-->
<!--                            <strong>Beyond The Earth</strong>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item">-->
<!--                    <img src="../assets/thumbnails/bottom-gear/regular/large.jpg" alt="">-->
<!--                    <div class="item__cover">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                        <div class="caption" >-->
<!--                            <div>-->
<!--                                <small class="A">2021</small>-->
<!--                                .-->
<!--                                <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                                <small class="B">Movie</small>-->
<!--                                .-->
<!--                                <small class="C">PG</small>-->
<!--                            </div>-->
<!--                            <strong>The Bottom Gear</strong>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item">-->
<!--                    <img src="../assets/thumbnails/undiscovered-cities/regular/large.jpg" alt="">-->
<!--                    <div class="item__cover">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                        <div class="caption" >-->
<!--                            <div>-->
<!--                                <small class="A">2019</small>-->
<!--                                .-->
<!--                                <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                                <small class="B">TV Series</small>-->
<!--                                .-->
<!--                                <small class="C">E</small>-->
<!--                            </div>-->
<!--                            <strong>Undiscovered Cities</strong>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item">-->
<!--                    <img src="../assets/thumbnails/beyond-earth/regular/large.jpg" alt="">-->
<!--                    <div class="item__cover">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                        <div class="caption" >-->
<!--                            <div>-->
<!--                                <small class="A">2019</small>-->
<!--                                .-->
<!--                                <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                                <small class="B">Movie</small>-->
<!--                                .-->
<!--                                <small class="C">18+</small>-->
<!--                            </div>-->
<!--                            <strong>1998</strong>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item">-->
<!--                    <img src="../assets/thumbnails/dark-side-of-the-moon/regular/large.jpg" alt="">-->
<!--                    <div class="item__cover">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                        <div class="caption" >-->
<!--                            <div>-->
<!--                                <small class="A">2018</small>-->
<!--                                .-->
<!--                                <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                                <small class="B">TV Series</small>-->
<!--                                .-->
<!--                                <small class="C">PG</small>-->
<!--                            </div>-->
<!--                            <strong>Dark Side Of The Moon</strong>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--        <div class="movie-items-viewer" >&lt;!&ndash;todo : component to be : items displayer &ndash;&gt;-->
<!--            <h3 class="movie-items-viewer__title">Recommended for you</h3>-->
<!--            <div class="queue">-->
<!--                <div class="item"> &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/the-great-lands/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2019</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">E</small>-->
<!--                        </div>-->
<!--                        <strong>The Great Lands</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item" > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/the-diary/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2019</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>The Diary</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div  class="item" > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/earths-untouched/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2019</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">E</small>-->
<!--                        </div>-->
<!--                        <strong>Earth's Untouched</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/no-land-beyond/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2019</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">E</small>-->
<!--                        </div>-->
<!--                        <strong>No Land beyond</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/during-the-hunt/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2016</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>During The Hunt</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/autosport-the-series/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2016</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">18+</small>-->
<!--                        </div>-->
<!--                        <strong>AutoSport The Series</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/same-answer-2/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2017</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">E</small>-->
<!--                        </div>-->
<!--                        <strong>Same Answer II</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/below-echo/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2016</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>Below Echo</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/the-rockies/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2015</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>The Rockies</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/relentless/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2017</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>Relentless</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/community-of-ours/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2018</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">18+</small>-->
<!--                        </div>-->
<!--                        <strong>Community of Ours</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/van-life/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2015</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>Van Life</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/the-heiress/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2021</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>The Heiress</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/off-the-track/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2017</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">18+</small>-->
<!--                        </div>-->
<!--                        <strong>Off the Track</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/whispering-hill/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2017</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">E</small>-->
<!--                        </div>-->
<!--                        <strong>Whispering Hill</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/112/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2013</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>112</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/lone-heart/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2017</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">E</small>-->
<!--                        </div>-->
<!--                        <strong>Lone Heart</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/production-line/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2018</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>Production Line</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/dogs/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2016</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">E</small>-->
<!--                        </div>-->
<!--                        <strong>Dogs</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/asia-in-24-days/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2020</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>Asia in 24 Days</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/the-tasty-tour/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2016</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>The Tasty Tour</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/darker/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2017</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">18+</small>-->
<!--                        </div>-->
<!--                        <strong>Darker</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/unresolved-cases/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2018</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-tv.svg" alt="">-->
<!--                            <small class="B">TV Series</small>-->
<!--                            .-->
<!--                            <small class="C">18+</small>-->
<!--                        </div>-->
<!--                        <strong>Unresolved Cases</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="item"  > &lt;!&ndash;todo : component to be : movie item component &ndash;&gt;-->
<!--                    <div class="item__attach">-->
<!--                        <img src="../assets/thumbnails/mission-saturn/regular/large.jpg" alt="">-->
<!--                        <button class="btn-bookmark"><img src="../assets/icons/icon-bookmark-empty.svg" alt=""></button>-->
<!--                    </div>-->
<!--                    <div class="item__caption">-->
<!--                        <div>-->
<!--                            <small class="A">2017</small>-->
<!--                            .-->
<!--                            <img src="../assets/icons/icon-category-movie.svg" alt="">-->
<!--                            <small class="B">Movie</small>-->
<!--                            .-->
<!--                            <small class="C">PG</small>-->
<!--                        </div>-->
<!--                        <strong>Mission: Saturn</strong>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

    </div>
</template>

<script>
    export default {
        name: "navigation-drawer"
    }
</script>

<style lang="scss" scoped>

</style>