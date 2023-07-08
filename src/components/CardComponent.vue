<script>
export default {
    props: {
        item: Object
    },
    data() {
        return {
            availableFlag: ['it', 'en'],
        }
    },
    computed: {
        posterDefault() {
            const url = new URL("../assets/img/boolflix.png", import.meta.url);
            return url.href;
        },
        posterSrc() {
            const posterUrl = `http://image.tmdb.org/t/p/w300${this.item.poster_path}`;
            if (this.item.poster_path === null) {
                return this.posterDefault;
            } else return posterUrl
        },
        hasFlag() {
            return this.availableFlag.includes(this.item.original_language);
        },
        flagSrc() {
            const url = new URL(`../assets/img/${this.item.original_language}.png`, import.meta.url);
            return url.href;
        },
        getVote() {
            const vote = Math.ceil(this.item.vote_average / 2);
            return vote;
        },
    },
    methods: {
        iconStyle(star) {
            return star <= this.getVote ? 'fas' : 'far';
        }
    }

}
</script>

<template>
    <div class="container-card">
        <figure>
            <img :src="posterSrc" :alt="item.title">
        </figure>
        <div class="overlay">
            <ul class="list-group">
                <li class="title">{{ item.title || item.name }}</li>
                <li>{{ item.original_title || item.original_name }}</li>
                <li>{{ item.overview }}</li>
                <li>
                    <img v-if="hasFlag" :src="flagSrc" :alt="item.original_language">
                    <span v-else>{{ item.original_language }}</span>
                </li>
                <li>
                    <FontAwesomeIcon v-for="star in 5" :key="star" :icon="[iconStyle(star), 'star']" class="px-1" />
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-card {
    width: 300px;
    height: 450px;
    margin: 10px;
    position: relative;
}

.overlay {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    overflow: auto;

    img {
        height: 30px;
    }
}

ul {
    list-style-type: none;
}

li {
    color: white;
    text-shadow: 2px 2px 8px #0f0f0f;
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

figure img {
    height: 450px;
    width: 100%;
    display: block;
}

.title {
    font-weight: 600;
    font-size: 1.5rem;
}

/*** custom scrollbar ****/

::-webkit-scrollbar {
    width: 5px;
    height: 5px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: #727171;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #555;
}
</style>