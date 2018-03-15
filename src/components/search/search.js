import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from 'react-bootstrap'

let url = `https://www.googleapis.com/books/v1/volumes?q=`;
let name = 'ciencia'

class search extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null
    };
  }

  componentWillMount() {
    this.randomize();
  }

  randomize() {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=harry+potter&callback=handleResponse`).then(data => (data.json()))
    .then(search_data => {
      console.log(search_data);
      const SearchData = search_data;
      /*const SearchData = transformForecast(weather_data);*/
      console.log(SearchData, 'guardando en data');
      /*this.setState({forecastData});*/
    })
      .catch(error => console.log(error))
  }
  /*componentDidMount() {
    this.updateSearch(this.props.search);
  }*/

  /*componentWillReceiveProps(nextProps) {
    if (nextProps.city !== this.props.city) {
      this.setState({
        searchData: null,
      })
      this.updateBook(nextProps.city);
    }
  }*/

  updateSearch = () => {
    const url_search = `ciencia&callback=handleResponse`;
    fetch(url_search).then(data => (data.json()))
    .then(search_data => {
      console.log(search_data);
      const SearchData = search_data;
      /*const SearchData = transformForecast(weather_data);*/
      console.log(SearchData, 'guardando en data');
      /*this.setState({forecastData});*/
    });
  }

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
          <FormControl type="text" placeholder="Search" />
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