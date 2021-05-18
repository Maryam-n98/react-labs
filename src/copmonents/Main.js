
import React from 'react';
import HornedBeast from './HornedBeast';
import HornedData from './HornedData.json';
class Main extends React.Component {
    render() {
        return (
            <>
                {HornedData.map(item => {
                    return (
                        <HornedBeast
                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description}
                        />
                    )
                })
                }
            </>
        )
    }
}

export default Main;