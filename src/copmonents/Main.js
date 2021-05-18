
import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from './HornedData.json';
class Main extends React.Component {
    prop1Function=()=>{
        this.props.functionProp();
    }
    
    render() {
        return (
            <>
                {HornedData.map(item => {
                    return (
                        <HornedBeast
                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description}
                            prop2Function={this.prop1Function}

                        />
                    )
                })
                }
            </>
        )
    }
}

export default Main;