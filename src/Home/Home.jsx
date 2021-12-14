import React, { useEffect } from 'react'
import { executeQuoteApi, getARandomColor } from '../Redux/QuotesSlice';
import { useDispatch, useSelector } from 'react-redux';
import QuoteBox from '../QuoteBox/QuoteBox';
import './Home.css'
function Home() {
    const quoteOfday = useSelector( state => state.quotes.quoteOfDay)
    const color = useSelector( state => state.quotes.color)
    const randomNumber = useSelector( state => state.quotes.randomNumber)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(executeQuoteApi("https://type.fit/api/quotes"))
      dispatch(getARandomColor())
    }, []);

    const renderbasedOnCondition = () => {
        console.log("Before if quoteOfday " + quoteOfday)
        console.log("Before if color " + color)
        if(quoteOfday === ""){
          console.log("loading quoteOfday")
        }
        else if(color === ""){
            console.log("loading color")
        }
        else{
          return <QuoteBox text={quoteOfday[randomNumber].text} author={quoteOfday[randomNumber].author}/>
        }
    }

    return (
        <div className="home" style={{backgroundColor: color}}>
             {
              renderbasedOnCondition()
            }
        </div>
    )
}

export default Home
