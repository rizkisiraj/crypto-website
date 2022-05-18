import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/loader.components";
import './coinDashboard.scss'
import CoinData from "../../components/coin-data/coin-data.component";

const CoinDashboard = () => {
    const parse = require('html-react-parser');
    const [coinData, setCoinData] = useState({});
    const [loader, setLoader] = useState(true);
    const { coinId } = useParams();
    const urlParams = `https://api.coingecko.com/api/v3/coins/${coinId}`
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    useEffect(() => {
        fetch(urlParams)
        .then(response => response.json())
        .then(data => {
            setCoinData(data);
            setLoader(false);
        }
        ).catch(e => console.log(e))
    }, [urlParams])

    const convertMoney = (money) => {
        let dollarUSLocale = Intl.NumberFormat('en-US');
        money = dollarUSLocale.format(money);
        return `$${money}`;
      }

    return (
        <div className="dashboard-container">
            { loader ? 
                <Loader />
             : (
                 <Fragment>
                    <div className="dashboard-name"><h1>{coinData.name}</h1></div>
                    <div className="dashboard-data">
                        <CoinData className='' title='Rank' text={coinData.market_cap_rank} />
                        <CoinData className='' title='Current Price' text={convertMoney(coinData.market_data.current_price.usd)} />
                        <CoinData className='big' title='Market Cap' text={convertMoney(coinData.market_data.market_cap.usd)} />
                        <CoinData className='time' title='24h' text={`${coinData.market_data.price_change_percentage_24h.toFixed(1)}%`} />
                        <CoinData className='time' title='7d' text={`${coinData.market_data.price_change_percentage_7d.toFixed(1)}%`} />
                        <CoinData className='time' title='14d' text={`${coinData.market_data.price_change_percentage_14d.toFixed(1)}%`} />
                        <CoinData className='time' title='30d' text={`${coinData.market_data.price_change_percentage_30d.toFixed(1)}%`} />
                        <CoinData className='about' title='About' text={parse(coinData.description.en)} /> 
                    </div>
                </Fragment >
            )
            }
        </div>
    )
}

export default CoinDashboard;