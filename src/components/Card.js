import React from 'react';
import { Link } from 'react-router-dom';

export default function Card() {
  return (
    <div>
      <div className="card-container"> {/* Add custom class here */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="#" className="btn btn-primary">Go somewhere</Link>
            <div className="container w-100"> {/* Correct className */}
              <select className='m-2 bg-success rounded'>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  );
                })}
              </select>
              <select className='m-2 bg-success rounded'>
                <option value="half">HALF</option>
                <option value="full">FULL</option>
                </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}