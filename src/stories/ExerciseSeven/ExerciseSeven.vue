<template>
  <div class="v-table">
    <div class="v-table_wrapper">
      <table>
        <thead>
          <tr>
            <th
              v-for="(column, index) in columns"
              :key="index"
              class="truncate"
            >
              {{ column }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="i in 20" :key="i">
            <td>{{ data.cta }}</td>
            <td>{{ data.nombre }}</td>
            <td>{{ data.descripcción }}</td>
            <td>{{ data.tiempoResultados }}</td>
            <td><span class="material-icons">summarize</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = {
  cta: "S-CG01-1",
  nombre: "TAAG CS19 SGB",
  tiempoResultados: "24 hrs",
  descripcción:
    "Detección de Estreptococo grupo B (SGB) para laboratorios o centros de salud que buscan externalizar el análisis, desde muestras de hisopado vaginorectal.",
};

const columns = [
  "CTA#",
  "NOMBRE",
  "DESCRIPCCIÓN",
  "TIEMPO DE ENTREGA DE RESULTADOS",
  "FICHA TÉCNICA",
];
</script>

<style scoped lang="scss">
.v-table {
  max-height: 300px;
  background: white;

  table {
    width: 100%;
    table-layout: fixed;
    border-spacing: 0;
  }

  .v-table_wrapper {
    max-height: 300px;
    overflow-y: auto;
  }

  thead {
    background: rgb(92, 92, 92);
    color: white;
    position: sticky;
    top: 0;

    th {
      text-align: left;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      border: thin solid white;
      border-top: none;
      padding: 4px 8px;
    }

    th:last-child {
      width: 80px;
    }

    th:nth-child(3) {
      width: 50%;
    }
  }

  tbody {
    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:nth-child(5n) td {
      border-bottom: black solid 2px;
    }

    td {
      padding: 4px 8px;
      border: thin solid hsla(0, 0%, 0%, 0.05);
    }

    td:first-child {
      min-width: 100px;
      font-weight: 500;
    }

    td:nth-child(3) {
      font-style: italic;
    }

    td:nth-child(4) {
      text-align: center;
    }

    td:last-child {
      text-align: center;
      font-size: 1.6rem;
      color: rgba(13, 138, 255, 0.5);
    }
  }
}
</style>
