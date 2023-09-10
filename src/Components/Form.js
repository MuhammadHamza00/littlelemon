import React from 'react'
import cardimg from "../Assets/restauranfood.jpg"
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

export default function Form() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/booking'); 
    };
    return (
        <>
            <section className='form'id="res">
                <article className='content'>
                    <h1>Little Lemon</h1>
                    <address>
                        <h2>Chicago</h2>
                    </address>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quidem sit incidunt culpa quasi asperiores esse reiciendis perferendis sunt, et mollitia sequi nostrum veniam, quibusdam id quae soluta exercitationem dolor cum quos illum? Quia aut harum reprehenderit inventore nam debitis?</p>
                    <button id="bookTable"onClick={handleSubmit} aria-label="Go to Page">Book Table</button>
                </article>
                <img src={cardimg} />
            </section>
        </>
    )
}
