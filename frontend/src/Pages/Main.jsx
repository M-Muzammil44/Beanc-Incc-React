import React from 'react';
import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import item_red from '../Component/projects-assets/item_red.png';
import item_blue from '../Component/projects-assets/item_blue.png';

import egg_figure_1 from '../Component/projects-assets/egg_figure 1.png';
import egg_figure_2 from '../Component/projects-assets/egg_figure 2.png';
import holding_E from '../Component/projects-assets/holding_E.png';
import image from '../Component/projects-assets/image.png';
import lapco from '../Component/projects-assets/lapco.png';
import global from '../Component/projects-assets/global.png';
import empire from '../Component/projects-assets/empire.png';
import empire2 from '../Component/projects-assets/empire2.png';
import read_more from '../Component/projects-assets/read_more.png';

const Main = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(null)


  const handleSubmit = async (e) => {
    e.preventDefault()

    const formm = { name, email, message }

    const response = await fetch('/api/forms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, phone, message }),
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      setError(null)
      console.log('Form added ', json)
    }
  }



  return (
    <>
      <header>
        <nav className="menu">
          <ul>
            <li>
              <Link to="/services">
                <img className="menu-imgs" src={item_blue} alt="" />
                <span className="item-text">Services</span>
              </Link>
            </li>

            <li>
              <Link to="/about-us">
                <img className="menu-imgs" src={item_blue} alt="" />
                <span className="item-text">About us</span>
              </Link>
            </li>

            <li className="logo" style={{ color: '#70cbd2' }}>
               Beeanc Inc. 
            </li>

            <li>
              <Link to="/past_work">
                <img className="menu-imgs" src={item_red} alt="" />
                <span className="item-text">Past work</span>
              </Link>
            </li>

            <li>
              <Link to="/history">
                <img className="menu-imgs" src={item_red} alt="" />
                <span className="item-text">History</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="layout">
        <img src={egg_figure_2} alt="Egg Figure 2" className="figure" />
        <div id="info-box">
          <p id="info-text1">- HI THERE -</p>
          <p id="info-text2">CLICK TO VIEW</p>
          <p className="arrow">&#9660;</p>
        </div>
        <img src={egg_figure_1} alt="Egg Figure 1" className="figure" />
      </div>
      <div className="gridd">
        <div className="item">
          <p>
            {' '}
            Web
            <br /> Marketing{' '}
          </p>
        </div>
        <div className="item">
          <img className="images" src={holding_E} alt="" />
        </div>
        <div className="item">
          <p>
            MARKETING
            <br />CONSULTANT
          </p>
        </div>

        <div className="item3">
          <p>
            {' '}
            GET IN
            <br /> TOUCH
          </p>
          <form onSubmit={handleSubmit}>
            <input type="text" id="name" name="name" placeholder="NAME" required onChange={(e) => setName(e.target.value)} value={name} />
            <br />
            <br />
            <input type="email" id="email" name="email" placeholder="EMAIL" required onChange={(e) => setEmail(e.target.value)} value={email} />
            <br />
            <br />
            <input type="tel" id="phone" name="phone" placeholder="PHONE" onChange={(e) => setPhone(e.target.value)} value={phone} />
            <br />
            <br />
            <textarea id="message" name="message" rows="12" placeholder="MESSAGE" required onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
            <br />
            <br />
            <div class="submitM">
                <button type="submit">SUBMIT</button>    
            </div>
          </form>

        </div>

        <div className="item">
          <img className="images" src={lapco} alt="" style={{ paddingTop: '60px' }} />{' '}
        </div>
        <div className="item">
          <img className="images" src={global} alt="" style={{ paddingTop: '80px', paddingLeft: '45px' }} />{' '}
        </div>
        <div className="item">
          <img className="images" src={empire} alt="" style={{ paddingTop: '80px', paddingLeft: '59px' }} />
        </div>
        <div className="item8">
          <p>ABOUT US</p>
          <p id="aboutText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit minima officia tempore libero sint
            totam, facere consequuntur velit facilis, quibusdam tempora id. aliquam dolore deleniti?
          </p>
          <div className="readM">
            <img src={read_more} alt="" />
            <p>READ MORE</p>
          </div>
        </div>
        <div className="item">
          <img className="images" src={empire2} alt="" style={{ paddingTop: '62px', paddingLeft: '80px' }} />
        </div>
        <div className="item">
          <p style={{ paddingTop: '10px', fontSize: '50px' }}>Contact Us</p>
        </div>
      </div>
      <footer>
        <div className="container3">
          <ul>
            <li className="headoffice"><p> HEAD OFFICE 0161 941 4252 </p></li>
            <li><p>HOME</p></li>
            <li><p>ABOUT US</p></li>
            <li><p>SERVICES</p></li>
            <li><p>PAST WORK</p></li>
            <li><p>CONTACT US</p></li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Main;
