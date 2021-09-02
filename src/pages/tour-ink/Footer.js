import React from "react"

export default function Footer() {
  return (
  <div>
    <div className="pb-20">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
          <div>
            <ul>
              <li className="font-bold">Menu</li>
              <li><button className="hover:text-blue-900">Home</button></li>
              <li><button className="hover:text-blue-900">About Us</button></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold">Booking Plan</li>
              <li><button className="hover:text-blue-900">Personal Trip</button></li>
              <li><button className="hover:text-blue-900">Group Trip</button></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold">Further Information</li>
              <li><button className="hover:text-blue-900">Terms & Condition</button></li>
              <li><button className="hover:text-blue-900">Privacy Policy</button></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="font-bold">Get App</li>
              <li><button className="hover:text-blue-900">App Store</button></li>
              <li><button className="hover:text-blue-900">Google Play Store</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
