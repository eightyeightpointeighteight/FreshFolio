import '../App.css';

import Cta from '../components/Cta';

function Satlab () {
    return (
        <div className="work">
            <div className="sectionL">
            <h2>satlab</h2>
               
                <h3>Brand - Website - Assets</h3>
                <p>Distributed Ledger Technology Education and Advocacy</p>
                <p>Start-up 2020-2020,bit more about it.</p>
                <br />
                <h3>Brand Guidelines</h3>
                <p>Overview of Ident, Colours and Typography. Complete system and Asset sharing managed.</p>
              
                <img src="../images/satlabBrand.svg"/>
                <br />
                <h3>Ident Process</h3>
                <p>Decision by refinement using variation matrix. Themes relating to 'Nodes', 'Merkle Trees' and 'Blocks' across iterations.  </p>
                <img src="../images/satlabIdentProcess.svg"/>
                <br />
                <h3>User Journeys</h3>
                <p>Site traffic presented with single sign-up CTA but multiple routes to same target.</p>
                <img src="../images/satlabJourneys.svg"/>
                <img src="../images/signupCTA.svg"/>
              
                <br />


                <h3>Site Structure</h3>
                <p>System structure showing user - Guest, Member and Admin. Design structure constraint of Framework and UI library.</p>
                <img src="../images/satlabActiveflow.svg"/>

             
                <h3>Analysis and Iterations</h3>
                <img src="../images/satlabActiveflow.svg"/>

                <h3>Assets</h3>

                <h3>Learning</h3>
            </div> 
     
               
               

            <div className="CTA"  >
                <p>Back to case studies</p>
            <Cta name="Back" /> 
           </div>
        </div>   
          
    );
}

export default Satlab;