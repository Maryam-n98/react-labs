import Header from './copmonents/Header';
import Main from './copmonents/Main';
import Footer from './copmonents/Footer';
import React from 'react';
import hornedDataApp from './copmonents/HornedData.json';
import SelectedBeast from './copmonents/SelectedBeast';
// import HornedBeast from './copmonents/HornedBeast';


class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

      hornedData: hornedDataApp,
      SelectedBeastContentFromState: '',
      SelectedBeastContentFromState2: '',
      SelectedBeastContentFromState3: '',
      runModalCheck: 0,
      show: false




    }
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  // modalShowFunction=()=>{

  // }


  changingStateDataFunction = (selectedData, selectedData2, selectedData3) => {

    //  let newArr= HornedBeasts.find(element=> element.horns===2)

    this.setState(
      {
        SelectedBeastContentFromState: selectedData,
        SelectedBeastContentFromState2: selectedData2,
        SelectedBeastContentFromState3: selectedData3,
        runModalCheck: 1,
        show: true
      }
    )
    // this.modalShowFunction()


  }




  render() {
    return (
      <>
        <Header></Header>
        <Main hornedDataMain={this.state.hornedData} functionProp={this.changingStateDataFunction}></Main>
        <SelectedBeast SelectedBeastContent={this.state.SelectedBeastContentFromState} SelectedBeastContent2={this.state.SelectedBeastContentFromState2} SelectedBeastContent3={this.state.SelectedBeastContentFromState3} modalShowFunction={this.modalShowFunction} modalShowFunction={this.state.show} handleClose={this.handleClose}> </SelectedBeast>
        <Footer></Footer>
      </>

    )
  }

}

export default App;
