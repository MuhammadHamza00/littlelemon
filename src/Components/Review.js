import React from 'react'
import customer1 from "../Assets/p1.jpg"
import customer2 from "../Assets/p2.jpg"
import customer3 from "../Assets/p3.jpg"
import customer4 from "../Assets/p4.jpg"

export default function Review() {
  return (
    <>
      {/* <h1 id="rev">Reviews</h1><br/> */}
      <section className="review" id="review">
        <article className='review_card' id="r_card1">

          <h2>Alex</h2>
          <img src={customer1} alt="" />
          <span className='stars'>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </span>

        </article>

        <article className='review_card' id="r_card2">
          <h2>Anna</h2>
          <img src={customer2} alt="" />
          <span className='stars'>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </span>

        </article>

        <article className='review_card' id="r_card3">
          <h2>David</h2>
          <img src={customer3} alt="" />
          <span className='stars'>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </span>

        </article>

        <article className='review_card' id="r_card4">
          <h2>Merry</h2>
          <img src={customer4} alt="" />
          <span className='stars'>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </span>

        </article>

      </section>
    </>
  )
}
