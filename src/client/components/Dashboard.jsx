import React  from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="btnwrapper">
      <div> 
      <Link to="/ParentLanding">
      <button>
        Parent Dashboard
      </button>
      </Link>
      <Link to="/LetterToSanta">
      <button>
        Kid's Dashboard
      </button>
      </Link>
      </div>
      <div className="wrapper">
        <div className="face">
         <div className="hat-wrapper">
            <div className="hat">
              <div className="hat-top">
            </div>
          </div>
        <div className="hat-brim">
      </div>
    </div>
    <div className="eyes">
      <div className="eye left-eye">
      </div>
      <div className="eye right-eye">
      </div>
          </div>
          <div className="mouth">
           </div>
            <div className="beard">
                <div className="mustache">
                <div className="mustache-left">
                </div>
              <div className="mustache-right">
             </div>
           </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Homepage;