<template>
  <button class="save-button" type="button">
    <font-awesome-icon 
      class="save-icon" 
      icon="fa-regular fa-floppy-disk" 
    />
    <span class="save-text">Save</span>
  </button>
</template>

<style scoped>
.save-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem; 
  width: 9rem;
  height: 3rem;
  padding: 0 1rem;
  background-color: #297d29;
  color: white;
  border: 2px solid rgb(33, 112, 17);
  border-radius: 20px;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.3);
  font-size: 20px;
  font-family: inherit;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.save-button:hover {
  background-color: #2aa32a;
}

.save-button:active {
  transform: scale(0.98);
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
}

.save-icon {
  font-size: 1.5rem;
}

.save-text {
  font-weight: 500;
}
</style>