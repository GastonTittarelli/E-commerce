import React from 'react'

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
};

  return (
    <>
      <footer className="bg-gray-200 p-6 text-center">
        <div className="mb-5">
            <h3 className="text-blue-500 font-bold text-lg">Glamour Attic</h3>
            <p className="text-gray-600">Quality products, affordable prices.</p>
        </div>
        <div class="mb-4">
          <a href="https://github.com/GastonTittarelli" target="_blank" rel="noopener noreferrer" class="text-blue-600 mx-2 hover:underline">About Us</a>
          <a href="#"  onClick={(e) => e.preventDefault()} class="text-blue-600 mx-2 hover:underline">Contact</a>
          <a href="#"  onClick={(e) => e.preventDefault()} class="text-blue-600 mx-2 hover:underline">FAQ</a>
        </div>
        <div>
            <p class="text-gray-500">© 2024 Glamour Attic. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer