import { Link } from "react-router-dom";

const CoinsTable = ({coinList,convertMoney}) => {
    
    
    return (
        <table className='coins-table'>
        <tbody>
        {
          coinList.map(coin => {
            const { id,name,image,current_price,market_cap,market_cap_rank,ath_change_percentage } = coin;
            return (
              <tr>
                <td className='logo-container'><img alt="coin-logo" 
                style={{
                  width: "50px",
                  height: "50px"
                }} 
                src={image} />
                {name}
                </td>
                <td>{market_cap_rank}</td>
                <td>{convertMoney(current_price)}</td>{
                  ath_change_percentage > 0 ? (
                    <td style={{color : "green"}}>{`${ath_change_percentage.toFixed(1)}%`}</td>
                  ) : (
                    <td style={{color : "red"}}>{`${ath_change_percentage.toFixed(1)}%`}</td>
                  )
                }
                <td>{convertMoney(market_cap)}</td>
                <td>
                  <Link to={`/${id}`}>
                  <button className="button" style={{verticalAlign: "middle"}}><span>See</span></button>
                  </Link>
                </td>
              </tr>
            )
          })
        }
        </tbody>
      </table>
    )
}

export default CoinsTable;