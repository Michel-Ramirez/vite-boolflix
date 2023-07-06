<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// // import { farStar } from '@fortawesome/free-solid-svg-icons'
export default {
    props: {
        item: Object
    },
    data() {
        return {
            availableFlag: ['it', 'en']
        }
    },
    computed: {
        posterSrc() {
            const posterUrl = `http://image.tmdb.org/t/p/w300${this.item.poster_path}`;
            return posterUrl
        },
        hasFlag() {
            return this.availableFlag.includes(this.item.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.png`, import.meta.url);
            console.log(this.item.original_language)
            return url.href;
        },
        averageVote() {
            const vote = Math.ceil(this.item.vote_average / 2);
            return vote;
        }
    },

}


</script>

<template>
    <div class="container-card">
        <figure>
            <img :src="posterSrc" :alt="item.title">
        </figure>
        <div class="overlay">
            <ul class="list-group">
                <li>{{ item.title || item.name }}</li>
                <li>{{ item.original_title || item.original_name }}</li>
                <li>
                    <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
                    <span v-else>{{ item.original_language }}</span>
                </li>

                <!-- STAMPARE 5 STELLE USANDO UN VFOR, METTENDOLE IN LINEA -->

                <li v-for="star in 5" class="d-flex">
                    <i class="fa-regular fa-star"></i>
                </li>


            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-card {
    width: 300px;
    position: relative;
}

.overlay {
    display: none;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    img {
        height: 30px;
    }
}


ul {
    list-style-type: none;
}

li {
    color: white;
    text-align: center;
    padding: 10px 0;
}

.container-card:hover {

    figure img {
        filter: blur(10px);

    }

    .overlay {
        display: block;
    }
}
</style>