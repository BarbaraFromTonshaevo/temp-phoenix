<template>
    <section class="product-services">
        <h2 class="product-services__title title-h3"><strong>Бесплатное проектирование склада или ангара.</strong> Узнайте поэтапный план работы над вашим будущим проектом</h2>
        <ButtonBase name="secondary"  class="product-services__btn" size="large" mode="nuxt-link" link="/services">Перейти к услугам</ButtonBase>
        <div class="product-services__img">
            <img src="/images/product.png" alt="">
        </div>
    </section>
</template>

<style lang="scss">
.product-services{
    &__title{
        margin-bottom: 40px;
    }
    &__btn{
        width: fit-content;
        margin-bottom: 60px;
    }
    &__img{
        width: 100%;
        img{
            max-width: 100%;
        }
    }
}
@include mobile{
    .product-services{
        &__title{
            margin-bottom: 24px;
        }
        &__btn{
            margin-bottom: 32px;
        }
        &__img{
            width: calc(100% + 20px);
            margin-right: -20px;
            aspect-ratio: 300/170;
            display: flex;
            img{
                object-fit: cover;
                object-position: 0 0;
            }
        }
    }
}
</style>