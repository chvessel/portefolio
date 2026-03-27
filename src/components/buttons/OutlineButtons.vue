<script setup>
const handleButtonClick = (btnName) => console.log(`${btnName} clicked!`);

const buttons = [
  { id: 'primary', label: 'Hoover', isOutline: true },
  { id: 'red-tilt-left', label: 'Twist left', type: 'red-btn' },
  { id: 'red-tilt-right', label: 'Twist right', type: 'red-btn' },
  { id: 'red-fade', label: 'Fade', type: 'red-btn' },
  { id: 'yellow-up', label: 'Up', type: 'yellow-btn' },
  { id: 'yellow-down', label: 'Down', type: 'yellow-btn' },
  { id: 'yellow-side', label: 'Sideways', type: 'yellow-btn' },
  { id: 'slide-up', label: 'Slide up', type: 'slide-btn' },
  { id: 'slide-down', label: 'Slide down', type: 'slide-btn' },
  { id: 'slide-left', label: 'Slide sideways', type: 'slide-btn' },
];
</script>

<template>
  <div class="container">
    <div class="button-grid">
      <button 
        v-for="btn in buttons" 
        :key="btn.id"
        :class="[btn.isOutline ? 'green-btn' : 'custom-btn', `btn-${btn.id}`, btn.type]"
        @click="handleButtonClick(btn.label)"
      >
        <span class="btn-content">
          {{ btn.label }}
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.container { 
  min-height: 100vh; 
  justify-content: center; 
  padding: 4px 20px;  
}

.button-grid { 
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px); 
  max-width: 700px; 
  width: 100%;
  gap: 25px; 
  justify-content: center;
}

.custom-btn, 
.green-btn {
  margin: 0; 
  width: 160px; 
  height: 50px; 
  border-radius: 50px; 
  font-size: 16px; 
  font-weight: 700; 
  cursor: pointer; 
  transition: all 0.5s ease;
  position: relative; 
  display: flex; 
  align-items: center; 
  justify-content: center;
  border: none; 
  outline: none;
  overflow: hidden; 
}

.btn-content { 
  z-index: 2; 
  position: relative; 
}

.green-btn { 
  border: 2px solid #24cd54; 
  color: #24cd54; 
  background: transparent; 
}

.green-btn:hover { 
  background: #24cd54; 
  color: white; 
}

.red-btn{ 
  border: 2px solid #D24D57; 
  color: #D24D57; 
  background: transparent; 
}

.red-btn:after { 
  content: ""; 
  position: absolute; 
  height: 0; 
  left: 50%; 
  top: 50%; 
  width: 150%; 
  z-index: 1; 
  background: #D24D57; 
  transition: 0.5s; 
}

.red-btn:hover { 
  color: #fff; 
}

.red-btn:hover:after { 
  height: 450%; 
}

.btn-red-tilt-left:after { 
  transform: translate(-50%, -50%) rotate(-25deg); 
}

.btn-red-tilt-right:after { 
  transform: translate(-50%, -50%) rotate(25deg); 
}

.btn-red-fade:after { 
  transform: translate(-50%, -50%); 
  opacity: 0.5; 
}

.btn-red-fade:hover:after { 
  height: 150%; 
  opacity: 1; 
}

.yellow-btn { 
  border: 2px solid #F7CA18; 
  color: #F7CA18; 
  background: transparent; 
}

.yellow-btn:before { 
  content: ''; 
  position: absolute; 
  background: #F7CA18; 
  z-index: 1; 
  transition: 0.4s cubic-bezier(0.215, 0.61, 0.355, 1); 
}

.yellow-btn:hover { 
  color: #000; 
}

.yellow-btn:hover:before { 
  height: 100%; 
  width: 100%; 
}

.btn-yellow-up:before { 
  left: 0; 
  bottom: 0; 
  width: 100%; 
  height: 0; 
}

.btn-yellow-down:before { 
  left: 0; 
  top: 0; 
  width: 100%; 
  height: 0; 
}

.btn-yellow-side:before { 
  top: 0; 
  right: 0; 
  width: 0; 
  height: 100%; 
}

.slide-btn:after { 
  content: ""; 
  position: absolute; 
  z-index: 1; 
  transition: 0.4s; 
}

.slide-btn:hover { 
  color: #fff; 
}

.btn-slide-up { 
  background: #40c699; 
  color: white; 
  position: relative; 
  z-index: 1;
  overflow: hidden;
}

.btn-slide-up:after { 
  content: "";
  position: absolute;
  width: 100%; 
  height: 0; 
  bottom: 0; 
  left: 0; 
  background: #4de9e1; 
  z-index: -1;
  transition: all 0.4s ease; 
}

.btn-slide-up:hover:after { 
  height: 100%; 
}

.btn-slide-down { 
  background: #ff7b00; 
  color: white; 
}

.btn-slide-down:after { 
  width: 100%; 
  height: 0; 
  top: 0; 
  left: 0; 
  background: #ff4800; 
}

.btn-slide-down:hover:after { 
  height: 100%; 
  bottom: 0; 
}

.btn-slide-left { 
  background: #9e02c9; 
  color: white; 
}

.btn-slide-left:after { 
  width: 0; 
  height: 100%; 
  top: 0; 
  right: 0; 
  background: #770197; 
}

.btn-slide-left:hover:after { 
  width: 100%; 
  left: 0; 
}
</style>