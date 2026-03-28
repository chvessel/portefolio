<script setup>
import { ref, computed } from 'vue';

const newTaskText = ref('');
const tasks = ref([
    { id: 1, text: 'Shopping', completed: true },
    { id: 2, text: 'Doctors appointment 9AM', completed: false },
    { id: 3, text: 'Wash clothes', completed: false }
]);

const undoneTasks = computed(() => tasks.value.filter(t => !t.completed));
const completedTasks = computed(() => tasks.value.filter(t => t.completed));


const addTask = () => {
    if (newTaskText.value.trim() === '') return;

    tasks.value.push({
        id: Date.now(),
        text: newTaskText.value,
        completed: false
    });

    newTaskText.value = '';
};

const deleteTask = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id);
};
</script>

<template>
    <div class="todo-container">
        <h1>To-do list</h1>

        <div class="input-group">
            <input v-model="newTaskText" @keyup.enter="addTask" placeholder="Add a chore" type="text" />
            <button @click="addTask">Add</button>
        </div>

        <div class="task-list">
            <h2 class="status-title">Undone ({{ undoneTasks.length }})</h2>
            <div v-for="task in undoneTasks" :key="task.id" class="task-item">
                <div class="task-content">
                    <input type="checkbox" :id="'task-' + task.id" v-model="task.completed" />
                    <label :for="'task-' + task.id">{{ task.text }}</label>
                </div>
                <button class="delete-btn" @click="deleteTask(task.id)">×</button>
            </div>

            <h2 class="status-title done-title">Done ({{ completedTasks.length }})</h2>
            <div v-for="task in completedTasks" :key="task.id" class="task-item task-done">
                <div class="task-content">
                    <input type="checkbox" :id="'task-' + task.id" v-model="task.completed" />
                    <label :for="'task-' + task.id">{{ task.text }}</label>
                </div>
                <button class="delete-btn" @click="deleteTask(task.id)">×</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
body {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.todo-container {
    max-width: 450px;
    margin: 60px auto;
    background-color: #d0ae5d;
    border-top: 15px solid #583b04;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    padding: 20px;
    border-radius: 5px;
}

h1 {
    text-align: center;
    color: #e9b21b;
    font-size: 2.2rem;
    margin: -20px -20px;
    background-color: rgb(134, 71, 29);
}

.input-group {
    display: flex;
    gap: 10px;
    margin: 50px 0px;
}

.input-group input {
    flex-grow: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.input-group button {
    padding: 10px 15px;
    background-color: #6f4b08;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.input-group button:hover {
    padding: 10px 15px;
    background-color: #956916;
    color: white;
    transform: scale(1.1);
    font-weight: 600;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.status-title {
    font-size: 1rem;
    margin: 20px 0 10px;
    padding-left: 10px;
    border-left: 5px solid #db41cc;
    color: black;
    font-weight: 600;
}

.done-title {
    border-left-color: #4caf50;
    color: rgb(130, 130, 130);
}

.task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.465);
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.3s ease;
}

.task-content {
    display: flex;
    align-items: center;
    gap: 10px;
}

input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    accent-color: #56d24e;
}

label {
    cursor: pointer;
    font-size: 1rem;
    color: rgb(30, 30, 30);
}

.task-done label {
    text-decoration: line-through;
    opacity: 0.6;
    color: rgb(110, 110, 110);
}

.delete-btn {
    background: none;
    border: none;
    color: #ff4444;
    font-size: 1.5rem;
    cursor: pointer;
    line-height: 1;
}

.delete-btn:hover {
    color: #cc0000;
    transform: scale(1.2);
}

.task-item {
    animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>