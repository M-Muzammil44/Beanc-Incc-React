
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formm = {name, email, message}

    const response = await fetch('/api/forms',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
    const json = await response.json()

    if (!response.ok){
      setError(json.error)
    }
    if (response.ok){
      setName('')
      setEmail('')
      setMessage('')
      setError(null)
      console.log('Form added ', json)
    }
  }

  return (
    <>
      <html lang="en">
        <body>
          <header>
            <h1>Contact Us</h1>
          </header>
          <section>
            <form className='contactus' onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text"  onChange={(e) => setName(e.target.value)} value={name}/>

              <label>Email:</label>
              <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />

              <label>Message:</label>
              <textarea onChange={(e) => setMessage(e.target.value)} value={message} />

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
          
          
        `}</style>
      </html>
    </>
  );
}


export default ContactUs;
