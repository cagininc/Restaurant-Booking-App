"use client";

export default function Testimonials() {
  return (
    <div className="bg-white py-10">
      <h1 className="text-4xl text-center font-bold mb-6">Testimonials</h1>
      
      <section className="flex flex-wrap justify-center gap-6">
        {/* Card 1 */}
        <div className="card bg-base-100 w-80 shadow-xl">
        <div className="rating rating-md rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input
    type="radio"
    name="rating-10"
    className="mask mask-star-2 mask-half-1 bg-green-500"
    defaultChecked />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
</div>
          <figure>
            <img src="/images/profile3.jpg" alt="Sajal L." className="mx-auto h-20 w-20 rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className=" text-sm text-gray-500 card-title">"Sajal L."</h2>
            <div className="flex justify-center mb-2">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
            </div>
            <p className=" text-sm text-gray-500">The food was an absolute delight! Every dish was bursting with flavor and beautifully presented. Can't wait to come back!"</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 w-80 shadow-xl">
            {/* stars */}
            <div className="rating rating-md rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input
    type="radio"
    name="rating-10"
    className="mask mask-star-2 mask-half-1 bg-green-500"
    defaultChecked />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
</div>
          <figure>
            <img src="/images/profile2.jpg" alt="Alex P." className="mx-auto h-20 w-20 rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="  text-sm text-gray-500 card-title">"Alex P."</h2>
            <div className="flex justify-center mb-2">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
            </div>
            <p className=" text-sm text-gray-500">"A fantastic dining experience! The flavors were unique and the presentation was spot-on. Highly recommended!"</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 w-80 shadow-xl">
            {/* stars */}
            <div className="rating rating-md rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input
    type="radio"
    name="rating-10"
    className="mask mask-star-2 mask-half-1 bg-green-500"
    defaultChecked />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
</div>
          <figure>
            <img src="/images/Ramsha.png" alt="Morgan T." className="mx-auto h-20 w-20 rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className=" text-sm text-gray-500 card-title">"Morgan T."</h2>
            <div className="flex justify-center mb-2">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
            </div>
            <p className=" text-sm text-gray-500">"Every meal was a delight. The flavors were exquisite and the service was top-notch. Will definitely return!"</p>
          </div>
        </div>

        {/* Card 4 */}
        {/* <div className="card bg-base-100 w-80 shadow-xl">
        <div className="rating rating-md rating-half">
  <input type="radio" name="rating-10" className="rating-hidden" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input
    type="radio"
    name="rating-10"
    className="mask mask-star-2 mask-half-1 bg-green-500"
    defaultChecked />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-1 bg-green-500" />
  <input type="radio" name="rating-10" className="mask mask-star-2 mask-half-2 bg-green-500" />
</div>
          <figure>
            <img src="/images/Mawra.png" alt="Jordan R." className="mx-auto h-20 w-20 rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">"Jordan R."</h2>
            <div className="flex justify-center mb-2">
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
              <i className="fas fa-star text-yellow-500"></i>
            </div>
            <p>"The best dining experience I've had in a long time. Each dish was packed with flavor and perfectly cooked."</p>
          </div>
        </div> */}
      </section>
    </div>
  );
}
