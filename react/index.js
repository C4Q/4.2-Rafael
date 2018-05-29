const React = require("react");
const ReactDom = require("react-dom");
const axios = require("axios");

const styles = {
  img: {
    height: "19em"
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      breedArray: [],
      imgURL: "https://dog.ceo/api/breeds/image/random",
      specificBreeds:""
    };
  }

  handleBreeding = e => {
    this.setState({
      breeds: e.target.value,
      specificBreeds: `https://dog.ceo/api/breed/${e.target.value}/images/random`
    });
  };



  getRandomImage = () => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then(response => {
        this.setState({
          imgURL: response.data.message
        });
      })
      .catch(err => {
        console.log("error fetching image");
      });
  };



  getImage = () => {
    axios
      .get(this.state.specificBreeds)
      .then(response => {
        this.setState({
          imgURL: response.data.message
        });
      })
      .catch(err => {
        console.log("error fetching image");
      });
  };


  getlist = () => {
    axios
      .get("https://dog.ceo/api/breeds/list")
      .then(response => {
        this.setState({
          breedArray: response.data.message
        });
      })
      .catch(err => {
        console.log("error fetching image");
      });
  };

  componentDidMount() {
    this.getRandomImage();
  }

  componentDidMount() {
    this.getlist();
  }

  render() {
    const { imgURL } = this.state;
    const { breedArray } = this.state;
  console.log(breedArray)
    return (
      <div>
        
      <img style={styles.img} alt="" src={imgURL} /> 
        <div id="dogbreeds">
          <h1> Select Your Breed </h1>
          
        <select onChange={this.handleBreeding}>
        
            {breedArray.map(el =>
            <option value={el}> {el} </option>
            )}
            
          </select>

        <button onClick={this.getImage}> Submit </button>
        <button onClick={this.getRandomImage}> Random Puppy </button>
        </div>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
