<template>
    <div class="btn btn-rect" id="shift-button">
        <input type="checkbox" class="checkbox" />
        <div class="knob">
            <span></span>
        </div>
        <div class="btn-bg"></div>
    </div>
</template>

<style scoped>

#shift-button {
    position: relative;
    width: 70px;   
    height: 30px;  
    overflow: hidden;
    border-radius: 10px;
}


#shift-button .checkbox {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    z-index: 3;
}


#shift-button .btn-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #171818;
    transition: 0.3s ease all;
    z-index: 1;
}


#shift-button .knob:before,
#shift-button .knob:after,
#shift-button .knob span:before,
#shift-button .knob span:after {
    position: absolute;
    top: 4px;
    width: 50px;
    height: 20px;
    font-size: 10px;
    font-weight: bold;
    text-align: center;
    line-height: 1;
    padding: 9px 4px;
    border-radius: 7px;
    transition: 0.3s ease all;
}

#shift-button .knob:before,
#shift-button .knob:after {
    color: #4e4e4e;
    z-index: 1;
}

#shift-button .knob span {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
}

#shift-button .knob span:before {
    left: 6px;
    top: -28px; 
    background-color: #00c033;
}

#shift-button .knob span:after {
    top: 6px;
    left: 39px;
    background-color:  #b81c11;
}

#shift-button .knob span:before,
#shift-button .knob span:after {
    content: "";
    width: 27px;
    z-index: 2;
}


#shift-button .checkbox:checked+.knob span:before {
    top: 5px;
}

#shift-button .checkbox:checked+.knob span:after {
    top: -28px;
}

#shift-button .checkbox:checked~.btn-bg {
    background-color: #ffffff;
}
</style>