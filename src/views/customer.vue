<template>
    <div class="mt-[100px] font-dosis">
        <div
      class="relative bg-cover bg-center h-32 w-full flex items-center text-white"
      :style="{ backgroundImage: `url(${pagebg})` }"
    >
      <div class="absolute inset-0"></div>
      <h1 class="relative text-4xl md:left-[100px] text-black font-bold z-0  px-5 md:px-0">Reviews</h1>
    </div>
    <div class=" px-5 md:px-[100px] mt-8">
    <div v-for="(heading, index) in headings" :key="index" >
        <h3 class="py-1">{{ heading.details }}</h3>
    </div>
    </div>
    <div class="bg-slate-700 text-center w-full my-9 py-8"> <h1 class="text-[1rem] md:text-[2.5rem] font-serif text-white">{{ oneH }}</h1></div>
    <div class=" px-5 md:px-[100px]">
    <div class="flex space-x-1">
    <fa v-for="n in 4" :key="n" :icon="['fas', 'star']" class="text-orange-300" />
  </div>
  <div class="flex flex-col md:flex-row md:gap-16 ">
 <div class="md:w-1/2">
    <h2 >{{ best }}</h2>
    <h3 class="font-bold text-left md:text-right md:py-10">-Lauren</h3>
   
 </div>
 <div class="md:w-1/2 flex justify-center items-center"><img :src="red" alt="" class="w-[300px] h-auto object-contain rounded-md py-4 md:py-0"></div>
</div>
  <div >
   
  </div>
</div>
<div>
    <div class="bg-slate-700">
        <h2 class="text-center text-white text-[1rem] md:text-[2.5rem] py-5 my-5 font-serif">{{ TwoH }}</h2>
    </div>
    <div class=" px-5 md:px-[100px]">
        <div class="flex space-x-1">
    <fa v-for="n in 4" :key="n" :icon="['fas', 'star']" class="text-orange-300" />
  </div>
  <div class="flex flex-col md:flex-row gap-16 ">
    <div><p class="w-[90%]">{{ carton }}</p>
        <p class="font-bold text-left md:text-right md:py-10">Charly and Benny Co</p>
    </div>
    <div>
    <img :src="doc4" alt="" class="w-[100vw] h-64 object-conver">
  </div>
  <div>  <img :src="doc5" alt="" class="w-[100vw] h-64 object-conver ">
  </div>
  </div>
    </div>
</div>
<div>
    <div class="bg-slate-700">
        <h2 class="text-center text-white text-[1rem] md:text-[2.5rem] py-5 my-5 font-serif">{{ absolute }}</h2>
    </div>
    <div class=" px-5 md:px-[100px]">
        <div class="flex space-x-1">
    <fa v-for="n in 4" :key="n" :icon="['fas', 'star']" class="text-orange-300" />
  </div>
  <div class="">
    <div><p class="">{{ content }}</p>
        <p class="font-bold text-left md:text-right md:py-10">Collins</p>
    </div>
    <div>
    <img :src="doc3" alt="" class="w-[100vw] py-10 md:py-3 h-full object-conver">
  </div>
  </div>
    </div>
</div>
<div class="bg-slate-700 text-center w-full my-9 py-8"> <h1 class="text-[1rem] md:text-[2.5rem] font-serif text-white">{{ never }}</h1></div>
    <div class=" px-5 md:px-[100px]">
    <div class="flex space-x-1">
    <fa v-for="n in 4" :key="n" :icon="['fas', 'star']" class="text-orange-300" />
  </div>
  <div class="flex flex-col md:flex-row md:gap-16 ">
 <div class="md:w-1/2">
    <h2 >{{ frank }}</h2>
    <h3 class="font-bold text-left md:text-right md:py-10">-precious</h3>
   
 </div>
 <div class="md:w-1/2 flex justify-center items-center"><img :src="frankimg" alt="" class="w-[300px] h-auto object-contain rounded-md py-4 md:py-0"></div>
</div>
  <div >
   
  </div>
</div>
<div class="bg-slate-700 text-center w-full my-9 py-8"> <h1 class="text-[1rem] md:text-[2.5rem] font-serif text-white">{{ talent }}</h1></div>
    <div class=" px-5 md:px-[100px]">
    <div class="flex space-x-1">
    <fa v-for="n in 4" :key="n" :icon="['fas', 'star']" class="text-orange-300" />
  </div>
  <div class="flex flex-col md:flex-row md:gap-16 ">
 <div class="md:w-1/2">
    <h2 >{{ tale}}</h2>
    <h3 class="font-bold text-left md:text-right md:py-10">-Crane</h3>
   
 </div>
 <div class="md:w-1/2 flex justify-center items-center"><img :src="doc2" alt="" class="w-[300px] h-auto object-contain rounded-md py-4 md:py-0"></div>
</div>
  <div >
   
  </div>
</div>
</div>
<footer>
    <div class="text-center bg-black text-white py-10 mt-10">
      <p>Copyright © Camila's Art, All Right Reserved</p>
    </div>
  </footer>
</template>

<script setup>
    import pagebg from '@/assets/img/pageBg.jpg'
    import red from '@/assets/img/red1.jpg'
    import doc4 from '@/assets/img/Document4.jpg'
    import doc5 from '@/assets/img/Document5.jpg'
    import doc3 from '@/assets/img/Document3.jpg'
    import doc2 from '@/assets/img/Document2.jpg'
    import frankimg from '@/assets/img/Frank.jpg'
    
    const headings = [
         { details: 'One of the most fulfilling aspects of my work is witnessing the joy and emotional connection my clients feel when they receive their custom pet portraits or commissioned murals. I pour my heart into every piece—whether it’s a vibrant mural that transforms a space or a deeply personal painting of a beloved pet—and it means the world to know that effort resonates.'  },
          {
            details: 'From the first message to the final brushstroke, I strive to make the entire experience warm, collaborative, and truly memorable. Every kind word, every thoughtful review reminds me why I do what I do. It’s both humbling and inspiring to know my art brings comfort, beauty, and lasting memories to people’s lives.'
          },
          {
            details: 'To all of you who have trusted me with your stories and shared your spaces and companions—thank you. Your support motivates me to continue creating with care, passion, and attention to the smallest details that make each piece unique.'
          }
         ]
   const oneH = '“Camila is hands down THE BEST!” '
   const best = 'Camila is truly exceptional! From the moment I reached out, she was warm, responsive, and incredibly thoughtful. Despite the distance between us—we live in different countries—everything was handled with such efficiency and genuine care that it felt effortless.What stood out the most was Camila’s compassion and her deep dedication to both her work and her clients. When our beloved family dog passed away just before Father’s Day, I reached out with short notice, hoping for a miracle portrait to surprise my dad. Not only did Camila deliver, but she did so with remarkable speed, precision, and heart.She kept me informed every step of the way, and the final piece captured our pet’s spirit so beautifully—it moved us all to tears. The artwork was everything I had hoped for and more. Thank you, Camila, for turning a difficult time into something profoundly meaningful. Your talent and kindness are a gift to every family you touch.❤️ '

   const TwoH = '“Incredible work. Camila did a phenomenal job”'
   const carton = 'Camilas work is absolutely incredible! She brought our vision to life with a bold, creative mural on the exterior of our studio that perfectly captures the playful, cartoon-inspired spirit of our game brand. From the first conversation, she offered helpful suggestions, especially when it came to choosing character references and layout ideas.Her attention to detail and communication throughout the process were outstanding—she kept us updated every step of the way and made sure we were thrilled with the direction of the mural before finalizing anything.The final result? Beyond anything we imagined. The colors, the characters, the energy—it stops people in their tracks and has quickly become a favorite backdrop for fans and team photos alike.Thank you, Camila, for turning a plain wall into a powerful expression of our creative identity. Everyone here is blown away!'
   const absolute = '“Absolutely blown away by how incredible our mural is”';
   const content = 'Absolutely blown away by the stunning mural Camila created for us! Saying I’m amazed doesn’t even begin to cover it. The level of detail, the vibrant colors, and the way she brought the bicycle to life on our exterior wall is nothing short of breathtaking. Every stroke felt intentional and full of energy—it’s now the standout feature of our space, and we can’t stop admiring it.From the very first inquiry, Camila was an absolute pleasure to work with. She took the time to understand exactly what I envisioned, created multiple mock-ups to help refine the concept, and kept me updated throughout the entire process. Her communication was warm and professional, and her passion for her work shines through in every detail.What impressed me most—besides her remarkable talent—was how much care she puts into the experience as a whole. Everything was thoughtfully planned, from helping with design choices to sharing progress updates, and even offering tips on how to preserve and protect the mural long-term.I’ve been wanting to commission something like this for a while, and I’m so glad I chose Camila. She exceeded every expectation, and I will be recommending her to anyone looking for meaningful, high-quality mural work. Her art has truly transformed our space—and it was worth every penny.'

   const never = '“Never thought we’d get something quite so gorgeous”'
   const frank = 'Camila created an absolutely breathtaking portrait of professional baseball player Frank Robison, and we are beyond impressed. The level of detail and realism she achieved is remarkable—from the stitching on the jersey to the intensity and focus in his eyes, every element feels alive. Its more than a painting; its a tribute that captures the heart of the game and the spirit of the player.Working with Camila was an outstanding experience. She maintained clear and thoughtful communication from the start, provided progress updates along the way, and truly took the time to understand our vision. Her dedication to getting every detail just right made the entire process feel effortless and exciting.This piece is now a centerpiece in our collection and never fails to draw attention and admiration. Thank you, Camila, for bringing Frank’s legacy to life with such skill and passion. Your talent is exceptional, and this portrait will be treasured for years to come.'
   
   const talent =  '“Camila is such a talented artist!”'
   const tale = 'Camila is an incredibly talented mural artist! She was so easy to work with—professional, responsive, and thoughtful throughout. I shared several references, and she helped refine the vision with ease. Her mural completely exceeded expectations; the detail and energy she brought to the wall are just amazing. It captures the spirit of the space better than I ever imagined!'
</script>

<style lang="scss" scoped>

</style>