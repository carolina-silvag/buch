import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap'

let url = `https://www.googleapis.com/books/v1/volumes?q=`;
let name = 'literatura'
class search extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      text: '',
      searchData: null
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.randomize();
  }

  randomize() {
    if (!this.state.text.length) {
      fetch(`${url}${name}`, {
        method: 'get'
      })
      .then(data => data.json())
      .then(search_data => {
        console.log(search_data);
        const SearchData = search_data;

        this.setState({ searchData: search_data });
      })
        .catch(error => console.log(error))

    } else {

      fetch(`${url}${this.state.text}`, {
        method: 'get'
      })
      .then(data => data.json())
      .then(search_data => {
        console.log(search_data);
        const searchData = search_data;
        
        this.setState({ searchData: search_data });
      })
        .catch(error => console.log(error))

    }
  }

  handleSearch(event) {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(prevState => ({
      text: ''
    }));
    this.randomize();
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  /*componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({
        searchData: null,
      })
      this.updateBook(nextProps.city);
    }
  }*/

  /*updateSearch = () => {
    const url_search = `${url}${name}`;
    fetch(url_search).then(data => (data.json()))
    .then(search_data => {
      console.log(search_data);
      const SearchData = search_data;
      const SearchData = transformForecast(weather_data);
 
      this.setState({forecastData});
    });
  }*/

  /*renderForcastItemDays(forecastData) {
    return forecastData.map(forecast => (
      <ForecastItem key={`${forecast.weekDay}${forecast.hour}`} weekDay = {forecast.weekDay} hour = {forecast.hour} data = {forecast.data}>
      </ForecastItem>
    ))
    // return days.map(day => (<ForecastItem key = {day} weekDay = {day} hour = {10} data = {data}></ForecastItem>))
      // <ForecastItem weekDay={'Miércoles'}>
      // </ForecastItem>
  };

  renderProgress = () => {
    return (<h3> Cargando pronóstico extendido... </h3>)
  }

  render() {
    const {city} = this.props;
    const {forecastData} = this.state;
    return(
    <div>
      <h2 className="forecastTitle">Pronóstico extendido para {city}</h2>
      {forecastData !== null ? this.renderForcastItemDays(forecastData) : this.renderProgress()}
    </div>
    );
  }*/

  render() {
    return(
      <div>
        <FormGroup>
          <FormControl type="text" placeholder="Search" onChange={this.handleChange} data-categoria="literatura" value={this.state.text} />
        </FormGroup>{''}
        <Button type="submit" onClick={this.handleSearch}>Buscar</Button>
      </div>
      )
    }
  }

/*ForecastExtended.propTypes = {
  city: PropTypes.string.isRequired,
}*/


export default search;