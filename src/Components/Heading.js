import React, {Component} from 'react'

const bigger = {
    color: 'darkseagreen',
    backgroundColor: 'darkslategrey',
    fontSize: '50px',
    paddingTop: '1px',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'Trebuchet MS, sans-serif',
    WebkitTextStroke: '1px',
    WebkitTextStrokeColor: 'grey',

    backgroundImage: 'url("sherlock logo.png")',
    paddingBottom: '180px'

}
// const image = {
//     imageSizes: '200%'
// }

function Heading(){
    return(
        <div style={bigger}>
        <h1 >Sherlock</h1>
        {/*<img src={process.env.PUBLIC_URL + "sherlock logo.png"} alt="sherlock" className="center" height={250}/>*/}
        </div>
    )
}

export default Heading