
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:3001/tasks', {
        method: "POST",
        body: JSON.stringify({ name, email, data }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const response = await result.json();
      console.warn(response);
      if (response) {
        alert("Data saved successfully");
        setEmail("");
        setName("");
        setData("");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
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
            <form onSubmit={handleOnSubmit}>
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />

              <label htmlFor="email">Email:</label>
              <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

              <label htmlFor="message">Message:</label>
              <textarea placeholder="data" value={data} onChange={(e) => setData(e.target.value)} />

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


export default ContactUs;
