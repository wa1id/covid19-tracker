import React, {useState, useEffect} from "react";
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './CountryPicker.module.css'

import {countries} from '../../api'

const CountryPicker = () => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      setFetchedCountries(await countries);
    }

    fetchCountries();
  }, [setFetchedCountries]) //Second parameter makes it so useEffect updates only when you select a new country. Not run endlessly

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
