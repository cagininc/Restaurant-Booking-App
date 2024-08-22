"use client";
//data-theme="Lemonade"
function Hero() {
  return (
<div  data-theme="Lemonade" class="relative isolate overflow-hidden bg-lemonade px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
  <div class="absolute inset-0 -z-10 overflow-hidden">

  
    <svg class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
      <defs>
        <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
          <path d="M100 200V.5M.5 .5H200" fill="none" />
        </pattern>
      </defs>
      <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
        <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
      </svg>
      <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
    </svg>
  </div>
  <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="lg:max-w-lg">
          
          <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Little Lemon</h1>
          <p class="mt-6 text-xl leading-8 text-gray-700">Little Lemon, located in the heart of Chicago,</p>
        </div>
      </div>
    </div>
    <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
    <img class="h-8 w-auto" src="/images/restaurantfood.png" style={{ width: '500px', height: '750px' }}  alt="lemon"/>
    </div>
    <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
      <div class="lg:pr-4">
        <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
          <p> Little Lemon is a family-owned Mediterranean restaurant that prides itself on delivering traditional recipes with a modern twist. Our warm and inviting atmosphere reflects our commitment to creating a dining experience that feels like home. We source the freshest ingredients to craft dishes that honor our heritage while incorporating contemporary flavors and techniques. From our carefully curated menu to our attentive service, we strive to offer an unforgettable culinary journey that celebrates the rich and diverse flavors of the Mediterranean. Whether you're joining us for a casual lunch or a special dinner, we promise a delightful experience that will leave you wanting more.</p>
          <ul role="list" class="mt-8 space-y-8 text-gray-600">
            
            
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>





  
  );
}

export default Hero;

//We are a family owned Mediterranean restaurant, focused on traditional
//recipes served with a modern twist.