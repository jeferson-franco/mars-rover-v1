<template>
  <div class="app">
    <header>
      <h1>Mars Rover Mission Control</h1>
    </header>

    <main>
      <div class="mission-control">
        <div class="control-panel">
          <RoverInput />
        </div>
        <div class="grid-panel">
          <RoverGrid />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import RoverInput from './components/RoverControl/RoverInput.vue';
import RoverGrid from './components/RoverControl/RoverGrid.vue';
</script>

<style>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

header {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  color: #2c3e50;
}

.mission-control {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.control-panel,
.grid-panel {
  background: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .mission-control {
    grid-template-columns: 1fr;
  }
}
</style>
