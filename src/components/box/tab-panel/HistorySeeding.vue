<template>
  <div class="box__panel tab-active">
    <div v-if="errorDataApi">
      <div class="alert">Ошибка загрузки данных!</div>
    </div>
    <div v-if="loadingDataApi" class="alert loading">Загрузка данных ...</div>
    <div class="history-seeding">
      <div v-for="item in history" :key="item.id" class="item">
        <div class="title">
          <h3>{{ item.name }}</h3>
          <div v-if="item.edit" class="input-edit">
            <form>
              <div class="form-input">
                <div class="grup">
                  <label>Новое именование сохранённого расчёта грядки</label>
                  <input type="text" :value="item.name" />
                </div>
              </div>
              <div class="form-input">
                <div class="grup">
                  <label>Количество кустов</label>
                  <input type="number" :value="item.bushes" />
                </div>
                <div class="grup">
                  <label>Количество рядов</label>
                  <input type="number" :value="item.rows" />
                </div>
              </div>
              <div class="wrap-btn">
                <button class="btn btn-cancel" @click.prevent="btnClose(item)">
                  Отмена
                </button>
                <button class="btn" @click.prevent="true">
                  Сохранить изменения
                </button>
              </div>
            </form>
          </div>
          <span class="date-history">{{ formatDate(item.created_at) }}</span>
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
            <button
              v-if="item.edit !== true"
              @click="btnEdit(item)"
              class="btn-edit"
            >
              <fa icon="pen-to-square" />
            </button>
            <button class="btn-del">
              <fa icon="trash-can" />
            </button>
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
      history: "",
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
    formatDate(d) {
      let options = {
        //weekday: false,
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      let dateTime = new Date(Date.parse(d));

      return dateTime.toLocaleDateString("ru-RU", options);
    },
    btnEdit(item) {
      item.edit = true;
      item.exp = true;
      return item;
    },
    btnClose(item) {
      item.edit = false;
      return item;
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
    position: relative;
    .input-edit {
      height: 100%;
      width: 100%;
      padding: 0 10px;
      background: #000000c2;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      align-content: center;
      form {
        width: 100%;
        color: white;
      }
      input {
        border-radius: 3px;
      }
      .wrap-btn {
        display: flex;
        justify-content: flex-end;
        gap: 20px;
        .btn {
          margin: 15px 0;
        }

        .btn-cancel {
          color: rgb(231, 231, 4) !important;
          background: rgba(255, 255, 255, 0) !important;
          box-sizing: border-box;
          border: 1px solid rgb(231, 231, 4) !important;
          &:hover {
            color: rgb(255, 255, 255) !important;
            // background: #ccc !important;
            border-color: rgb(255, 255, 255) !important;
          }
        }
      }
    }
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
    justify-content: flex-end;
    margin-bottom: 10px;
    .todgge {
      margin-left: 0;
    }
  }
}
.btn-edit {
  color: rgb(165, 165, 0) !important;
  border-color: rgb(192, 192, 9) !important;
  &:hover {
    color: black !important;
    border-color: black !important;
  }
}

.btn-del {
  color: rgb(165, 19, 0) !important;
  border-color: rgb(165, 19, 0) !important;
  &:hover {
    color: black !important;
    border-color: black !important;
  }
}
.date-history {
  font-size: 11px;
  text-transform: capitalize;
}
</style>
