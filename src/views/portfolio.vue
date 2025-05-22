<template>
    <div class="mt-[100px] font-dosis">
        <div
      class="relative bg-cover bg-center h-32 w-full flex items-center text-white"
      :style="{ backgroundImage: `url(${pagebg})` }"
    >
      <div class="absolute inset-0"></div> 
      <h1 class="relative text-4xl md:left-[100px] text-black font-bold z-0 px-5 md:px-0">Portfolio</h1>
    </div>
    <div class="md:px-[100px] py-10">
  <div class="flex flex-wrap justify-between gap-4">
    <!-- First Row -->
    <img :src="port" alt="" class="md:w-[32%] md:h-auto object-cover px-5 md:px-0" />
    <img :src="port2" alt="" class="md:w-[32%] md:h-auto object-cover px-5 md:px-0 " />
    <img :src="port3" alt="" class="md:w-[32%] md:h-auto object-cover px-5 md:px-0" />

    <!-- Second Row -->
    <img :src="port4" alt="" class="md:w-[32%] md:h-auto object-cover px-5 md:px-0" />
    <img :src="port5" alt="" class="md:w-[32%] md:h-auto object-cover object-right px-5 md:px-0" />
    <img :src="port6" alt="" class="md:w-[32%] md:h-auto object-cover px-5 md:px-0" />

    <img :src="port7" alt="" class="md:w-[32%] md:h-auto object-cover px-5 md:px-0" />
    <img :src="port8" alt="" class="md:w-[32%] md:h-auto object-cover  px-5 md:px-0" />
    <img :src="port9" alt="" class="md:w-[32%] md:h-auto object-cover px-5 md:px-0" />
  </div>
</div>
    </div>
    <footer>
    <div class="text-center bg-black text-white py-10">
      <p>Copyright © Camila's Art, All Right Reserved</p>
    </div>
  </footer>
</template>

<script setup>
    import pagebg from '@/assets/img/pageBg.jpg';
    import port from '@/assets/img/port.jpg'
    import port2 from '@/assets/img/port2.jpg'
    import port3 from '@/assets/img/port3.jpg'
    import port4 from '@/assets/img/port4.jpg'
    import port5 from '@/assets/img/port5.jpg'
    import port6 from '@/assets/img/port6.jpg'
    import port7 from '@/assets/img/port7.jpg'
    import port8 from '@/assets/img/port8.jpg'
    import port9 from '@/assets/img/port9.jpg'
</script>

<style lang="scss" scoped>

</style>