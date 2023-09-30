import React, { useEffect, useState } from 'react';
import img1 from '../2.jpg';
import img2 from '../3.jpg';
import img3 from '../4.jpg';
import '../App.css';
import img4 from '../5.jpg';
import img5 from '../6.jpg';
import img6 from '../1.jpg';
import Navigation from './NavigationAt';
import Footer from './Footer';
import { useParams } from 'react-router-dom';
import '../App.css';

import GoogleMaps from './GoogleMaps';

const ViewHome = () => {
  const { id } = useParams();
  const [latitude, setLatitude] = useState(0.0000);
  const [longitude, setLongitude] = useState(0.0000);
  const [selectedItem, setSelectedItem] = useState(null);

 const  dic = [
    {
      image: img1,
      name:"John Smith",
      tag:["Civil","Criminal"],
      description: 'EXPERIENCED IN HANDLING',
      coordinates:[37.774929,-122.419418],
      rating:4,
      yearsActive:"1990-present",
      casesPending:15,
      casesSolved:100,


    },
    {
      image: img2,
      tag:["Civil","Criminal","Cyber"],
      coordinates:[51.507351,-0.127758],
      description: 'EXPERIENCED IN HANDLING',
      rating:5,
      yearsActive:"1980-present",
      casesPending:4,
      casesSolved:130,
    },
    {
      image: img3,
      tag:["Civil","Legal Advisory"],
      coordinates:[51.507351,-0.127758],
      description: 'EXPERIENCED IN HANDLING',
      rating:4.23,
      yearsActive:"2000-present",
      casesPending:5,
      casesSolved:50,
    },
    {
      image: img4,
      name:"Michael Brown",
      tag:["Civil","Divorce"],
      coordinates:[48.856613,2.352222],
      description: 'EXPERIENCED IN HANDLING',
      rating:3.29,
      yearsActive:"2005-present",
      casesPending:20,
      casesSolved:30,
    },
    {
      image: img5,
      name:"Robert Turner",
      coordinates:[48.856613,2.352222],
      tag:["Civil","Cyber"],
      description: 'EXPERIENCED IN HANDLING',
      rating:5,
      yearsActive:"2004-present",
      casesPending:0,
      casesSolved:35,
    },
    {
      image: img6,
      name:"Robert Turner",
      coordinates:[31.968599,-99.901810],
      tag:["Civil","Legal Advisor"],
      description: 'EXPERIENCED IN HANDLING',
      rating:4,
      yearsActive:"2003-present",
      casesPending:20,
      casesSolved:100,
    },
    {
      image: img2,
      tag:["Criminal"],
      coordinates:[38.907192,77.036873],
      description: 'EXPERIENCED IN HANDLING',
      rating:5,
      yearsActive:"1989-present",
      casesPending:0,
      casesSolved:100,
    },
    {
      image: img3,
      tag:["Civil","Legal Advisory"],
      coordinates:[-33.86882,151.209296],
      description: 'EXPERIENCED IN HANDLING',
      rating:4.5,
      yearsActive:"2012-present",
      casesPending:0,
      casesSolved:10,
    },
    {
      image: img4,
      tag:["legaladvisor"],
      coordinates:[30.04442,31.235712],
      description: 'EXPERIENCED IN HANDLING',
      rating:4.32,
       yearsActive:"2013-present",
      casesPending:5,
      casesSolved:20,
    },
    {
      image: img1,
      tag:["CybCriminal"],
      coordinates:[41.902784,12.496366],
      description: 'EXPERIENCED IN HANDLING',
      rating:4,
      yearsActive:"1990-present",
      casesPending:15,
      casesSolved:100,
    },
    

  ];

  useEffect(() => {
    const item = dic.find((item, index) => index.toString() === id);
    if (item) {
      setSelectedItem(item);
      setLatitude(item.coordinates[0]);
      setLongitude(item.coordinates[1]);
    }
  }, [id]);

  return (
    <>
      <Navigation />
      <div className="container" style={{ minHeight: '85vh' }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-6" style={{width:"400px",height:"500px",marginRight:"70px"}}>
            {selectedItem ? (
              <div className="card">
                <img src={selectedItem.image} className="card-img-top" alt={selectedItem.name} />
                <div className="card-body">
                  <h5 className="card-title">{selectedItem.name}</h5>
                  <p className="card-text">{selectedItem.description}</p>
                  <ul className="list-group">
                    {selectedItem.tag.map((item, index) => (
                      <li className="list-group-item" key={index}>{item}</li>
                    ))}
                  </ul>
                  <p className="card-text">Rating: {selectedItem.rating}</p>
                  <p className="card-text">Cases Solved: {selectedItem.casesSolved}</p>
                  <p className="card-text">Cases Pending: {selectedItem.casesPending}</p>
                  <p className="card-text">Years Active: {selectedItem.yearsActive}</p>
                </div>
              </div>
            ) : (
              <div>No item found for ID: {id}</div>
            )}
          </div>
          <div className="col-md-6">
            <GoogleMaps latitude={latitude} longitude={longitude} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ViewHome;
