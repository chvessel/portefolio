<script setup>
import { ref } from 'vue'

const activeOption = ref('free') 
</script>

<template>
  <div class="toggle">
    <div class="toggle-track">
      <div class="toggle-thumb"></div>

      <label class="toggle-label" for="free">Free</label>
      <input type="radio" id="free" value="free" v-model="activeOption" class="hidden-input" />
      
      <div class="option-group">
        <div class="group-thumb"></div>
        
        <label class="toggle-label" for="solo">Solo</label>
        <input type="radio" id="solo" value="solo" v-model="activeOption" class="hidden-input" />
        
        <label class="toggle-label" for="team">Team</label>
        <input type="radio" id="team" value="team" v-model="activeOption" class="hidden-input" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.toggle {
  --bg-color: #1a1a1a;
  --accent-color: #1a16f5;
  --text-active: #ffffff;
  --text-inactive: #94a3b8;
  --transition-speed: 0.3s;

  width: 320px;
  height: 45px;
  background: var(--bg-color);
  border-radius: 100px;
  padding: 4px;
  display: inline-block;
  font-family: system-ui, sans-serif;
}

.toggle-track {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; 
  width: 100%;
  height: 100%;
  position: relative;
}

.toggle-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; 
  height: 100%;
  background: var(--accent-color);
  border-radius: 100px;
  transition: transform var(--transition-speed) ease;
  z-index: 1;
}

.toggle:has(#solo:checked) .toggle-thumb,
.toggle:has(#team:checked) .toggle-thumb {
  transform: translateX(100%);
}

.option-group {
  grid-column: 2 / span 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
}

.group-thumb {
  position: absolute;
  inset: 0;
  background: rgb(99, 101, 241); 
  border-radius: 100px;
  z-index: 1;
  opacity: 0;
  transition: clip-path var(--transition-speed), opacity var(--transition-speed);
}


.toggle:has(.option-group :checked) .group-thumb {
  opacity: 1;
}

.toggle:has(#solo:checked) .group-thumb {
  clip-path: inset(0 50% 0 0 round 100px);
}
.toggle:has(#team:checked) .group-thumb {
  clip-path: inset(0 0 0 50% round 100px);
}

.toggle-label {
  display: grid;
  place-items: center;
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 2;
  color: var(--text-inactive);
  transition: color var(--transition-speed);
}

.toggle:has(#free:checked) label[for="free"],
.toggle:has(#solo:checked) label[for="solo"],
.toggle:has(#team:checked) label[for="team"] {
  color: var(--text-active);
}

.hidden-input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
</style>