<template>
  <div class="box__panel tab-active">
    <div class="calc-seeding">
      <form id="calc-veget" action="" method="get">
        <div class="form-input">
          <div class="grup">
            <label for="sort-tomat">Выбирите сорт томата</label
            ><select id="sort-tomat" name="sort-tomat">
              <option selected value="default">
                Без сорта (Универсальные значения)
              </option>
              <option value="Столыпин">Столыпин</option>
              <option value="Томат 2">Томат 2</option>
              <option value="Томат 3">Томат 3</option>
              <option value="Томат 4">Томат 4</option>
              <option value="Томат 5">Томат 5</option>
              <option value="Томат 6">Томат 6</option>
            </select>
          </div>
          <div class="grup">
            <label for="sort-tomat">Количество кустов</label
            ><input
              id="bushes"
              type="number"
              value="1"
              min="1"
              placeholder="Сколько кустов"
            />
          </div>
          <div class="grup">
            <label for="sort-tomat">Количество рядов</label
            ><input
              id="rows"
              type="number"
              value="1"
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
            />
          </div>
          <div class="grup">
            <label for="sort-tomat">Расстояние между кустов, см</label
            ><input
              id="distance-between-bushes"
              type="number"
              min="1"
              placeholder="100 см"
            />
          </div>
        </div>
        <div class="btn-group">
          <button class="btn" id="calc-tomat-submit">Сделать расчёт</button>
        </div>
      </form>
      <div class="data-res-view">
        <div id="rezult"></div>
        <div class="btn-group hidden">
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
