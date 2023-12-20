import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Our Services</title>
        </head>
        <body>

          <header>
            <h1>Our Services</h1>
          </header>

          <div className="container">
            <div className="service">
              <h2>Service 1</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis id imperdiet congue, leo metus volutpat justo.</p>
            </div>

            <div className="service">
              <h2>Service 2</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis id imperdiet congue, leo metus volutpat justo.</p>
            </div>

            <div className="service">
              <h2>Service 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, felis id imperdiet congue, leo metus volutpat justo.</p>
            </div>
          </div>

          <footer>
            <Link to="/Main">
              <button>Home</button>
            </Link>
            <p>&copy; 2023 BeancIncc. </p>
          </footer>

        </body>

        <style jsx>{`
          footer button {
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: 10px;
          }
            body {
              font-family: Arial, sans-serif;
              background-image: url('assets/background_cut.png');
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              background-color: #f4f4f4;
            }
  
            header {
              color: #fff;
              background-image: url('assets/menu_bg.png');
              text-align: center;
              padding: 1px;
              width: 100%;
            }
  
            .container {
              width: 80%;
              margin: 20px auto;
              overflow: hidden;
              display: flex;
              flex-direction: row;
            }
  
            .service {
              background-color: #fff;
              padding: 20px;
              margin-right: 30px;
              display: flex;
              flex-direction: column;
              margin-bottom: 20px;
              border-radius: 8px;
              box-shadow: 0 0 10px #285268;
            }
  
            h2 {
              color: #333;
            }
  
            p {
              color: #666;
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
