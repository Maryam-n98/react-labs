
import React from 'react';
import HornedBeast from './HornedBeast';
// import HornedData from './HornedData.json';



class Main extends React.Component{
    

    prop1Function=(selectedData,selectedData2,selectedData3)=>{
        this.props.functionProp(selectedData,selectedData2,selectedData3);
        
        
    }
    
   
    render(){
        return(
           <>
           
           {
               this.props.hornedDataMain.map(item=>{
                   return(
                       <>
                       <HornedBeast
                       title={item.title}
                       image_url={item.image_url}
                       description={item.description}
                       prop2Function={()=>this.prop1Function(item.title,item.image_url,item.description)}
                    //    selectedData={this}
                       
                       />
                       {/* <button onClick={this.prop1Function}>Voteee</button> */}
                       
                      
                       </>
                   )
               })
           }
           {/* <p>{this.props.propName}</p> */}
           
           </>  
          
        )
    }
}

export default Main;