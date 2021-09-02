import React from "react"

//const categories = ["beach", "temple", "desert", "tower", "mountain", "metropolitan"];

export default function Categories() {
  return (
  <div className="pt-20 bg-gray-50" id="category">
    <div className="container mx-auto px-4 md:px-20">
      <h1 className="my-2 text-5xl">Categories</h1>
      <p>Choose your favorite destinations category!</p>
      <div className="overflow-x-scroll whitespace-nowrap pt-12 pb-20">
        <div className="inline-block pr-8">
          <img src="https://picsum.photos/seed/beach/240" alt="cateogries-img"/>
          <p className="text-center pt-4 font-bold">Beach</p>
        </div>
        <div className="inline-block pr-8">
          <img src="https://picsum.photos/seed/temple/240" alt="cateogries-img"/>
          <p className="text-center pt-4 font-bold">Temple</p>
        </div>
        <div className="inline-block pr-8">
          <img src="https://picsum.photos/seed/desert/240" alt="cateogries-img"/>
          <p className="text-center pt-4 font-bold">Desert</p>
        </div>
        <div className="inline-block pr-8">
          <img src="https://picsum.photos/seed/tower/240" alt="cateogries-img"/>
          <p className="text-center pt-4 font-bold">Tower</p>
        </div>
        <div className="inline-block pr-8">
          <img src="https://picsum.photos/seed/mountain/240" alt="cateogries-img"/>
          <p className="text-center pt-4 font-bold">Mountain</p>
        </div>
        <div className="inline-block pr-8">
          <img src="https://picsum.photos/seed/metropolitan/240" alt="cateogries-img"/>
          <p className="text-center pt-4 font-bold">Metropolitan</p>
        </div>
      </div>
    </div>
  </div>
  )
}
