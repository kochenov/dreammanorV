<template>
  <div class="box__panel tab-active">
    <div class="calc-seeding">
      <div v-if="message != ''">
        <div class="alert" v-for="(text, index) in message" :key="index">
          {{ text }}
        </div>
      </div>
      <form id="calc-veget" action="" method="get">
        <div class="form-input">
          <div class="grup">
            <label for="sort-tomat">Выбирите сорт томата</label
            ><select
              @change="getSortData"
              id="sort-tomat"
              name="sort-tomat"
              v-model="currentSort"
            >
              <option selected value="default">
                Без сорта (Универсальные значения)
              </option>
              <option v-for="item in sorts" :key="item.id" :value="item">
                {{ item.name }}
              </option>
            </select>
          </div>
          <div class="grup">
            <label for="sort-tomat">Количество кустов</label
            ><input
              id="bushes"
              type="number"
              min="1"
              :class="{
                error: bushes === '' && message !== '',
              }"
              v-model="bushes"
              placeholder="Сколько кустов"
            />
          </div>
          <div class="grup">
            <label for="sort-tomat">Количество рядов</label
            ><input
              id="rows"
              type="number"
              :class="{
                error: rows === '' && message !== '',
              }"
              v-model="rows"
              requred
              min="1"
              placeholder="Сколько будет рядов"
            />
          </div>
        </div>
        <div class="form-input">
          <div class="grup">
            <label for="sort-tomat">Расстояние между рядов, см</label
            ><input
              id="distance-between-rows"
              type="number"
              min="1"
              placeholder="70 см"
              :class="{
                error: distanceBetweenRows === '' && message !== '',
              }"
              v-model="distanceBetweenRows"
            />
          </div>
          <div class="grup">
            <label for="sort-tomat">Расстояние между кустов, см</label
            ><input
              id="distance-between-bushes"
              type="number"
              min="1"
              placeholder="100 см"
              :class="{
                error: distanceBetweenBushes === '' && message !== '',
              }"
              v-model="distanceBetweenBushes"
            />
          </div>
        </div>
        <div class="btn-group">
          <button
            @click.prevent="submitToResult"
            class="btn"
            id="calc-tomat-submit"
          >
            Сделать расчёт
          </button>
        </div>
      </form>
      <div v-if="result" class="data-res-view">
        <div ref="canvasRow" id="rezult">
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
        <div class="btn-group">
          <div
            v-show="saveResultBtn"
            class="rotate-scale-down"
            id="save-input-wrap"
          >
            <div class="btn-save grup">
              <input
                name="saveInput"
                id="save-input"
                placeholder="Введите название грядки"
              />
              <button class="btn">Сохранить</button>
            </div>
          </div>
          <button
            class="btn"
            @click="saveResultBtn = !saveResultBtn"
            id="calc-tomat-save"
          >
            Сохранить результат</button
          ><button class="btn" id="calc-tomat-plan">
            Запланировать посадку
          </button>
        </div>
      </div>
      <div class="picture" v-show="width !== 0 && height !== 0">
        <h3>Схема грядки</h3>
        <canvas ref="canvas" id="canvas"></canvas>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      sorts: null,
      // sorts: [
      //   {
      //     id: 1,
      //     name: "Столыпин",
      //     distanceBetweenRows: 70,
      //     distanceBetweenBushes: 100,
      //   },
      //   {
      //     id: 2,
      //     name: "Сорт 1",
      //     distanceBetweenRows: 40,
      //     distanceBetweenBushes: 40,
      //   },
      //   {
      //     id: 3,
      //     name: "Сорт 2",
      //     distanceBetweenRows: 50,
      //     distanceBetweenBushes: 60,
      //   },
      //   {
      //     id: 4,
      //     name: "Сорт 3",
      //     distanceBetweenRows: 60,
      //     distanceBetweenBushes: 70,
      //   },
      // ],
      currentSort: "default", // Текущий сорт овоща
      distanceBetweenRows: "", // Расстояние между рядов
      distanceBetweenBushes: "", // Расстояние между кустов
      bushes: 1, // Количество кустов
      rows: 1, // Количество рядов
      result: false, // Состояние нажатой кнопки
      message: "", // Ошибки в отправке формы
      width: 0, // Ширина грядки
      height: 0, // Длины грядки
      oneRows: 0, // Кустов в одном ряду
      saveResultBtn: false, //  кнопка сохранить название грядки
    };
  },
  mounted() {
    axios({
      method: "GET",
      url: "http://127.0.0.1:8000/api/V1/vegetable/1",
      params: {
        //user_key_id: "USER_KEY_ID",
      },
      data: {},
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => this.dataExt(response))
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    dataExt(respons) {
      this.sorts = respons.data.data.sorts;
    },
    // Метод срабатывает при изменении сорта овоща
    getSortData() {
      // Если выбран сорт овоща
      if (this.currentSort !== "default") {
        // Сохраняем результаты из настроек сорта в переменные
        this.distanceBetweenRows = this.currentSort.distanceBetweenRows;
        this.distanceBetweenBushes = this.currentSort.distanceBetweenBushes;
      }
    },
    // При нажатии на кнопку отправки формы
    submitToResult() {
      // Если все поля формы заполнены
      if (
        this.distanceBetweenRows !== "" &&
        this.distanceBetweenBushes !== "" &&
        this.bushes !== "" &&
        this.rows !== ""
      ) {
        if (this.bushes >= this.rows) {
          // Если кнопка не была ранее нажата
          if (!this.result) {
            // меняем состояние на нажатое
            this.result = true;
            // Очищаем список ошибок
            this.message = "";
          }
          // Количество кустов в одном ряду
          this.oneRows = Math.ceil(this.bushes / this.rows);
          // Ширины грядки
          this.width =
            this.rows * this.distanceBetweenRows + this.distanceBetweenRows;
          // Длины грядки
          this.height =
            this.oneRows * this.distanceBetweenBushes +
            this.distanceBetweenBushes;

          let сanvasEl = this.$refs.canvas;
          сanvasEl.setAttribute("width", Math.ceil(this.height / 2));
          // Растягиваем полотно по высоте
          сanvasEl.setAttribute("height", Math.ceil(this.width / 2));
          let canvas = сanvasEl.getContext("2d");

          // Рисуем прямоугольник
          canvas.strokeRect(
            0,
            0,
            Math.ceil(this.height / 2),
            Math.ceil(this.width / 2)
          );
          this.canvasRow(canvas);

          setTimeout(() => {
            this.$refs.canvasRow.scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          }, 1);
        } else {
          // Если не все поля заполнены выводим сообщение
          this.message = [
            "Количество рядов не должно превышать количество кустов!",
          ];
          // Меняем состояние
          this.result = false;
        }
      } else {
        // Если не все поля заполнены выводим сообщение
        this.message = ["Пожалуйста, заполните все поля формы!"];
        // Меняем состояние
        this.result = false;
      }
    },
    // Рисует полотно под грядки
    canvasRow(canvas) {
      let l = 0;
      let iteracia = 0;
      let w = 0;
      for (let i = 1; i <= this.bushes; ++i) {
        if (this.oneRows == iteracia) {
          iteracia = 0;
          l = 0;
          w = w + this.distanceBetweenRows;
        }
        this.createImage(
          canvas,
          this.distanceBetweenRows + w,
          this.distanceBetweenBushes + l
        );

        l = l + this.distanceBetweenBushes;
        ++iteracia;
      }
    },
    createImage(canvas, r, l) {
      l = l / 2;
      r = r / 2;
      var circle = new Path2D();
      //circle.moveTo(125, 35);
      circle.arc(l, r, 2, 0, 2 * Math.PI);
      canvas.fill(circle);
    },
  },
};
</script>
<style lang="scss">
.alert {
  color: red;
  padding: 15px 30px;
  border: 1px solid red;
  border-radius: 3px;
  background-color: #fff;
  margin-bottom: 15px;
}
.error {
  border: 1px solid red;
}
.res-ogorod {
  .row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #a0a0a021;
  }
}

#save-input-wrap {
  box-shadow: 0 0 3px #777;

  position: absolute;
  bottom: 40px;
  left: 35%;
  right: 35%;

  .btn-save {
    display: flex;
    justify-content: center;
    gap: 5px;
    padding: 4px;
    border-radius: 3px;
    background-color: rgb(255, 255, 255);

    width: auto;
    margin: 0 auto;
    box-shadow: 0 0 3px rgb(0, 0, 0);
  }

  input {
    width: 80%;
    padding: 5px 7px;
  }

  .btn {
    padding: 5px 7px;
  }
}

.picture {
  h3 {
    text-align: center;
    padding-bottom: 20px;
  }
}
.rotate-scale-down {
  -webkit-animation: rotate-scale-down 0.65s linear both;
  animation: rotate-scale-down 0.65s linear both;
}

/* ----------------------------------------------
 * Generated by Animista on 2022-1-10 19:7:17
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation rotate-scale-down
 * ----------------------------------------
 */
@-webkit-keyframes rotate-scale-down {
  0% {
    -webkit-transform: scale(1) rotateZ(0);
    transform: scale(1) rotateZ(0);
  }

  50% {
    -webkit-transform: scale(0.5) rotateZ(180deg);
    transform: scale(0.5) rotateZ(180deg);
  }

  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
    transform: scale(1) rotateZ(360deg);
  }
}

@keyframes rotate-scale-down {
  0% {
    -webkit-transform: scale(1) rotateZ(0);
    transform: scale(1) rotateZ(0);
  }

  50% {
    -webkit-transform: scale(0.5) rotateZ(180deg);
    transform: scale(0.5) rotateZ(180deg);
  }

  100% {
    -webkit-transform: scale(1) rotateZ(360deg);
    transform: scale(1) rotateZ(360deg);
  }
}
</style>
