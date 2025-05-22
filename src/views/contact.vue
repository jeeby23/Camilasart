<template>
    <div class="mt-[100px] font-dosis">
        <div
      class="relative bg-cover bg-center h-32 w-full flex items-center text-white"
      :style="{ backgroundImage: `url(${pagebg})` }"
    >
      <div class="absolute inset-0"></div>
      <h1 class="relative text-4xl md:left-[100px] text-black font-bold z-0 px-5 md:px-0">Contact</h1>
    </div>
    <div v-for="(contact,index) in contacts" :key="index" class=" px-5 md:px-[100px] py-7">
     <h2 class="py-3">{{ contact.info }}</h2>
     <p >{{ contact.address }}</p>
     <p><a :href="`mailto:${ contact.email }`">{{ contact.email }}</a></p>
     <p><a :href="`tel:${contact.number }`"> Camila: {{ contact.number }}</a></p>
     <p><a :href="`tel:${contact.project }`"> Project Manager: {{ contact.project }}</a></p>
    </div>
    <div class=" px-5 md:px-[100px]">
        <div  v-if="!isSubmitted">
            <form @submit.prevent="handlesubmit">
                <div class="form-group flex gap-4">
  <!-- First Name Column -->
  <div class="flex flex-col w-1/2">
   <label for="name">Name</label>
    <input type="text" id="first" v-model="Firstname"  class="border border-slate-300 shadow-lg py-1" />
    <label for="first">First</label>
  </div>

  <!-- Last Name Column -->
  <div class="flex flex-col w-1/2"><br>
    <input type="text" id="last" v-model="Lastname" class="border border-slate-300 shadow-lg py-1" />
    <label for="last">Last</label>
  </div>
</div><br>
<div class="form-group">
    <div class="flex flex-col w-full">
   <label for="name">Phone</label>
    <input type="number" id="first" v-model="PhoneNumber" class="border border-slate-300 shadow-lg py-1"  />
    </div>
</div><br>
<div class="form-group">
    <div class="flex flex-col w-full">
   <label for="name">Email</label>
    <input type="email" id="first" v-model="Email" class="border border-slate-300 shadow-lg py-1" />
    </div>
</div><br>
<div class="form-group">
    <label for="message">Message/comments</label>
    <textarea name="" id="" cols="100" rows="5" v-model="Message" class="border border-slate-300 shadow-lg w-full resize-none"></textarea>
</div>
<button type="submit" class="bg-black w-full md:w-auto text-white py-2 px-3 font-bold my-4">Submit</button>
            </form>
        </div>
        <div v-else class="py-10 text-center">
        <h2 class="text-2xl font-bold mb-4">Thank You!</h2>
        <p class="text-lg">We've received your message and will get back to you soon.</p>
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
import { ref } from 'vue'
import { db, addDoc, collection } from '../firebase/config'
import pagebg from '@/assets/img/pageBg.jpg'
import emailjs from '@emailjs/browser'  // Import EmailJS


const isSubmitted = ref(false)

// Contact info
const contacts = [
  {
    info: 'Please feel free to contact us at any time, we will respond to your email within 24 – 48 hours.',
    address: '20057 Doolittle St, Gaithersburg, MD',
    email: 'camilajoe959@gmail.com',
    number: '(304) 255-5748',
    project: '(504) 355-6320'
  }
]

// Form fields - make sure these are properly defined with ref()
const Firstname = ref('')
const Lastname = ref('')
const PhoneNumber = ref('')
const Email = ref('')
const Message = ref('')

// Submit handler
const handlesubmit = async () => {
  const userMessage = {
    firstname: Firstname.value,  // Now properly accessing the ref value
    lastname: Lastname.value,
    number: PhoneNumber.value,
    email: Email.value,
    message: Message.value
  }

  try {
    await addDoc(collection(db, 'messages'), userMessage)
    console.log('Message sent successfully!')

    await emailjs.send(
      'service_ze6bscj',      // Replace with your actual EmailJS service ID
      'template_hsg3bgq',     // Replace with your actual EmailJS template ID
      {
        from_name: `${Firstname.value} ${Lastname.value}`,
        phone: PhoneNumber.value,
        from_email: Email.value,
        message: Message.value
      },
      'Cpy-t3b7lMBoMekur'       // Replace with your EmailJS public key
    )

    console.log('Message sent and email delivered!')
    
    // Reset form fields
    Firstname.value = ''
    Lastname.value = ''
    PhoneNumber.value = ''
    Email.value = ''
    Message.value = ''

    isSubmitted.value = true
  } catch (error) {
    console.error('Error sending message:', error)
  }
}
</script>
