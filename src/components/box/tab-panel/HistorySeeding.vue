<template>
  <div class="box__panel tab-active">
    <div class="history-seeding">
      <div v-for="item in history" :key="item.id" class="item">
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
        <div class="content">
          <div class="res-ogorod">
            <div class="row">
              <div>Расстояние между рядов:</div>
              <div>
                {{ distanceBetweenRows }} см ( {{ distanceBetweenRows / 100 }} м
                )
              </div>
            </div>
            <div class="row">
              <div>Растояние между кустов:</div>
              <div>
                {{ distanceBetweenBushes }} см (
                {{ distanceBetweenBushes / 100 }} м )
              </div>
            </div>
            <div class="row">
              <div>Ширина грядки:</div>
              <div>{{ width }} см ( {{ width / 100 }} м )</div>
            </div>
            <div class="row">
              <div>Длина грядки:</div>
              <div>{{ height }} см ( {{ height / 100 }} м )</div>
            </div>
            <div class="row">
              <div>Перимитр:</div>
              <div>{{ (2 * (width + height)) / 100 }} м</div>
            </div>
            <div class="row">
              <div>Площадь:</div>
              <div>
                {{ ((width / 100) * (height / 100)).toFixed(1) }} кв. м (
                {{ ((width / 100) * (height / 100) * 0.01).toFixed(1) }}
                соток )
              </div>
            </div>
            <div class="row">
              <div>В одном ряду:</div>
              <div>{{ oneRows }} кустов</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      history: [{ id: 1 }, { id: 2 }],
    };
  },
};
</script>

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
    border: 1px solid #194484;
    padding: 4px 10px;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 600;
    background: none;
    color: #194484;
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
