"use client";
function Specials() {
  return (
    <div >
      Specials
     
      <div data-theme="Lemonade"
      class="bg-Lemonade">
        <div class="bg-Lemonade mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Specials
          </h2>

          <div class="mt-6 grid grid-cols-4 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="/images/greeksalad1.jpg"
                  alt="Greek Salad"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0" font-bold ></span>
                      Mediterranean Salad              </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    A burst of Mediterranean flavors in every fresh, crisp
                    bite.
                  </p>
                </div>
                <p class="text-sm font-medium text-gray-900"></p>
              </div>
            </div>
            {/* // More products... peki burası */}
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="/images/bruchetta.svg"
                  alt="Bruchetta"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>

              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Bruchetta{" "}
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    Experience the ultimate crunch with fresh tomatoes and
                    basil on toasted perfection.
                  </p>
                </div>
                <p class="text-sm font-medium text-gray-900"></p>
              </div>
            </div>
            {/* //more products... burası */}
            <div class="group relative">
              <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="/images/lemonDessert.jpg"
                  alt="Front of men&#039;s Basic Tee in black."
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="badge badge-warning gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block h-4 w-4 stroke-current">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  New!
  <span class="relative flex h-3 w-3">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>
</div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      Lemon Cake
                    </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    A zesty and moist lemon cake, topped with a tangy lemon
                    glaze.
                  </p>
                </div>
                <p class="text-sm font-medium text-gray-900"></p>
              </div>
            </div>

            {/* <!-- More products... --> */}
            <div class="group relative">

            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src="/images/greeksalad1.jpg"
                  alt="Greek Salad"
                  class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0" font-bold ></span>
                      Mediterranean Salad              </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-500">
                    A burst of Mediterranean flavors in every fresh, crisp
                    bite.
                  </p>
                </div>
                <p class="text-sm font-medium text-gray-900"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Specials;
