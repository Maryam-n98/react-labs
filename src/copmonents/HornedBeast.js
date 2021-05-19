import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      numberOfVote: 0,
    }
  }

  increaseVotes = () => {
    this.setState({
      numberOfVote: this.state.numberOfVote + 1,
    })
  }
  prop3Function=(para1,para2,para3)=>{
    this.props.prop2Function(para1,para2,para3);
    
}
  render() {
    return (
      <div className='honers'>

        <Card style={{ width: '18rem' }}>
          <Card.Img onClick={()=>this.prop3Function(555,77,88)} src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              💜 favorited : {this.state.numberOfVote}
            </Card.Text>
          </Card.Body>
          <Button onClick={this.increaseVotes} variant="primary">VOTE </Button>
        </Card>
      </div>
    )
  }
}
export default HornedBeast;