import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader/loader.components";
import './coinDashboard.scss'

const CoinDashboard = () => {
    const parse = require('html-react-parser');
    const [coinData, setCoinData] = useState({});
    const [loader, setLoader] = useState(true);
    const { coinId } = useParams();
    const urlParams = `https://api.coingecko.com/api/v3/coins/${coinId}`
    
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
                        <div className="data">
                            <span className="name">Rank</span>
                            <div className="number">{coinData.market_cap_rank}</div>
                        </div>
                        <div className="data">
                            <span className="name">Current Price</span>
                            <div className="number">{convertMoney(coinData.market_data.current_price.usd)}</div>
                        </div>
                        <div className="data big">
                            <span className="name">Market Cap</span>
                            <div className="number">{convertMoney(coinData.market_data.market_cap.usd)}</div>
                        </div>
                        <div className="data">
                            <span className="name">24h</span>
                            <div className="number">{coinData.market_data.price_change_percentage_24h.toFixed(2)}</div>
                        </div>
                        <div className="data">
                            <span className="name">7d</span>
                            <div className="number">{coinData.market_data.price_change_percentage_7d.toFixed(2)}</div>
                        </div>
                        <div className="data">
                            <span className="name">14d</span>
                            <div className="number">{coinData.market_data.price_change_percentage_14d.toFixed(2)}</div>
                        </div>
                        <div className="data">
                            <span className="name">30d</span>
                            <div className="number">{coinData.market_data.price_change_percentage_30d.toFixed(2)}</div>
                        </div>
                        <div className="data about">
                            <span className="name">About</span>
                            <div className="number">{parse(coinData.description.en)}</div>
                        </div>
                    </div>
                </Fragment >
            )
            }
        </div>
    )
}

export default CoinDashboard;