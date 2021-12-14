import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { executeQuoteApi, getARandomColor } from '../Redux/QuotesSlice'
import './QuoteBox.css'
function QuoteBox(props) {
    const color = useSelector( state => state.quotes.color)
    const dispatch = useDispatch()
    console.log("In quote box = "  +color)
    return (
        <div className="quoteBox">
            {/* <div className="quoteHeading">{props.title}</div> */}
            <div className="quoteText" style={{color: color}}>""{props.text}</div>
            <div className="quoteAuthor" style={{color: color}}>- {props.author}</div>
            <div className="actionButtons">
                <button style={{backgroundColor: color}} onClick={ () => dispatch(getARandomColor())}>Change color</button>
                <button style={{backgroundColor: color}} onClick={ () => dispatch(executeQuoteApi("https://type.fit/api/quotes"))}>Change quote</button>
            </div>
        </div>
    )
}

export default QuoteBox
