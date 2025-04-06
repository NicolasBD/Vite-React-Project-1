import React from 'react'
import './Sidebar.css'
import profileimage from '../assets/profileimage.jpeg';
import { Facebook } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';



function Sidebar() { // Changed the component name to Sidebar
    return (
      <aside className="sidebar">
        <div className="profile-image-container">
          <img
            src={profileimage} // Replace with your profile image path
            alt="Profile"
            className="profile-image"
          />
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <footer>
        <nav class="navbar-social-networks">
          <ul>
            <li>
              <a href=""><Facebook color="#ffffff" strokeWidth={1}/></a>
              
            </li>
            <li>
              <a href=""><Instagram color="#ffffff" strokeWidth={1} /></a>
            </li>
            <li>
              <a href=""><Linkedin color="#ffffff" strokeWidth={1} /></a>
            </li>
          </ul>
        </nav>
        </footer>
      </aside>
    );
  }
  
  export default Sidebar;