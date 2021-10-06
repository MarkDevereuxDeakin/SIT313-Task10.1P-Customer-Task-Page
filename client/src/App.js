import React from 'react'
//import { Input, Menu, Segment } from 'semantic-ui-react'
import NavMenu from './NavMenu';
import Header from './Header';
//import ExpertCards from './ExpertCards';
import BottomNavBar from './BottomNavBar'
import CardList from './CardList';

//Import Components Here


//Function to export components
function App(){    
    //Return components in the div element
    return(
    <div>
        <Header />
        <NavMenu />
        <CardList />               
        <BottomNavBar />
      </div>
    )
}

export default App;