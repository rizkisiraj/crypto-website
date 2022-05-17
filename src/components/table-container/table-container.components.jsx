import { useState, useEffect } from "react";
import CoinsTable from "../coins-table/coins-table.components";
import Search from "../search/search.components";
import Loader from "../loader/loader.components";

const TableContainer = () => {
    const [coins, setCoins] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [coinList, setCoinList] = useState([]);
    const [loader, setLoader] = useState(true);
  
  
    useEffect(() => {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(response => response.json())
      .then(data => {
        setCoins(data)
        setLoader(false)
      })
    },[])
  
    useEffect(() => {
      const filteredCoins = coins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchField.toLowerCase());
      });
  
      setCoinList(filteredCoins);
  
    },[coins,searchField])
  
    const onChangeHandler = (e) => {
      const searchFieldString = e.target.value;
      setSearchField(searchFieldString);
    }
  
    const convertMoney = (money) => {
      let dollarUSLocale = Intl.NumberFormat('en-US');
      money = dollarUSLocale.format(money);
      return `$${money}`;
    }

    return (
    <main className='table-container'>
      <Search searchField={searchField} onChangeHandler={onChangeHandler} />
      {
        loader ? <Loader /> : <CoinsTable coinList={coinList} convertMoney={convertMoney} />
      }
    </main >
    )
}

export default TableContainer;
