import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ChatGPT from './ChatGPT';
import './sidebar.css';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="sidebar-button" >
        Talk to me
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Customer support</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ChatGPT />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Sidebar;