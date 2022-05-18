const CoinData = ({className,title,text}) => {

    return className === 'time' ? (text.charAt(0) === '-' ? (
        <div className={`data ${className}`}>
        <span className="name">{title}</span>
        <div style={{color : "red"}} className="number">{text}</div>
    </div>
    ) : (
        <div className={`data ${className}`}>
        <span className="name">{title}</span>
        <div style={{color : "#00FF00"}} className="number">{`+${text}`}</div>
    </div>
    )) : (
        <div className={`data ${className}`}>
        <span className="name">{title}</span>
        <div className="number">{text}</div>
    </div>
    )
}

export default CoinData;