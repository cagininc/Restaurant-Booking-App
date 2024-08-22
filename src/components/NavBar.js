"use client";
import Link from 'next/link';
function NavBar() {
  const handleAuthor = async () => {
    try {
      const response = await fetch('http://localhost:3002/api/deneme');
      const data = await response.json();
      console.log(data);
      alert(data[0].name);
    } catch (error) {
      console.error('Error fetching available times:', error);
    }
  };

  return (
    <nav className="bg-yellow-50 h-24 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-full items-center justify-between">
          <div className="flex items-center">
            <img className="h-20 w-20" src="/images/Logo.svg" alt="lemon" />
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-yellow-800 hover:bg-yellow-200"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-yellow-800 hover:bg-yellow-200"
                >
                  About
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-yellow-800 hover:bg-yellow-200"
                >
                  Menu
                </a>
                <a
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium text-yellow-800 hover:bg-yellow-200"
                >
                  Calendar
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center pr-2">
          <Link href="#main-form" scroll={false}>
            <button

                          className="btn btn-primary bg-green-600 pulse-on-hover hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          type="button"
              //onClick={handleAuthor}
              
              
            >
              Reserve Now!
            </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
