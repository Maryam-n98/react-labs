
import React from 'react';
import HornedData from './HornedData.json';
import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';
import HornedBeast from './HornedBeast';


class Main extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            filterData:HornedData,
        }
    }



    prop1Function=(selectedData,selectedData2,selectedData3)=>{
        this.props.functionProp(selectedData,selectedData2,selectedData3);
        
        
    }
    
    dataChange=(event)=>{
        let hornes=event.target.value; 

        let arr =this.props.hornedDataMain.filter ( n=> {
            if (hornes=='All'){
                return n
            }else if (hornes == n.hornes){
                return n

            }
        });
    }
   
    render(){
        return(
           <>
                     <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Hornes Number</Form.Label>
                        <Form.Control as="select" name="hornes" onChange={this.dataChange} >
                            <option value='All'>All</option>
                            <option value='1' >1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='100'>wow</option>
                            </Form.Control>
                    </Form.Group>

                
                </Form>  
         
                <CardColumns>
                        {
                            this.state.filterData.map(item => {
                                return (
                                    <>

                                        <HornedBeast
                                            title={item.title}
                                            image_url={item.image_url}
                                            description={item.description}
                                            prop2Function={() => this.prop1Function(item.title, item.image_url, item.description)} />



                                    </>
                                )
                            })
                        }
                    </CardColumns>
            </>

        )
    }
}

export default Main;