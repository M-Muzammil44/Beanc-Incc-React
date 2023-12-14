import React from 'react';
import Team_Photo from './projects-assets/team.jpg';
import { Link } from 'react-router-dom';

export default function AboutUs() {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>About Us</title>
        </head>
        <body>
          <header>
            <h1>About Us</h1>
          </header>

          <div className="container">
            <div className="about-section">
              <imgage src={Team_Photo} alt="Team Photo" />
              <div className="about-content">
                <h2>Our Team</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ullam nesciunt
                  animi neque nemo vitae, veritatis unde voluptatibus distinctio in incidunt
                  reiciendis dolores sunt perferendis soluta delectus consequuntur. Fuga aspernatur
                  sed, animi repellat voluptas assumenda quo voluptate eligendi officia, dignissimos
                  perspiciatis sequi laborum quisquam, fugit voluptatum. Sapiente soluta cupiditate
                  voluptas.
                </p>
              </div>
            </div>
          </div>

        </body>
      </html>
      <footer>
          <Link to="/Main">
            <button>Home</button>
          </Link>
        <p>&copy; 2023 BeancIncc. </p>
    </footer>
      <style jsx>{`
        button {
          button {
            background-color: transparent;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: 10px;
          }
        }
        body {
          font-family: Arial, sans-serif;
          background-image: url('./projects-asset/background_cut.png');
          margin: 0;
          padding: 0;
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
        }

        .about-section {
          text-align: center;
        }

        .about-section img {
          max-width: 300px;
          height: auto;
          border-radius: 50%;
          margin-bottom: 20px;
        }

        .about-content {
          padding: 20px;
          background-color: #fff;
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
        }
      `}</style>
    </>
  );
}
