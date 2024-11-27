<template>
    <section class="front-about section-mb">
        <div class="container">
            <h2 class="section-subtitle">о компании</h2>
            <div class="front-about__top">
                <h2 class="front-about__title title-h2"><strong>ТМК «Феникс»</strong> - одна из крупнейших компаний в сфере строительства самонесущих складов и ангаров из ЛСТК</h2>
                <ButtonBase class="front-about__btn" name="secondary" size="large" mode="nuxt-link" link="/about">Подробнее о компании</ButtonBase> 
            </div>
            <div class="front-about__body">
                 <div class="front-about__aside">
                    <h4 class="title-h4">Мы предлагаем современные и надежные решения</h4>
                    <div class="front-about__img">
                        <img src="/images/front/about.png" alt="">
                    </div>
                    <p class="front-about__descr">Наши конструкции быстры в монтаже, долговечны и экономичны.</p>
                 </div>
                 <div class="front-about__wrap">
                    <div class="front-about__data title-h3">более 500</div>
                    <p class="front-about__data-text">Выполненных проектов по оснащению складов и производств стеллажным оборудованием, строительству самонесущих складов и ангаров из ЛСТК под ключ.</p>
                 </div>
                 <div class="front-about__wrap">
                    <div class="front-about__data title-h3">с 2008 года</div>
                    <p class="front-about__data-text">Проектируем, производим и строим оптимальные проекты, которые соответствуют потребностям и бюджетам наших клиентов.</p>
                 </div>
                 <div class="front-about__wrap">
                    <div class="front-about__data title-h3">1000 тонн</div>
                    <p class="front-about__data-text">Металла в год перерабатывается для строительства наших проектов.</p>
                 </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.front-about{
    &__top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px 50px;
        margin-bottom: 80px;
    }
    &__title{
        max-width: 1170px;
    }
    &__body{
        display: grid;
        grid-template-columns: 4fr 8fr;
        grid-gap: 6px;
    }
    &__img{
        max-width: 100%;
        width: 100%;
        aspect-ratio: 484/270;
        display: flex;
        img{
            width: 100%;
            height: 100%;
            display: flex;
            object-fit: contain;
        }
    }
    &__aside{
        grid-row: span 3;
        background-color: var(--bg-secondary);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 30px;
        padding: 60px;
    }
    &__descr{
        max-width: 390px;
        font-size: 18px;
        color: var(--text-default-secondary);
    }
    &__wrap{
        min-height: 200px;
        background-color: var(--bg-secondary);
        display: grid;
        grid-template-columns: 5fr 7fr;
        align-items: center;
        padding: 50px 100px;
        gap: 15px 50px;
    }
    &__data{
        white-space: nowrap;
    }
    &__data-text{
        font-size: 18px;
        color: var(--text-default-secondary);
    }
}
@include desktop{
    .front-about{
        &__aside{
            padding: 50px;
        }
        &__wrap{
            grid-template-columns: 4fr 8fr;
            padding: 50px;
        }
        &__data-text{
            font-size: 16px;
        }
    }
}
@include tablet{
    .front-about{
        &__aside{
            padding: 25px;
        }
        &__descr{
            font-size: 14px;
        }
        &__wrap{
            min-height: initial;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: start;
            padding: 25px;
        }
        &__data-text{
            font-size: 14px;
        }
    }
}
@include tablet-s{
    .front-about{
        &__top{
            margin-bottom: 40px;
        }
        &__body{
            grid-template-columns: 1fr;
        }
        &__aside{
            grid-row: 4/5;
        }
        &__img{
            max-width: 400px;
        }
    }
}
@include mobile{
    .front-about{
        &__btn{
            width: 100%;
        }
    }
}
</style>