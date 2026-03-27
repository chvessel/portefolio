<script setup>
import { ref } from 'vue'


const activeTab = ref('profile')

const tabs = [
  { id: 'profile', icon: 'fa-solid fa-user', label: 'Personal Info' },
  { id: 'payment', icon: 'fa-solid fa-credit-card', label: 'Payment Info' },
  { id: 'subscription', icon: 'fa-solid fa-tv', label: 'Subscription' },
  { id: 'privacy', icon: 'fa-solid fa-list-check', label: 'Privacy' },
  { id: 'settings', icon: 'fa-solid fa-gear', label: 'Settings' }
]
</script>

<template>
  <div class="page-wrapper">
    <div class="settings-container">

      <div class="logo-text">spawn</div>

      <aside class="sidebar">
        <nav class="sidebar-nav">
          <button v-for="tab in tabs" :key="tab.id" :class="['nav-item', { active: activeTab === tab.id }]"
            @click="activeTab = tab.id" :title="tab.label">
            <font-awesome-icon :icon="tab.icon" />
          </button>
        </nav>
      </aside>

      <main class="content-box">
        <transition name="fade" mode="out-in">
          <div :key="activeTab" class="tab-panel">

            <div v-if="activeTab === 'profile'">
              <h1>Personal Info</h1>
              <div class="field-group">
                <h2>Full Name</h2>
                <div class="field-row">
                  <span>John Doe</span>
                  <button class="update-btn">UPDATE</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Birthday</h2>
                <div class="field-row"><span>September 16</span></div>
              </div>
              <div class="field-group">
                <h2>Gender</h2>
                <div class="field-row"><span>Female</span></div>
              </div>
              <div class="field-group">
                <h2>Email</h2>
                <div class="field-row">
                  <span>john.doe@example.com</span>
                  <button class="update-btn">UPDATE</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Password</h2>
                <div class="field-row">
                  <span>•••••••</span>
                  <button class="update-btn">CHANGE</button>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'payment'">
              <h1>Payment Info</h1>
              <div class="field-group">
                <h2>Payment Method</h2>
                <div class="field-row">
                  <span>Mastercard •••• •••• •••• 8322</span>
                  <button class="update-btn">UPDATE</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Billing Address</h2>
                <div class="field-row">
                  <span>1234 Pointplace Aveny | Seattle, WA</span>
                  <button class="update-btn">CHANGE</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Zipcode</h2>
                <div class="field-row"><span>999000</span></div>
              </div>
              <div class="field-group">
                <h2>Billing History</h2>
                <div class="field-row">
                  <span>2018</span>
                  <button class="update-btn">VIEW</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Redeem Gift Subscription</h2>
                <div class="field-row">
                  <input type="text" placeholder="Enter Gift Code" class="gift-input">
                  <button class="update-btn">REDEEM</button>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'subscription'">
              <h1>Your Subscription</h1>
              <div class="field-group">
                <h2>Payment Date</h2>
                <div class="field-row">
                  <span>05-15-2028</span>
                  <button class="update-btn">PAY NOW</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Your Next Charge</h2>
                <div class="field-row">
                  <span>$5.23 <small style="color:#999">(includes tax)</small></span>
                </div>
              </div>
              <div class="field-group">
                <h2>Spawn Basic</h2>
                <div class="field-row">
                  <span>Limited Commercials</span>
                  <button class="update-btn">CHANGE PLAN</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Add-ons</h2>
                <div class="field-row">
                  <span>None</span>
                  <button class="update-btn">MANAGE</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Monthly Recurring Total</h2>
                <div class="field-row"><span>$7.99/month</span></div>
              </div>
            </div>

            <div v-else-if="activeTab === 'privacy'">
              <h1>Privacy Settings</h1>
              <div class="field-group">
                <h2>Manage Email Notifications</h2>
                <div class="field-row">
                  <span>Email Preferences</span>
                  <button class="update-btn">MANAGE</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Manage Privacy Settings</h2>
                <div class="field-row">
                  <span>Visibility & Data</span>
                  <button class="update-btn">MANAGE</button>
                </div>
              </div>
              <div class="field-group">
                <h2>View Terms of Use</h2>
                <div class="field-row">
                  <span>Legal Documents</span>
                  <button class="update-btn">VIEW</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Protect Your Account</h2>
                <div class="field-row">
                  <span>Security Status</span>
                  <button class="update-btn">PROTECT</button>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'settings'">
              <h1>Account Settings</h1>
              <div class="field-group">
                <h2>Sync Watchlist to My Stuff</h2>
                <div class="field-row">
                  <span>Status: Ready</span>
                  <button class="update-btn">SYNC</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Hold Your Subscription</h2>
                <div class="field-row">
                  <span>Pause billing</span>
                  <button class="update-btn">HOLD</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Cancel Your Subscription</h2>
                <div class="field-row">
                  <span>Delete account</span>
                  <button class="update-btn-cancel">CANCEL</button>
                </div>
              </div>
              <div class="field-group">
                <h2>Your Devices</h2>
                <div class="field-row">
                  <span>3 Active Devices</span>
                  <button class="update-btn">MANAGE</button>
                </div>
              </div>
            </div>

          </div>
        </transition>
      </main>

      <div class="side-accent"></div>
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  --primary-violet: #8b5cf6;
  --bg-violet: #a78bfa;
  --text-gray: #9ca3af;

  display: inline-block;
  padding: 40px;
}

.settings-container {
  position: relative;
  width: 580px;
  background: white;
  min-height: 480px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.logo-text {
  position: absolute;
  top: 20px;
  right: 25px;
  font-family: 'Arial Black', sans-serif;
  font-size: 1.8rem;
  color: var(--primary-violet);
  font-weight: 900;
  z-index: 5;
}


.sidebar {
  position: absolute;
  border-radius: 20px;
  left: 20px;
  top: -20px;
  width: 85px;
  height: calc(100% + 40px);
  background-color: var(--primary-violet);
  z-index: 10;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding-top: 30px;
}

.nav-item {
  background: none;
  border: none;
  padding: 30px 0;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.3s;
}

.nav-item.active,
.nav-item:hover {
  opacity: 1;
  transform: scale(1.1);
}

.gift-input {
  border: none;
  border-bottom: 1.5px solid #f3f4f6;
  outline: none;
  font-size: 0.9rem;
  padding: 2px 0;
  width: 60%;
  color: #4b5563;
}

.gift-input:focus {
  border-bottom-color: var(--primary-violet);
}

.field-row span {
  font-weight: 500;
}

.content-box {
  padding: 120px 80px 40px 140px;
}

.tab-panel h1 {
  font-family: sans-serif;
  color: var(--primary-violet);
  opacity: 0.6;
  font-size: 1.4rem;
  margin-bottom: 30px;
  font-weight: 400;
}

.field-group {
  margin-bottom: 18px;
}

.field-group h2 {
  font-size: 0.7rem;
  color: var(--text-gray);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.field-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 8px;
  color: #4b5563;
  font-family: sans-serif;
}

.update-btn {
  background: #f3f4f6;
  border: none;
  color: var(--primary-violet);
  font-size: 0.6rem;
  font-weight: 800;
  padding: 4px 8px;
  cursor: pointer;
}

.update-btn-cancel{
  background: #f3f4f6;
  border: none;
  color: red;
  font-size: 0.6rem;
  font-weight: 800;
  padding: 4px 8px;
  cursor: pointer;
}

.update-btn-cancel:hover{
  background: red;
  border: none;
  color: #f3f4f6;
  font-size: 0.6rem;
  font-weight: 800;
  padding: 4px 8px;
  cursor: pointer;
}

.update-btn:hover {
  background: var(--primary-violet);
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>