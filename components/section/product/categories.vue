<template>
    <section class="product-categories">
        <h2 class="product-categories__title title-h3">Другие категории</h2>
        <ul class="product-categories__list">
            <li class="product-categories__item" v-for="category of properties" :key="category.title">
                <NuxtLink :to="category.url" class="product-categories__link">
                    <div class="product-categories__text">{{ category.title }}</div>
                    <div class="product-categories__icon">
                        <svg>
                            <use xlink:href="/icons/sprite.svg#arrow-short"></use>
                        </svg>
                    </div>
                </NuxtLink>
            </li>
        </ul>
    </section>
</template>

<script setup>
const props = defineProps({
  properties: {
    type: Array,
    required: true,
    default: ()=>[],
  },
});
</script>

<style lang="scss">
.product-categories{
    &__title{
        margin-bottom: 60px;
    }
    &__list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 6px;
    }
    &__link{
        height: 100%;
        min-height: 200px;
        padding: 24px;
        display: flex;
        gap: 30px;
        align-items: end;
        justify-content: space-between;
        border: 1px solid var(--stroke-primary);
    }
    &__text{
        font-weight: 500;
        font-size: 18px;
        transition: color var(--time);
    }
    &__icon{
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            width: 20px;
            height: 20px;
            fill: var(--icons-black);
            transition: fill var(--time), transform var(--time);
        }
    }
}
@include hover{
    .product-categories{
        &__link:hover{
            .product-categories__text{
                color: var(--text-accent);
            }
            .product-categories__icon{
                svg{
                    fill: var(--icons-red);
                    transform: rotate(45deg);
                }
            }
        }
    }
}
@include tablet{
    .product-categories{
        &__title{
            margin-bottom: 40px;
        }
        &__text{
            font-size: 16px;
        }
    }
}
@include tablet-s{
    .product-categories{
        &__link{
            padding: 20px;
            align-items: start;
            flex-direction: column;
        }
        &__icon{
            width: 42px;
            height: 42px;
            margin-left: auto;
        }
    }
}
@include mobile{
    .product-categories{
        &__title{
            margin-bottom: 32px;
        }
        &__list{
            grid-template-columns: 1fr;
        }
        &__link{
            min-height: 160px;
        }
        &__text{
            font-size: 14px;
        }
    }
}
</style>