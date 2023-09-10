import React, { useState } from 'react'

export default function BookForm({ availableTimes, onDateChange, SendForm }) {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedBtn, setSelectedBtn] = useState(true);
    const handleDateChange = (event) => {
        const newDate = event.target.value;
        setSelectedDate(newDate);
        onDateChange(newDate);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            cusname: bookForm.cusname,
            email: bookForm.email,
            occasion: bookForm.occasion,
            people: bookForm.people,
            date: selectedDate,
            time: selectedTime, // You need to define selectedTime based on user selection
        };
        if (bookForm.cusname === '' || bookForm.email === '' || selectedDate === '' || selectedTime === '') {
            alert("Missing Data");
            setSelectedBtn(true);
        }
        SendForm(formData);
    }

    const [bookForm, setBookForm] = useState(
        {
            cusname: '',
            email: '',
            people: '',
            occasion: '',
        }
    );

    const handleInputChange = (fieldName, value) => {
        setBookForm({
            ...bookForm,
            [fieldName]: value,
        });
        if (bookForm.cusname === '' || bookForm.email === '' ||selectedDate === '' || selectedTime === '') {
            setSelectedBtn(true);
        }else{
            setSelectedBtn(false);
        }
    };



    return (
        <>
            <div class="whole">
            </div>
            <article className="container">
                <h1>Reserve Table</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui atque assumenda iusto, quas quidem dicta cum omnis quod. Nemo, mollitia!</p>
                <hr />
                <form action="" id="dataform" onSubmit={handleSubmit}>
                    <h3>PERSONAL INFO:</h3>
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" name="cusname" id="name" value={bookForm.cusname} onChange={(e) => handleInputChange(e.target.name, e.target.value)} required/>
                    <label htmlFor="email">Enter Email</label>
                    <input type="email" name="email" id="email" value={bookForm.email} onChange={(e) => handleInputChange(e.target.name, e.target.value)} required/>


                    <h3>DETAILS:</h3>

                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion" class="custom-select" value={bookForm.occasion} onChange={(e) => handleInputChange(e.target.name, e.target.value)} required>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Birthday">Birthday</option>
                    </select>

                    <label htmlFor="people">Number of People</label>
                    <input type="number" placeholder="1" min="1" max="10" name="people" id="people" value={bookForm.people} onChange={(e) => handleInputChange(e.target.name, e.target.value)}required />

                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        required
                    />

                    <label htmlFor="time">Time</label>
                    <select id="time" name="time" value={selectedTime}
                        onChange={(e) => setSelectedTime(e.target.value)} disabled={!selectedDate} required>
                        <option value="">Select a time</option>
                        {Array.isArray(availableTimes) &&
                            availableTimes.map((time, index) => (
                                <option key={index} value={time}>
                                    {time}
                                </option>
                            ))}
                    </select>
                    <button type="submit"disabled={selectedBtn} aria-label="Reserve Table">Reserve Now</button>
                </form>
            </article>
        </>
    )
}
