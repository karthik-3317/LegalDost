import React from 'react';
import './Home.css'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Home({ list }) {

    // const callme=()=>{
    //   {console.log("Hi")}
    //   const ui = <div
    //   className="modal show"
    //   style={{ display: 'block', position: 'initial' }}
    // >
    //   <Modal.Dialog>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal title</Modal.Title>
    //     </Modal.Header>

    //     <Modal.Body>
    //       <p>Modal body text goes here.</p>
    //     </Modal.Body>

    //     <Modal.Footer>
    //       <Button variant="secondary">Close</Button>
    //       <Button variant="primary">Save changes</Button>
    //     </Modal.Footer>
    //   </Modal.Dialog>
    // </div>
    // }

    const navigate = useNavigate();
  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container-xl">
        <div className="row row-cols-sm-1 row-cols-sm-2 row-cols-sm-3 g-5 ">
          { list.length==0 ?<div>No Results Found</div> : list.map((item, index) => (
            <div key={index} className="col">
              <div className="card  card-sm">
                <img src={item.image} className="card-img-top" style={{ width: '100%', height: '250px' }} alt="" />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                     
                      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={()=>navigate('/viewhome/'+index)}>
                        View
                      </button>
                    {/* </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
