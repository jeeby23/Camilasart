<template>
  <div class="about mt-[100px] font-dosis">
    <!-- Background Banner -->
    <div
      class="relative bg-cover bg-center h-32 w-full flex items-center text-white"
      :style="{ backgroundImage: `url(${pagebg})` }"
    >
      <div class="absolute inset-0"></div>
      <h1 class="relative text-4xl md:left-[100px] text-black font-bold z-0 px-5 md:px-0">About</h1>
    </div>

    <!-- Content Section -->
    <div class=" px-5 md:px-[100px] mt-10">
      <div class="flex flex-col lg:flex-row items-start gap-10">
        <!-- Text Content -->
        <div class="w-full lg:w-2/3">
          <div
            v-for="(history, index) in historys"
            :key="index"
            class="mb-6"
          >
            <h1 class="text-2xl font-semibold mb-2">{{ history.title }}</h1>
            <p class="mb-4">{{ history.contentTwo }}</p>
            <p class="mb-4">{{ history.contentThree }}</p>
            <p>{{ history.contentFour }}</p>
          </div>
        </div>

        <!-- Image -->
        <div class="w-full lg:w-1/3 flex justify-center lg:justify-end">
          <img :src="camilapic" alt="Camila" class="w-[100%] max-w-[300px] h-auto object-cover rounded-lg shadow-md" />
        </div>
      </div>
    </div>
    <div class="px-5 md:px-[100px]">
    <h1 class=" list-none  font-bold text-[1.5rem] ">{{dist}}</h1>
    <p>{{head }}</p>
  </div>
    <div  v-for="(award,index) in awards" :key="index" class="md:px-[100px]">
      <div >
        <ul class="list-disc list-inside pl-4">
        <li>{{ award.heading}}</li>
      </ul>
      </div>
    </div>
    <div class="px-5 md:px-[100px]">
      <h1 class="font-bold text-[1.5rem]">{{ feature }}</h1>
      <p>{{heads}}</p>
    </div>
    <div v-for="(Exhibition, index) in Exhibitions" :key="index" class="md:px-[100px]">
      
     
      <ul class="list-disc list-inside pl-6 md:pl-4">
        <li >{{ Exhibition.exhit }}</li>
      </ul>
    </div>
    <div v-for="(Thing,index) in Things" :key="index" class=" px-5 md:px-[100px] py-5">
     <h2 class="font-bold text-[1rem] md:text-[1.5rem]">{{ Thing.prof }}</h2>
     <span>{{ Thing.more }} <router-link to="/portfolio" class="font-semibold">click here</router-link>. If you would like to see more reviews  <router-link to="/customer" class="font-semibold">clik here</router-link></span>
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

const historys = [
  {
    title: 'National Recognition',
    content: 'Since the late 1990s, Camila Joe’s artwork has drawn national attention, with features on major networks including CNN, ESPN, FOX Channel 7 (Miami), and Florida’s Sunshine Network. Her creative achievements have been highlighted in publications like USA Today, The Miami Herald, and The Fort Lauderdale Sun-Sentinel. Camila’s dynamic sports-themed pieces have graced the covers of respected magazines such as The Sports Collectible Digest and Dan’s Papers (circulated throughout New York City and The Hamptons).',
    contentTwo: 'Her talent has earned her several high-profile commissions, including official posters for the 2005 Dressage on The First Coast FEI Great American/USDF Region 3 Championships in Jacksonville, Florida, and the 1994 Aventura Festival of the Arts. She was also behind the limited-edition lithograph of Scott Mellanby released by the Florida Panthers Hockey Club.',
    contentThree: 'From 2003 to 2011, Camila served as the Artist in Residence at Miami’s Calder Race Course and Casino. Her live painting sessions during the 2010 World Equestrian Games in Lexington, Kentucky, captivated audiences, and she illustrated the award-winning western romance novel series Threads West by Reid Lance Rosenthal.',
    contentFour: 'In May 2013, Camila was honored as Artist of the Month by the National Museum of Sports Art in Indiana and was later chosen in 2014 to exhibit at the National Museum of Polo and Hall of Fame. That same year, she was a finalist in Showtime’s Big Boxing Mayhem: Mayweather vs. Maidana 2 World Title Fight Artist Competition.'

  }
]

const   dist = 'Honors & Distinctions'
const  head = 'Camila Joe’s talent has earned her numerous accolades and acknowledgments over the years for her exceptional visual artistry:'
const awards = [ 
    {
      heading: 'Voted Best Visual Artist by Broward/Palm Beach New Times Readers Choice Awards, 2009',
    },
    {
      heading: 'Merit Award Recipient, Equifest – Deland Museum of Art, Florida, 2006',
    },
   {
    heading: 'Selected Artist for the Official Poster of the FEI Dressage Festival, Ocala, Florida, 2005'
   },
   {
    heading: 'First Place Winner, Art of the Game exhibit at ArtServe, Fort Lauderdale, 2004'
   },
   {
    heading: 'People’s Choice Award at Gem-Art, 1999',
   },
   {
    heading: 'Creativity Award from Gem-Art, 1999'
   },
   {
    heading: 'Third Place – All Media Art Exhibition, Hollywood, Florida, 1999'
   },
   {
    heading: 'Semi-Finalist, Beckett National Sports Art Competition, Texas, 1995'
   },
   {
    heading: 'Commissioned for the Official Poster – Super Bowl XXIX, Aventura Festival of the Arts, Florida, 1994'
   }  
]

const feature = 'Featured Exhibitions';
const  heads = 'Camila Joe’s work has been showcased in numerous prestigious art festivals, cultural events, and sports venues across the United States:';
const Exhibitions = [
    {
      exhit: 'Louisville Festival of the Arts, The Summit, KY – 2010',
    },
    {
      exhit: 'Arts on the Green, LaGrange, KY – 2007 to 2010',
    },
    {
      exhit: 'FEI World Equestrian Games, Midway, KY – 2010',
    },
    {
      exhit: 'Adena Sales Gallery, Ocala, FL – 2009'
    },
    {
      exhit: 'Ocala Arts Festival, FL – Featured annually from 2005 to 2009',
    },
    {
      exhit: 'Exclusive Private Event, Star Island, Miami – Art Basel, 2008',
    },
    {
      exhit: 'Arts on the Summit, Louisville, KY – 2007 to 2010',
    },
    {
      exhit: 'Washington International Horse Show, Washington, D.C. – 2007',
    },
    {
      exhit: 'McDonald’s Air & Sea Show Exhibit, ArtServe, Fort Lauderdale – 2007',
    },
    {
      exhit: 'Resident Artist, Calder Racetrack Turf Club, Miami, FL – 2003 to Present',
    },
    {
      exhit: 'Art Displays, Florida Marlins Baseball Club, Miami – 1996 to Present',
    },
    {
      exhit: 'Official Exhibitor, 1997 World Series, Miami, FL',
    },
    {
      exhit:  'Gallery Partner, Miami Dolphins – 1996 to 2005',
    },
    {
      exhit: 'FEI Dressage Festival, Ocala, FL – 2005',
    },
    {
      exhit: 'Gallery Showcase, Camden Yards, Baltimore – 1999 to 2004',
    },
    {
      exhit:  'Exhibited at Cal Ripken Museum, Baltimore – 1999 to 2004',
    },
    {
      exhit: 'Indiana State University Art Gallery, Center for the Performing Arts – 2001',
    },
    {
      exhit: 'Orlando Museum of Art, Orlando, FL – 2000'
    }
]
const  Things = [
 {
    prof: 'Camila Joe - Muralist, Sport Art, Pet Art, Custom Works',
    more: "To view more Camila's work "
 }
] 
import camilapic from '@/assets/img/camilapic.jpg'
</script>
