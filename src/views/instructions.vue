<template>
    <div class="mt-[100px] font-dosis">
        <div
      class="relative bg-cover bg-center h-32 w-full flex items-center text-white"
      :style="{ backgroundImage: `url(${pagebg})` }"
    >
      <div class="absolute inset-0"></div>
      <h1 class="relative text-4xl md:left-[100px] text-black font-bold z-0 px-5 md:px-0">Instruction</h1>
    </div>
    <div class="flex justify-center py-5"><img :src="petimg" alt="" class="w-1/2 h-[30%] rounded-md"></div>
    <div v-for="(Instruction,index) in Instructions" :key="index" class=" px-5 md:px-[100px]">
     <div>
        <h1 class="font-bold text-[2rem] py-2">{{Instruction.pet}}</h1>
        <p> {{ Instruction. details }}</p>  
    </div>
    </div>
    <div class="flex justify-center py-7"><img :src="shopimg " alt="" class="w-1/2 h-[30%] rounded-md"></div>
    <div  class=" px-5 md:px-[100px]">
        <div><h1 class="font-bold text-[2rem] py-2"> {{mural }}</h1> </div>
        <p>{{ head }}</p>
        <h2 class="font-semibold text-[1.5rem]">{{ first }}</h2>
        <p>{{ firstpara }}</p>
        <div v-for="(Insruct, index) in Insructs" :key="index">
            <ul class="list-disc list-inside">
           <li>{{ Insruct.details }}</li>
            </ul>
        </div>
        <p>{{ sure }}</p>
        <div>
            <h1 class="pt-5 font-semibold text-[1.5rem] ">{{ secHead }}</h1>
            <p>{{ child  }}</p>
            <div v-for="(secInstruct, index) in secInstructs" :key="index" class="">
                <ul class="list-disc list-inside pl-4 ">
                    <li>{{ secInstruct.details }}</li>
                </ul>
            </div>
            <p>{{ formal  }}</p>
            <div v-for="(inner,index) in inners" :key="index" class="">
                <ul class="list-disc list-inside pl-4 ">
                    <li>{{ inner.details }}</li>
                </ul>
            </div>
            <p>{{ bottom }}</p>
        </div>

    </div>
    <div class=" px-5 md:px-[100px]">
        <h2 class="font-semibold text-[1.5rem] py-2">{{ design }}</h2>
        <p>{{ subdesign }}</p>
        <p>{{ ench }}</p>
    </div>
    <div class=" px-5 md:px-[100px]">
        <h2 class="font-semibold text-[1.5rem] py-2">{{intall }}</h2>
        <p>{{ sche }}</p>
        <div v-for="(installation, index) in installations" :key="index" >
            <ul class="list-disc list-inside pl-4 ">
                <li>{{ installation.details}}</li>
            </ul>  
        </div>
        <p>{{ care }}</p>
    </div>
    <div class=" px-5 md:px-[100px]" >
        <h2  class="font-semibold text-[1.5rem] py-2">{{ pay  }}</h2>
        <p>{{ firstPay }}</p>
        <p>{{ lastpay }}</p>
    </div>
    </div>
    <footer>
    <div class="text-center bg-black text-white py-10 mt-5">
      <p>Copyright © Camila's Art, All Right Reserved</p>
    </div>
  </footer>
</template>

<script setup>
import pagebg from '@/assets/img/pageBg.jpg';
import petimg from '@/assets/img/pet.png';
import shopimg from '@/assets/img/shopimg.jpg'

const Instructions = [
  {
    pet: 'Pet Instructions'
  },
  {
    details: '1. Forward your redemption email  (please don’t forget this, I need this) and tell me if you purchased the painting or the drawing to my email address at  camilajoe959@gmail.com along with your shipping address and three clear photos of your pet. Remember, I can only paint what I see. If you don’t have some good photos. Here is an easy way to take some great photos:'
  },
  {
    details: 'Go outside, the best lighting is always daylight. Go down to your pets eye-level or have someone pick them up and take the photos with the sunlight away from you with his head at a slight angle, keep shooting making sure your pets ears are alert, and take more pictures then you think you need. Pick out your favorite three and email them to me.'
  },
  {
    details: '2. I will notify you if the photos will work and along with a short description on how I’ll create the piece.'
  },
  {
    details: '3. After the piece is finished, I will email you a photo and inform you when it is shipped.  You will also get an email from Stamps.com on shipping, tracking information.'
  },
  {
    details: 'Please allow 4 to 6 weeks for the paintings and 2 to 3 weeks for the pencils. Inform me if they are for a gift and the latest date you need the piece by. Due to high volume, I will try my best to get it for you in time.'
  },
  {
    details: 'An additional pet can be added for a fee of $20 for the pencil, $35 if its an oil. Email me with the request and I will invoice you by paypal. If you don’t have paypal, you can send me a check.'
  },
  {
    details: 'Photos of the individual pets do not have to be together, I can put them together in the same piece. If you would like them much larger, please put that in your email and I can quote you a price. I’ll invoice you by PayPal for the extra fee..'
  },
  {
    details: 'Please remember that your photos are very important that they must be clear to have the best quality portrait created for you.'
  }
]

const  mural = 'Mural Instructions';
const  head = 'Thank you for your interest in a custom mural! I’m excited to bring your vision to life. Please review the steps below to begin the commission process.';
const  first = '1. Initial Inquiry & Vision Sharing';
const  firstpara = 'To start, please email me at camilajoe959@gmail.com with the following details:'

const Insructs = [
    {
        details: 'Your name and contact information'
    },
    {
        details: 'Location of the mural (city, wall type: indoor/outdoor, approximate dimensions)'
    },
    {
        details: 'A brief description of your concept or theme (e.g., floral, abstract, pet portraits, nature, etc.)'
    }, 
    {
        details: 'Reference images or inspiration, if available'
    },
    {
        details: 'Any budget considerations you’d like me to be aware of'
    }
]

const sure = '💡 Not sure what you want yet? No problem! Share what you have in mind and we can collaborate to design a mural that reflects your space and personality.'

 const secHead = '2. Consultation & Quote';
 const child = 'Once I receive your inquiry, I’ll follow up to schedule a consultation — either virtually or in person (depending on location). During this phase, we will:';

 const secInstructs = [
    {
        details:' Discuss the design in more detail'
    },
    {
        details: 'Review the wall or surface for size and condition'
    },
    {
        details: 'Talk about colors, style, and any specific elements you’d like included'
    },
    {
        details: 'Set expectations for the timeline and completion'
    }
 ]
 const formal = 'After the consultation, I will provide a formal project quote, which includes:'
 const inners = [
    {
        details: 'Design time'
    },
    {
        details: 'Materials'
    },
    {
        details: 'Travel (if applicable)'
    },
    {
        details: 'Painting/installation labor'
    }
 ]
const bottom = 'A 50% deposit is required to secure your mural in my schedule.'
const design = '3. Design & Approval';
const subdesign = 'I’ll create a digital sketch/mockup of your mural for approval. This will give you a clear idea of the layout, color scheme, and composition.'
const ench = 'You’ll have the opportunity to request one round of minor edits. Once approved, I’ll set a start date and confirm all final details with you.'

const intall = '4. Mural Installation';
const sche = 'On the scheduled date(s), I will arrive on-site to begin the mural. Please ensure:';
 
 const installations = [
    {
        details: ' The wall surface is clean and accessible'
    },
    {
        details: 'Any furniture or obstacles are moved out of the way'
    },
    {
        details: 'Weather conditions are considered (for outdoor murals)'
    }
 ]
  
 const care = 'I take great care in protecting the surrounding space and working respectfully within your home or business'
  
 const pay = '5. Completion & Final Payment'
 const firstPay = 'Once your mural is finished, we’ll do a walk-through to ensure everything is exactly as expected. The remaining 50% balance is due at this time.'
 const lastpay = 'I’ll also provide basic care and maintenance instructions to help your mural stay vibrant for years to come.'

 
</script>

<style lang="scss" scoped>

</style>