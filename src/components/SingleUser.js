function SingleUser({ user }) {
const handleSubmit=()=>{
    
    alert("User Accepted",user.login.uuid);
console.log(user); }

  return (
    
    <div class="flex p-6 font-mono">
  <div class="flex-none w-48 mb-10 relative z-10 before:absolute before:top-1 before:left-1 before:w-full before:h-full before:bg-teal-400">
    <img src={user.picture.large} alt="profile picture" class="absolute z-10 inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
  </div>
  <form class="flex-auto pl-6">
    <div class="relative flex flex-wrap items-baseline pb-6 before:bg-black before:absolute before:-top-6 before:bottom-0 before:-left-60 before:-right-6">
      <h1 class="relative w-full flex-none mb-2 text-2xl font-semibold text-white">
        {user.name.first} {user.name.last}
      </h1>
      <div class="relative text-lg text-white">
        {user.country}
      </div>
      <div class="relative uppercase text-teal-400 ml-3">
        {user.registered.age} years
      </div>
    </div>
    <div class="flex items-baseline my-6">
      <div class="space-x-3 flex text-sm font-medium">
        
        
      </div>
    </div>
    <div class="flex space-x-2 mb-4 text-sm font-medium">
      <div class="flex space-x-4">
        <button onClick={handleSubmit} class="px-6 h-12 uppercase font-semibold tracking-wider border-2 border-black bg-teal-400 text-black" type="submit">
          Accept
        </button>
        <button class="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900" type="button">
          Decline
        </button>
      </div>
     
    </div>
    <p class="text-xs leading-6 text-slate-500">
      
    </p>
  </form>
</div>
  );
}

export default SingleUser;
