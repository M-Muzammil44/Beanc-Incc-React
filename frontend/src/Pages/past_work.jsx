import React from 'react';
import { Link } from 'react-router-dom';

export default function PastWork() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Past Work</title>
        </head>
        <body>
          <header>
            <h1>Past Work</h1>
          </header>

          <div className="carousel-container">
            <div className="carousel">
              <div className="project">
                <h2>Project 1</h2>
                <p>
                  Description of Project 1. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam sit minima officia tempore libero sint totam, facere consequuntur velit
                  facilis, quibusdam tempora id.
                </p>
              </div>
              <div className="project">
                <h2>Project 2</h2>
                <p>
                  Description of Project 2. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam sit minima officia tempore libero sint totam, facere consequuntur velit
                  facilis, quibusdam tempora id.
                </p>
              </div>
              <div className="project">
                <h2>Project 3</h2>
                <p>
                  Description of Project 3. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam sit minima officia tempore libero sint totam, facere consequuntur velit
                  facilis, quibusdam tempora id.
                </p>
              </div>
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

          .carousel-container {
            max-width: 800px;
            margin: 20px auto;
            overflow: hidden;
          }

          .carousel {
            display: flex;
          }

          .project {
            width: 100%;
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
            background-color: #fff;
            border-radius: 10px;
            margin-right: 20px;
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
