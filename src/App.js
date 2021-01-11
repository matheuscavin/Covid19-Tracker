import React from 'react';
import { Cards, Chart, CountryPicker, Footer } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image.png';

class App extends React.Component {
    state = {
      data: {},
      country: '',
    }
    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
        this.setState({data: fetchedData, country: country})

    }
    async componentDidMount() {
        const apiData = await fetchData();
        this.setState({data: apiData})
    }

    render () {
        const { data, country } = this.state;
        return (
            <div>
                <div className={styles.title}><b>COVID-19 TRACKER</b></div>
                <div className={ styles.container }>
                    <Cards data={data}/>
                    <CountryPicker handleCountryChange={this.handleCountryChange}/>
                    <Chart data={data} country={country}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
