<template>
  <div class="btn btn-rect" id="flip-button">
    <input type="checkbox" class="checkbox" />
    <div class="knob">
      <span></span>
    </div>
    <div class="btn-bg"></div>
  </div>
</template>

<style scoped>

#flip-button {
  position: relative;
  width: 80px;   
  height: 38px;
  overflow: visible; 
}


#flip-button .checkbox {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;
}


#flip-button .btn-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 150%;
  height: 100%;
  background-color: #aeaeae;
  transition: 0.3s ease all;
  border-radius: 20px;
  z-index: 1;
}


#flip-button .knob {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 70px; 
  z-index: 2;
}

#flip-button .knob:before,
#flip-button .knob:after {
  position: absolute;
  top: 4px;
  width: 20px;
  height: 10px;
  color: #aeaeae;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  padding: 9px 4px;
  border-radius: 20px;
  z-index: 1;
}

#flip-button .knob:before {
  content: "Left";
  left: 15px;
  color: white;
}

#flip-button .knob:after {
  content: "Right";
  right: -3px;
}


#flip-button .knob span {
  position: absolute;
  top: 5px;
  right: 2px;
  left: 60px;
  width: 55px;
  height: 28px;
  background-color: #ac03f4;
  border-radius: 20px;
  transform: rotateY(0);
  transform-origin: 0% 50%;
  transition: 0.6s ease all;
  z-index: 2;
}

/* 6. Interaktion ved klik */
#flip-button .checkbox:checked + .knob span {
  transform: rotateY(-180deg);
  background-color: #ff8103;
}

#flip-button .checkbox:checked ~ .btn-bg {
  background-color: #ffffff;
}
</style>