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
      <div class="data-res-view" v-if="result">
        <div id="rezult">
          <div class="res-ogorod">
            <div class="distance-between-rows">
              <b
                >Расстояние между рядов: {{ distanceBetweenRows }} см (
                {{ distanceBetweenRows / 100 }} м )</b
              >
            </div>
            <div class="distance-between-bushes">
              <b
                >Растояние между кустов: {{ distanceBetweenBushes }} см (
                {{ distanceBetweenBushes / 100 }} м )</b
              ><br />
            </div>
            <div class="width">
              <b>Ширина грядки: ${width} см ( ${width / 100} м ) </b>
            </div>
            <div class="height">
              <b>Длина грядки: ${height} см ( ${height / 100} м )</b>
            </div>
            <div class="perimetr">
              <b>Перимитр: ${(2 * (width + height)) / 100} м</b>
            </div>
            <div class="ploshad">
              <b
                >Площадь: ${((width / 100) * (height / 100)).toFixed(1)} кв. м (
                ${((((width / 100) * (height / 100))) * 0.01).toFixed(1)} соток
                )
              </b>
            </div>
            <div class="one-rows">
              <b>В одном ряду: ${oneRows} кустов</b>
            </div>
          </div>
        </div>
        <div class="btn-group">
          <button class="btn" id="calc-tomat-save">Сохранить результат</button
          ><button class="btn" id="calc-tomat-plan">
            Запланировать посадку
          </button>
        </div>
        <div class="picture"><canvas id="canvas"></canvas></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      sorts: [
        {
          id: 1,
          name: "Столыпин",
          distanceBetweenRows: 70,
          distanceBetweenBushes: 100,
        },
        {
          id: 2,
          name: "Сорт 1",
          distanceBetweenRows: 40,
          distanceBetweenBushes: 40,
        },
        {
          id: 3,
          name: "Сорт 2",
          distanceBetweenRows: 50,
          distanceBetweenBushes: 60,
        },
        {
          id: 4,
          name: "Сорт 3",
          distanceBetweenRows: 60,
          distanceBetweenBushes: 70,
        },
      ],
      currentSort: "default",
      distanceBetweenRows: "",
      distanceBetweenBushes: "",
      bushes: 1,
      rows: 1,
      result: false,
      message: "",
    };
  },
  methods: {
    getSortData() {
      if (this.currentSort !== "default") {
        this.distanceBetweenRows = this.currentSort.distanceBetweenRows;
        this.distanceBetweenBushes = this.currentSort.distanceBetweenBushes;
      }
    },
    submitToResult() {
      if (
        this.distanceBetweenRows !== "" &&
        this.distanceBetweenBushes !== "" &&
        this.bushes !== "" &&
        this.rows !== ""
      ) {
        if (!this.result) {
          this.result = true;
          this.message = "";
        }
      } else {
        this.message = ["Пожалуйста, заполните все поля формы!"];
        this.result = false;
      }
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
</style>
