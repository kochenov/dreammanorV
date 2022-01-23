<template>
  <div class="box__panel tab-active">
    <div class="history-seeding">
      <div class="item">
        <div class="title">
          <h3>Грядка в полесаднике рядом со входом слева от калитки</h3>
          <span class="date-history">11 Января 2022</span>
        </div>
        <div class="meta">
          <div class="product-name ticket">Овощь: <span>Томат</span></div>
          <div class="sort ticket">Сорт: <span>Столыпин</span></div>
          <div class="bushes ticket">
            Количество кустов: <span>15 шт.</span>
          </div>
          <div class="todgge">
            <button>
              <fa icon="arrow-right" />
            </button>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="title">
          <h3>Грядка в полесаднике рядом со входом слева от калитки</h3>
          <span class="date-history">11 Января 2022</span>
        </div>
        <div class="meta">
          <div class="product-name ticket">Овощь: <span>Томат</span></div>
          <div class="sort ticket">Сорт: <span>Столыпин</span></div>
          <div class="bushes ticket">
            Количество кустов: <span>15 шт.</span>
          </div>
          <div class="todgge">
            <button>
              <fa icon="arrow-right" />
            </button>
          </div>
        </div>
      </div>

      <div class="item">
        <div class="title">
          <h3>Грядка в полесаднике рядом со входом слева от калитки</h3>
          <span class="date-history">11 Января 2022</span>
        </div>
        <div class="meta">
          <div class="product-name ticket">Овощь: <span>Томат</span></div>
          <div class="sort ticket">Сорт: <span>Столыпин</span></div>
          <div class="bushes ticket">
            Количество кустов: <span>15 шт.</span>
          </div>
          <div class="todgge">
            <button>
              <fa icon="arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <h3 class="box__panel-title">
      Зачем нужна история расчётов грядок для томатов?
    </h3>
    <div class="box__panel-content">
      <p>
        Когда наступает весна, садоводы и огородники начинают планировать
        посадку овощей на свой огород, а томат это один из самых важных овощей,
        и к его посадке нужно относится с большой ответственностью. Начинается
        конечно же всё с рассады, но когда первые семячки томатов проклюнулись и
        взошли начинается планирование грядок
      </p>
      К сожалению не всегда есть возможность высчитывать сколько кустов займут
      место на огороде и записывать это всё в тетрадь.
      <p>
        Мы решили облегчить этот процесс и добавили на сайт различные
        калькуляторы расчёта площади грядок под посадки различных овощей, и
        томат у нас на первом месте.
      </p>
      Произведя расчёт в калькуляторе грядок под томаты Вы можете его сохранить,
      задав название расчёту для повторного его использования. После сохраниния
      в истории расчётов будет списох сохранённых вычислений. Это очень удобно,
      так как можно примерно прикинуть сколько грядок у вас будет, а когда время
      придёт к высадке томаков в грядки Вы уже будите знать каким образом их
      рассаживать.
    </div>
  </div>
</template>
<style scoped lang="scss">
.history-seeding {
  .title,
  .meta {
    display: flex;
    justify-content: space-between;
    padding: 5px 0;
  }
  .meta {
    justify-content: start;
    align-items: center;
    gap: 20px;
  }
  .ticket {
    border: 1px solid green;
    padding: 4px 10px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    background: #194484;
    color: #ffffff;
  }
  .item {
    margin: 0 0 40px 0;
    border: 1px solid #06b25f;
    padding: 10px 15px;
  }
  .todgge {
    margin-left: auto;
    button {
      cursor: pointer;
      padding: 1px 10px;
      border: 2px solid #06b25f;
      background: #f0f0f000;
      color: #06b25f;
      box-shadow: none;
      &:hover {
        border: 2px solid #000000;
        background: #f0f0f000;
        color: #000000;
      }
    }
  }
}
</style>
