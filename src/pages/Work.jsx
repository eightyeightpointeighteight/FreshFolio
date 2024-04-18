
import Card from '../components/Card.jsx';
import {Link,Routes,Route} from 'react-router-dom';
import '../App.css';





function Work () {
    return (
    <div className="cases">
        <div className="sectionL">
            <h2>Case Studies</h2>
            <p>An overview of Process and Deliverables</p>
        </div>
            <div className="cardlayout">
           
            <Link to='/work/satlab'>
                <Card 
                    image="../images/satlabScreen.svg" 
                    title="DLT Education and Avocacy" 
                    description="Brand - Website - Assets"
                    />
           </Link>
        <Routes>
            <Route path="/satlab"/>
        </Routes>

        <Link to='/work/Kcd'>   
                <Card
                   image="../images/KcdScreen.png" 
                   title="Social Media Management" 
                   description="Brand - Website - Assets" />
            </Link>
        <Routes>
            <Route path="/kcd"/>
        </Routes>

        <Link to='/work/Drop'>   
                <Card
                   image="../images/DropScreen.png" 
                   title="NFT Auction House" 
                   description="Brand - Website - Assets" />
            </Link>
        <Routes>
            <Route path="/drop"/>
        </Routes>

        <Link to='/work/Bct'>   
                <Card
                   image="../images/BctScreen.png" 
                   title="eLearning Platform" 
                   description="Brand-Web Application-Assets" />
            </Link>
        <Routes>
            <Route path="/bct"/>
        </Routes>

        <Link to='/work/Welearn'>   
                <Card
                   image="../images/welearnScreen.png" 
                   title="eLearning platforn" 
                   description="Brand - Web Application - Assets" />
            </Link>
        <Routes>
            <Route path="/welearn"/>
        </Routes>

        <Link to='/work/Cpd'>   
                <Card
                   image="../images/v1CPDScreen.png" 
                   title="CPD Evaluation" 
                   description="Web Application" />
            </Link>
        <Routes>
            <Route path="/cpd"/>
        </Routes>
          
              
            </div>
    </div>
      
    );
}

export default Work;