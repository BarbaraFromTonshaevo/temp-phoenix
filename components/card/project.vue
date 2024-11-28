<template>
    <NuxtLink :to="url" class="card-project">
        <div class="card-project__info">
            <div class="card-project__top">
                <div class="card-project__region">
                    <div class="card-project__filter-subtitle">Город</div>
                    <div class="card-project__filter-value">{{ region }}</div>
                </div>
                <div class="card-project__segment">
                    <div class="card-project__filter-subtitle">Сегмент</div>
                    <div class="card-project__filter-value">{{ segment }}</div>
                </div>
            </div>
            <div class="card-project__title title-h3">{{ title }}</div>
        </div>
        <div class="card-project__arrow">
            <svg class="card-project__arrow-svg">
                <use xlink:href="/icons/sprite.svg#arrow-short"></use>
            </svg>
        </div>
        <div class="card-project__img image-style-cover" v-html="img.markup"></div>
    </NuxtLink>
</template> 

<script setup>
defineProps({
    img: {
        type: Object,
        default: ()=>{}
    },
    segment: {
        type: String,
        default: ""
    },
    region: {
        type: String,
        default: ""
    },
    title: {
        type: String,
        default: ""
    },
    url: {
        type: String,
        default: ""
    }
})
</script>

<style lang="scss" scoped>
.card-project{
    position: relative;
    display: grid;
    grid-template-columns: 36% 170px 1fr;
    align-items: center;
    grid-gap: 45px;
    padding: 24px 0;
    border-bottom: 1px solid var(--stroke-primary);
    &__info{
        height: 100%;
        // min-height: 500px;
        max-width: 650px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 50px;
    }
    &__top{
        display: flex;
        flex-wrap: wrap;
        gap: 20px 40px;
    }
    &__filter-subtitle{
        font-weight: 500;
        color: var(--text-default-additional);
        margin-bottom: 10px;
    }
    &__title{
        transition: color var(--time);
    }
    &__arrow{
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        background-color: var(--btn-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity var(--time);
    }
    &__arrow-svg{
        fill: var(--icons-white);
        width: 36px;
        height: 36px;
    }
    &__img{
        width: 100%;
        aspect-ratio: 841/506;
        display: flex;
    }
}
@include hover{
    .card-project:hover{
        .card-project__title{
            color: var(--text-accent);
        }
        .card-project__arrow{
            opacity: 1;
        }
    }
}
@include desktop{
    .card-project{
        grid-template-columns: 36% 100px 1fr;
        grid-gap: 35px;
    }
}
@include laptop{
    .card-project{
        grid-template-columns: 1fr 1fr;
        &__info{
            // min-height: 400px;
        }
        &__arrow{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            width: 150px;
        }
    }
}
@include tablet{
    .card-project{
        &__info{
            min-height: 300px;
        }
        &__arrow{
            opacity: 1;
            width: 100px;
            left: calc(50% + 22px);
        }
        &__img{
            height: 100%;
            aspect-ratio: initial;
        }
    }
}
@include tablet-s{
    .card-project{
        grid-gap: 30px;
        &__arrow{
            opacity: 1;
            width: 80px;
            left: calc(50% + 22px);
        }
    }
}
@include mobile{
    .card-project{
        grid-template-columns: 1fr;
        gap: 20px;
        &__img{
            order: -1;
        }
        &__top{
            font-size: 12px;
        }
        &__filter-subtitle{
            margin-bottom: 3px;
        }
        &__info{
            min-height: initial;
            gap: 20px;
        }
        &__arrow{
            transform: initial;
            top: initial;
            left: initial;
            right: 0;
            bottom: 24px;
            width: 32px;
        }
        &__arrow-svg{
            width: 14px;
            height: 14px;
        }
        &__title{
            margin-right: 45px;
        }
        &__img{
            aspect-ratio: 280/200;
            height: initial;
        }
    }
}
</style>