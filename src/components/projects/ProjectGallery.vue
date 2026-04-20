<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  photos: {
    type: Array,
    required: true
  },
 
  folder: {
    type: String,
    default: ""
  }
});

const selectedId = ref(null);
const activePhoto = computed(() => props.photos.find(p => p.id === selectedId.value));

const togglePhoto = (id) => {
  selectedId.value = selectedId.value === id ? null : id;
};

const getImageUrl = (name) => {
  
  if (props.folder) {
    return `/images/${props.folder}/${name}`;
  }
  return `/images/projects/${name}`;
};
</script>

<template>
  <div class="project-gallery">
    <div class="gallery-grid">
      <div
        v-for="photo in props.photos"
        :key="photo.id"
        class="gallery-item"
        @click="togglePhoto(photo.id)"
      >
        <img :src="getImageUrl(photo.filename)" alt="Project screenshot" loading="lazy" />
      </div>
    </div>

    <Transition name="fade">
      <div v-if="activePhoto" class="modal-overlay" @click="selectedId = null">
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="selectedId = null">&times;</button>
          <img :src="getImageUrl(activePhoto.filename)" class="modal-image" />
          <div class="modal-info">
            {{ activePhoto.date }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.gallery-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: flex-end; 
}

.gallery-item {
  position: relative;
  width: 60px; 
  height: 60px;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.2s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

}

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.5);

  .modal-image {
    max-width: 100%;
    max-height: 100vh;
    border-radius: 8px;
    display: block;
  }
  
  .modal-close {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.5);
    border: none;
    color: white;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 25px;
    z-index: 10;
  }
}

.fade-enter-active, .fade-leave-active { 
    transition: opacity 0.3s; 
}

.fade-enter-from, .fade-leave-to { 
    opacity: 0; 
}
</style>