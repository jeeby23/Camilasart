<template>
    <div class="fixed w-full top-0 z-50">
    <div 
      class="  flex items-center justify-between md:justify-center w-full px-3 py-2 md:px-10 relative bg-white shadow-lg"
    >
      <!-- Logo alone on the far left -->
      <div class="flex-shrink-0 pl-4 md:pl-0">
        <router-link to="/" class="block md:translate-x-[-200px] ">
          <img :src="artLogo" alt="Logo" class="w-[100px] md:w-[100px]" />
        </router-link>
      </div>
  
      <!-- Left nav links, pushed right with margin on md+ -->
      <div class="hidden md:flex space-x-8 text-[1.5rem] ml-8 pl-10">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/portfolio">Portfolio</router-link>
      </div>
  
      <!-- Right Side -->
      <div class="flex items-center">
        <!-- Right links on md+ -->
        <div class="hidden md:flex space-x-4 text-[1.5rem] pl-10">
          <router-link to="/customer">Customers</router-link>
          <router-link to="/instructions">Instructions</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
  
        <!-- Hamburger / Cancel on small screens -->
        <button
          @click="toggleMenu"
          class="md:hidden focus:outline-none ml-4 z-50 relative"
          aria-label="Toggle Menu"
        >
          <svg
            v-if="!isOpen"
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
  
          <svg
            v-else
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
  
      <!-- Full screen dropdown menu on small screens -->
      <transition name="fade">
        <div
          v-if="isOpen"
          class="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 text-[1.5rem] p-10 md:hidden"
        >
          <router-link to="/" @click="closeMenu" class="hover:text-blue-600">Home</router-link>
          <router-link to="/about" @click="closeMenu" class="hover:text-blue-600">About</router-link>
          <router-link to="/portfolio" @click="closeMenu" class="hover:text-blue-600">Portfolio</router-link>
          <router-link to="/customer" @click="closeMenu" class="hover:text-blue-600">Customer</router-link>
          <router-link to="/instructions" @click="closeMenu" class="hover:text-blue-600">Instructions</router-link>
          <router-link to="/contact" @click="closeMenu" class="hover:text-blue-600">Contact</router-link>
        </div>
      </transition>
    </div>
</div>
  </template>

<script setup>
  import artLogo from '../assets/img/art.png'
  import { ref } from 'vue'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}
</script>

<style  scoped>

</style>