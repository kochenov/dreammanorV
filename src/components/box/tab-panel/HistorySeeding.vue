<template>
  <div class="box__panel tab-active">
    <div v-if="errorDataApi">
      <div class="alert">Ошибка загрузки данных!</div>
    </div>
    <div v-if="loadingDataApi" class="alert loading">Загрузка данных ...</div>
    <div class="history-seeding">
      <div class="history-seeding__inform">
        <div class="todgge">
          <button></button>
        </div>
        <div class="todgge">
          <button></button>
        </div>
        <div class="todgge">
          <button></button>
        </div>
      </div>
      <div v-for="item in history" :key="item.id" class="item">
        <div class="title">
          <h3>{{ item.name }}</h3>
          <span class="date-history">{{ item.dateAdd }}</span>
        </div>
        <div class="meta">
          <div class="product-name ticket">
            <span>{{ item.vegetables.vegetable.name }}</span>
          </div>
          <div class="sort ticket">
            Сорт: <span>{{ item.vegetables.name }}</span>
          </div>
          <div class="bushes ticket">
            Кустов: <span>{{ item.bushes }} шт.</span>
          </div>
          <div class="bushes ticket">
            Рядов: <span>{{ item.rows }} шт.</span>
          </div>
          <div class="todgge">
            <button @click="item.exp = !item.exp">
              <fa v-if="!item.exp" icon="arrow-right" />
              <fa v-if="item.exp" icon="arrow-down" />
            </button>
          </div>
        </div>
        <div v-show="item.exp" class="content">
          <div class="res-ogorod">
            <div class="row">
              <div>Расстояние между рядов:</div>
              <div>
                {{ item.vegetables.distanceBetweenRows }} см (
                {{ item.vegetables.distanceBetweenRows / 100 }} м )
              </div>
            </div>
            <div class="row">
              <div>Растояние между кустов:</div>
              <div>
                {{ item.vegetables.distanceBetweenBushes }} см (
                {{ item.vegetables.distanceBetweenBushes / 100 }} м )
              </div>
            </div>
            <div class="row">
              <div>Ширина грядки:</div>
              <div>
                {{ widh(item.rows, item.vegetables.distanceBetweenRows) }} см (
                {{ widh(item.rows, item.vegetables.distanceBetweenRows) / 100 }}
                м )
              </div>
            </div>
            <div class="row">
              <div>Длина грядки:</div>
              <div>
                {{
                  height(
                    oneRows(item.bushes, item.rows),
                    item.vegetables.distanceBetweenBushes
                  )
                }}
                см (
                {{
                  height(
                    oneRows(item.bushes, item.rows),
                    item.vegetables.distanceBetweenBushes
                  ) / 100
                }}
                м )
              </div>
            </div>
            <div class="row">
              <div>Перимитр:</div>
              <div>
                {{
                  (2 *
                    (widh(item.rows, item.vegetables.distanceBetweenRows) +
                      height(
                        oneRows(item.bushes, item.rows),
                        item.vegetables.distanceBetweenBushes
                      ))) /
                  100
                }}
                м
              </div>
            </div>
            <div class="row">
              <div>Площадь:</div>
              <div>
                {{
                  (
                    (widh(item.rows, item.vegetables.distanceBetweenRows) /
                      100) *
                    (height(
                      oneRows(item.bushes, item.rows),
                      item.vegetables.distanceBetweenBushes
                    ) /
                      100)
                  ).toFixed(1)
                }}
                кв. м (
                {{
                  (
                    (widh(item.rows, item.vegetables.distanceBetweenRows) /
                      100) *
                    (height(
                      oneRows(item.bushes, item.rows),
                      item.vegetables.distanceBetweenBushes
                    ) /
                      100) *
                    0.01
                  ).toFixed(1)
                }}
                соток )
              </div>
            </div>
            <div class="row">
              <div>В одном ряду:</div>
              <div>{{ oneRows(item.bushes, item.rows) }} кустов</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      errorDataApi: false,
      loadingDataApi: true,
      history: null,

      // history: [
      //   {
      //     id: 1,
      //     exp: false,
      //     title: "Грядка в полесаднике рядом со входом слева от калитки",
      //     vegetable: "Томаты",
      //     bushes: 15,
      //     sort: "Столыпин",
      //     rows: 2,
      //     distanceBetweenRows: 60,
      //     distanceBetweenBushes: 50,
      //     oneRows: 7,
      //     width: 1400,
      //     height: 1800,
      //     dateAdd: "21 Января 2020",
      //   },
      //   {
      //     id: 2,
      //     exp: false,
      //     title: "Грядка у уличного туалета в тени от сарая слева",
      //     vegetable: "Огурцы",
      //     bushes: 25,
      //     sort: "Пальчик",
      //     rows: 5,
      //     distanceBetweenRows: 60,
      //     distanceBetweenBushes: 50,
      //     oneRows: 7,
      //     width: 1300,
      //     height: 1700,
      //     dateAdd: "22 Января 2020",
      //   },
      // ],
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/V1/vegetable-calculate",
      params: {
        //user_key_id: "USER_KEY_ID",
      },
      data: {},
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        this.history = response.data.data;
        console.log(response.data.data);
      })
      .catch((error) => {
        this.errorDataApi = true;
        console.log(error);
      })
      .finally(() => {
        this.loadingDataApi = false;
      });
  },
  methods: {
    /**
     * Возвращает количество кустов одном ряду
     * @param {*} bushes
     * @param {*} rows
     */
    oneRows(bushes, rows) {
      return Math.ceil(bushes / rows);
    },
    /**
     * Расчитывает ширину грядки
     * @param {*} rows
     * @param {*} distanceBetweenRows
     */
    widh(rows, distanceBetweenRows) {
      return rows * distanceBetweenRows + distanceBetweenRows;
    },
    /**
     * Расчитывает длину грядки
     * @param {*} oneRows
     * @param {*} distanceBetweenBushes
     */
    height(oneRows, distanceBetweenBushes) {
      return oneRows * distanceBetweenBushes + distanceBetweenBushes;
    },
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
      margin-left: 10px;
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

  &__inform {
    display: flex;
    gap: 15px;
    justify-content: end;
    margin-bottom: 10px;
    .todgge {
      margin-left: 0;
    }
  }
}
</style>
