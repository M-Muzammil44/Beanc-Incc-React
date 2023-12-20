import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const History = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await axios.get('/api/forms'); // Update the endpoint based on your server setup
        setForms(response.data);
      } catch (error) {
        console.error('Error fetching forms:', error);
      }
    };

    fetchForms();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/forms/${id}`); // Update the endpoint based on your server setup
      setForms((prevForms) => prevForms.filter((form) => form._id !== id));
    } catch (error) {
      console.error('Error deleting form:', error);
    }
  };

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Form Submissions History</title>
        </head>
        <body>
          <header>
            <h1>Form Submissions History</h1>
          </header>

          <div className="form-list">
            {forms.map((form) => (
              <div className="form" key={form._id}>
                <p>
                  <strong>Name:</strong> {form.name}
                </p>
                <p>
                  <strong>Email:</strong> {form.email}
                </p>
                <p>
                  <strong>Phone:</strong> {form.phone}
                </p>
                <p>
                  <strong>Message:</strong> {form.message}
                </p>
                <div className="form-footer">
                  <small>Submitted at: {new Date(form.createdAt).toLocaleString()}</small>
                  <button className="delete-button" onClick={() => handleDelete(form._id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <footer>
            <Link to="/Main">
              <button className="home-button">Home</button>
            </Link>
            <p>&copy; {new Date().getFullYear()} Your Company Name</p>
          </footer>
        </body>

        <style jsx>{`
          button {
            background-color: transparent;
            border: none;
            cursor: pointer;
          }

          .delete-button {
            background-color: red;
            color: white;
            border: none;
            padding: 5px 10px;
            cursor: pointer;
          }

          .home-button {
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
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

          .form-list {
            max-width: 800px;
            margin: 20px auto;
            overflow: hidden;
          }

          .form {
            position: relative;
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            background-color: #fff;
            border-radius: 10px;
            margin-bottom: 20px;
          }

          .form-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
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

          footer p {
            margin-right: 650px;
          }

          Link {
            text-decoration: none;
          }
        `}</style>
      </html>
    </>
  );
};

export default History;
