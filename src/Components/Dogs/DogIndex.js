import React, {Component} from 'react';

class DogIndex extends Component {
  constructor(){
    super()
    this.state = {
      image: "",
    };
  }

  fetchImage = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await res.json();


      this.setState({image: data.message});
    } catch (error) {
        console.log(error);
    }
  };

  componentDidMount() {
    this.fetchImage();  
  }

  render() {
    return <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
        <img src={this.state.image} alt="Random Dog"/><br></br>
      <button onClick={this.fetchImage}>Get New Dog</button>
      </div>
  }

}

export default DogIndex;