import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './Details.css';
const Details = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // console.log(props.details);
    const { strMeal, strMealThumb, strCategory, strInstructions } = props.details;
    // console.log(strInstructions.slice(0, 20));
    return (
        <>
            <Button className='details-btn' variant="primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faInfoCircle} />Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h2>{strMeal}</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img style={{ width: '200px' }} src={strMealThumb} alt="" />
                    <p>Category: {strCategory}</p>
                    {/* <p>Instruction: {strInstructions.slice(0, 200)}</p> */}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='close-btn' variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Details;
{/* <div className='meal-details'>
            <img style={{ width: '350px' }} src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <p>{strCategory}</p>
            
        </div> */}