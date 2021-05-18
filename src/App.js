import React from 'react';
import Header from './copmonents/Header';
import Main from './copmonents/Main';
import Footer from './copmonents/Footer';
import SelectedBeast from './copmonents/SelectedBeast';
constructor(props){
  super(props)
  this.state={
    
      hornedData:hornedDataApp,
      SelectedBeastContentFromState:'hello from states and props'

  }
}

  changingStateDataFunction=()=>{

    this.setState=(
      {
        SelectedBeastContentFromState:this.state.SelectedBeastContentFromState+"yes i did changing data"
      }
    )
  }


  render(){

    return (
      <>
       < Header />
       < Main />
       <SelectedBeast SelectedBeastContent={this.state.SelectedBeastContentFromState}> </SelectedBeast>

        <Footer />
    </>
  
  )
  
}

export default App;
