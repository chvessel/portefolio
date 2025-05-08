<template>
    <div class="layout">
      <!-- Sidebar -->
      <nav class="sidebar">
        <ul>
          <li><router-link to="/" class="menu-link">Home</router-link></li>
          <li><router-link to="/components/buttons" class="menu-link">Buttons</router-link></li>
          <li><router-link to="/components/cards" class="menu-link">Cards</router-link></li>
          <li><router-link to="/components/forms" class="menu-link">Forms</router-link></li>
          <li><router-link to="/components/designs" class="menu-link">Website designs</router-link></li>
          <li><router-link to="/components/projects" class="menu-link">Projects</router-link></li>
        </ul>
      </nav>
  
      <!-- Indholdsområde -->
      <main class="content">
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <style scoped>
  .layout {
    display: flex;
    height: 100vh;
  }
  
  .sidebar {
    position: relative;
    width: 250px;
    color: white;
    padding: 20px;
    margin-top: 50px;
    border: 2px solid rgba(166, 222, 0, 0.797); 
    border-radius: 50px;
    margin-left: 50px;
    margin-bottom: 50px;
    background: linear-gradient(to bottom, rgba(54, 53, 53, 0.6), rgb(22, 22, 22));
    box-shadow: 15px 0 10px rgba(0, 0, 0, 0.4);
    
  }


  
  .sidebar ul {
    list-style: none;
    padding: 0;
    margin-top: 50px;
  }
  
  .sidebar li {
    margin: 10px 0;
  }
  
  .sidebar .menu-link {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 22px;
  }
  
  .sidebar a:hover {
    text-decoration: underline;
  }
  
  .content {
    flex-grow: 1;
    padding: 50px;
  }
  </style>
  