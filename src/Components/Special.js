import React from 'react'
import img1 from "../Assets/lemon dessert.jpg"
import img2 from "../Assets/lemon dessert.jpg"
import img3 from "../Assets/lemon dessert.jpg"


export default function Special() {
  return (
    <>
      <section className="special"id="special">
        <article className='head'>
          <h1>This Week Specials</h1>
          <button id="onlineRes">
            Online Menu
          </button>
        </article>
        <article className="menuItems">

          <div className="item" id="item1">
            <img src={img1} alt="img" />
              <span className='info'>
                <h2>Title</h2>
                <h1>$99.9</h1>
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam aut necessitatibus nesciunt excepturi inventore eos molestiae, eligendi dignissimos magnam repellendus iste incidunt. Autem id consectetur, numquam labore reprehenderit explicabo.
              </p>
              <h3>Delivery Time : 10mins</h3>
          </div>

          <div className="item" id="item1">
            <img src={img2} alt="img" />
              <span className='info'>
                <h2>Title</h2>
                <h1>$99.9</h1>
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam aut necessitatibus nesciunt excepturi inventore eos molestiae, eligendi dignissimos magnam repellendus iste incidunt. Autem id consectetur, numquam labore reprehenderit explicabo.
              </p>
              <h3>Delivery Time : 10mins</h3>
          </div>

          <div className="item" id="item1">
            <img src={img3} alt="img" />
              <span className='info'>
                <h2>Title</h2>
                <h1>$99.9</h1>
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquam aut necessitatibus nesciunt excepturi inventore eos molestiae, eligendi dignissimos magnam repellendus iste incidunt. Autem id consectetur, numquam labore reprehenderit explicabo.
              </p>
              <h3>Delivery Time : 10mins</h3>
          </div>

        </article>
      </section>
    </>
  )
}
