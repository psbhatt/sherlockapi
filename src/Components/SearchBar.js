import React, {Component} from 'react'

const centering = {
    // display: 'flex',
    color: 'darkseagreen',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // paddingBottom: '0px'
};

const round = {
    width: '70%',
    borderRadius: '40px',
    border: '1px #000 solid',
    padding: '20px 10px 20px 25px',
    // position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '5',
    // paddingRight: '50px'
}

const submit = {
    marginTop: '40px',
    borderRadius: '40px',
    border: 'none',
    padding: '20px 10px 20px 25px',
    // textAlign: 'center',
    // background: 'url(search-icons-283914.png)'
    marginLeft: '-50px',
    // outline: 'none',
    // paddingTop: '10px',
    width: '50px',
    height: '50px',
    backgroundImage: 'url("search-icons-283914.png")',
    backgroundSize: '125%',
    backgroundPosition: 'center'
}

const font = {
    fontSize: '30px',
    marginTop: '40px'
}

const results = {
    width: '400px',
    height: '600px',
    outlineColor: 'darkseagreen',
    outlineWidth: '3px',
    outlineStyle: 'solid',
    borderRadius: '20px',
    marginLeft: '85px',
    marginTop: '50px',
    textAlign: 'center',
    overflowY: 'auto',
    display: 'inline-block',
    wordBreak: 'break-all',
    // zIndex: 1,
    paddingTop: '10px'
}


class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results: null,
        }
    }

    download(filename, text) {
        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    saveSearch = () => {
        // this.download("input.json", input)
        let search = this.state.value
        search = search.split(",")

        // here is where we would call the python code to get sherlock results, then switch states to show those results

        this.setState({
                results: search.map((user) => <div style={results}>
                    {user}
                <ul>
                    <li>testing</li>
                    <li>testing</li>
                </ul>
                </div>)
            }
        )





    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }


    render() {
        return (
            <>
                <div className={"search"} style={centering}>
                    <br/><br/><br/>
                    <label htmlFor="search" style={font}>Enter username(csv for multiple entries):  </label> <br />
                    <input type="text" id="search" style={round} onChange={this.handleChange}/>
                    <button onClick={this.saveSearch} style={submit} ></button>
                </div>
                {this.state.results}
            </>
        )
    }
}




export default SearchBar