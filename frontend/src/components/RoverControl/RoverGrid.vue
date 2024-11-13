<template>
  <div class="grid-container">
    <div class="grid-info">
      Plateau Size: {{ store.plateau.x + 1 }}x{{ store.plateau.y + 1 }}
    </div>
    <div class="grid" :style="gridStyle">
      <template v-for="y in gridRows" :key="`row-${y}`">
        <div
          v-for="x in gridCols"
          :key="`cell-${x}-${y}`"
          class="grid-cell"
          :class="{ 'has-rover': hasRover(x - 1, gridRows - y) }"
        >
          {{ getCellContent(x - 1, gridRows - y) }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { store } from '@/store/roverStore';

export default defineComponent({
  name: 'RoverGrid',

  setup() {
    const gridRows = computed(() => store.plateau.y + 1);
    const gridCols = computed(() => store.plateau.x + 1);

    const gridStyle = computed(() => ({
      display: 'grid',
      gridTemplateColumns: `repeat(${gridCols.value}, 50px)`,
      gridTemplateRows: `repeat(${gridRows.value}, 50px)`,
      gap: '2px',
    }));

    const hasRover = (x, y) => {
      return store.rovers.some((rover) => {
        const [rX, rY] = rover.position.split(' ').map(Number);
        return rX === x && rY === y;
      });
    };

    const getCellContent = (x, y) => {
      const rover = store.rovers.find((rover) => {
        const [rX, rY] = rover.position.split(' ').map(Number);
        return rX === x && rY === y;
      });

      if (rover) {
        const direction = rover.position.split(' ')[2];
        return `🤖 ${direction}`;
      }

      return `${x},${y}`;
    };

    return {
      store,
      gridRows,
      gridCols,
      gridStyle,
      hasRover,
      getCellContent,
    };
  },
});
</script>

<style scoped>
.grid-container {
  padding: 20px;
}

.grid-info {
  margin-bottom: 10px;
  font-weight: bold;
}

.grid {
  border: 2px solid #333;
  background: #f0f0f0;
}

.grid-cell {
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8em;
  background: white;
  height: 50px;
}

.has-rover {
  background: #e3f2fd;
  font-weight: bold;
}
</style>
