
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function contact_us() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) console.log('Form submitted successfully');
      else console.error('Form submission failed');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <html lang="en">
        <body>
          <header>
            <h1>Contact Us</h1>
          </header>
          <section>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required onChange={handleChange} />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required onChange={handleChange} />

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="4" required onChange={handleChange}></textarea>

              <div className="button-group">
                <button type="submit">Submit</button>
                <button type="button" className="delete-button">Delete</button>
                <button type="button" className="modify-button">Modify</button>
              </div>
            </form>
          </section>
          <footer>
            <Link to="/Main">
              <button>Home</button>
            </Link>
            <p>&copy; 2023 BeancIncc. </p>
          </footer>
        </body>
        <style jsx>{`
          .button-group {
            display: flex;
            gap: 7px
          }

          .delete-button,
          .modify-button {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          .delete-button:hover,
          .modify-button:hover {
            background-color: #555;
          }

          button {
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: 10px;
          }
          
          body {
            font-family: 'Roboto Condensed', sans-serif;
            background-image: url('assets/background_cut.png');
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background-color: #f5f5f5;
          }

          header {
            color: #fff;
            background-image: url('assets/menu_bg.png');
            text-align: center;
            padding: 1px;
            width: 100%;
          }

          section {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            background-color: #fff;
            opacity: 0.9;
          }

          label {
            display: block;
            margin-bottom: 8px;
            font-weight: bold;
          }

          input,
          textarea {
            width: 100%;
            padding: 8px;
            margin-bottom: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }

          button {
            background-color: #333;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }

          button:hover {
            background-color: #555;
          }

          footer {
            color: #fff;
            background-image: url('assets/menu_bg.png');
            text-align: center;
            padding: -5px;
            position: fixed;
            bottom: 0;
            width: 100%;
            color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          footer p{
            margin-right:650px;
          }
          
          Link {
            text-decoration: none;
          }
        `}</style>
      </html>
    </>
  );
}
