<template>
  <div class="circle-container">
    
    <section class="loader-box">
      <div class="icon-container">
        <font-awesome-icon 
          icon="fas fa-spinner" 
          spin 
          class="spinner-icon"
        />
        <span class="loading-text">Loading...</span>
      </div>
    </section>

    <section class="loader-box">
      <h3 class="label">Please wait..</h3>
      <div class="circle-loader"></div>
       <h3 class="label">I'm working</h3>
    </section>

  </div>
</template>

<style scoped>
.circle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
}

.loader-box {
  margin: 40px 40px;
  text-align: center;
}

.label {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  color: #959595;
  margin: 25px;
  font-size: 26px;
  text-transform: normal;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4CAF50; 
  font-size: 24px;
}

.spinner-icon {
  margin-right: 20px;
  font-size: 50px;
}

.loading-text {
  font-family: 'Tahoma', sans-serif;
  font-weight: normal;
  font-size: 50px;
}

.circle-loader {
  border: 6px solid #f3f3f3;
  border-top: 6px solid rgb(65, 221, 252);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  animation: spin-animation 2s linear infinite;
}

@keyframes spin-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>