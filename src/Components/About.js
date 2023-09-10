import React from 'react'
import cardimg from "../Assets/restauranfood.jpg"

export default function About() {
  return (
    <>
      <section className='about'id="about">
        <article className='contain'>
          <h1>Little Lemon</h1>
          <address>
            <h2>Chicago</h2>
          </address>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem sit incidunt culpa quasi asperiores esse reiciendis perferendis sunt, et mollitia sequi nostrum veniam, quibusdam id quae soluta exercitationem dolor cum quos illum? Quia aut harum reprehenderit inventore nam debitis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem sit incidunt culpa quasi asperiores esse reiciendis perferendis sunt, et mollitia sequi nostrum veniam, quibusdam id quae soluta exercitationem dolor cum quos illum? Quia aut harum reprehenderit inventore nam debitis?
          </p>
        </article>
        <div className="imgcontain">
            <img src={cardimg} className='top-image'/>
        </div>
      </section>
    </>
  )
}
