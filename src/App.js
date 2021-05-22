import React from 'react';
import Header from './copmonents/Header';
import Main from './copmonents/Main';
import Footer from './copmonents/Footer';
import hornedDataApp from './copmonents/HornedData.json';
import SelectedBeast from './copmonents/SelectedBeast';
// import HornedBeast from './copmonents/HornedBeast';


class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      
        hornedData:hornedDataApp,
        SelectedBeastContentFromState: '',
        SelectedBeastContentFromState2: '',
        SelectedBeastContentFromState3: '',
        runModalCheck:0



    }
}
// modalShowFunction=()=>{
         
// }
     

    changingStateDataFunction=(selectedData,selectedData2,selectedData3)=>{

    //  let newArr= HornedBeasts.find(element=> element.horns===2)

      this.setState(
        {
          SelectedBeastContentFromState: selectedData,
          SelectedBeastContentFromState2:selectedData2,
          SelectedBeastContentFromState3:selectedData3,
          runModalCheck:1
        }
      )
      // this.modalShowFunction()
      

    }


 

  render(){
    return (
      <>
         <Header></Header>
         <Main hornedDataMain={this.state.hornedData} functionProp={this.changingStateDataFunction}></Main>
         <SelectedBeast SelectedBeastContent={this.state.SelectedBeastContentFromState} SelectedBeastContent2={this.state.SelectedBeastContentFromState2} SelectedBeastContent3={this.state.SelectedBeastContentFromState3} modalShowFunction={this.modalShowFunction}> </SelectedBeast>
         <Footer></Footer>
      </>
    
    )
    }
 
}

export default App;
