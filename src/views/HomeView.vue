<template>
  <div class="home px-3 md:px-[100px] mt-[110px] font-dosis">
    
    <div
    class="bg-cover bg-center h-screen w-full shadow-2xl  "
    :style="{ backgroundImage: `url(${artSports})` }"
  ></div>
  <div  class="text-4xl text-gray-700 mt-4">
    <fa :icon="['fas', 'quote-left']" />
    <div v-for="(quote, index) in inspirations" :key="index" class="mt-6 text-lg text-gray-800">
      <p>{{ quote }}</p> <br><br>
      <span>— Camila Joe</span>
    </div>
    <div class="flex justify-center items-center w-full space-x-4 ">
  <!-- Left line -->
  <div class="flex-grow border-t border-gray-300 max-w-[300px]"></div>

  <!-- Icon in the center -->
  <span class="flex justify-center items-center text-gray-700">
    <fa :icon="['fas', 'paintbrush']" />
  </span>

  <!-- Right line -->
  <div class="flex-grow border-t border-gray-300 max-w-[300px]"></div>
</div>
  </div>
  <div v-for="(spirit,index) in spirits" :key="index" class="my-3">
    <h1 class="font-bold text-2xl py-4">{{ spirit.header }}</h1>
    <p>{{ spirit.para }}</p>
  </div>
  <div v-for="(sport,index) in sports" :key="index" class="my-5">
    <h1 class="font-bold text-2xl py-4">{{sport.head}}</h1>
    <p>{{sport.text}}</p>
  </div>
  </div>
  <footer>
    <div class="text-center bg-black text-white py-10">
      <p>Copyright © Camila's Art, All Right Reserved</p>
    </div>
  </footer>
</template>

<script setup>
 import artSports from '@/assets/img/artsports.jpg';
 
 const inspirations = [' I use vivid color and expressive brushwork to bring movement and life to my sports artwork, giving each piece a sense of depth and dimension. When it comes to painting horses and pets, I focus on revealing their individual spirit and character, capturing the essence that makes each one unique.']

 const spirits = [
  {
    header: 'The Spirit of the Game',
    para: 'Sports artist Camila Joe brings athletic motion to life in a way few fine artists can. A self-taught talent, she specializes in capturing the power, intensity, and emotion of professional sports through her dynamic oil paintings and detailed graphite work. Her ability to portray the raw energy and triumph of competition is what sets her apart in the world of sports art.'

  }
 ]

 const sports = [
  {
    head: 'Muralist/Sports Artist Camila Joe',
    text: 'Camila collaborates closely with each client to create one-of-a-kind artwork tailored to their vision. Her dedication to precision and quality has made her a trusted favorite among professional athletes, devoted fans, and sports-related companies seeking standout artistic expression.'
  }
 ]


</script>
