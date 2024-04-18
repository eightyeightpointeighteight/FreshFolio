import "./Card.css";





export default function Card (props) {
    return (<div className="card">
          
                 <img className="cardimg" src={props.image}></img>
               
                <div className="cardData">
                    <p>{props.title}</p>
                     <small>{props.description}</small>
                </div>
            </div>
    );
};

