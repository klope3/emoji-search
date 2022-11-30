import React from "react";
import EmojiResults from "../EmojiResults/EmojiResults";
import EmojiRow from "../EmojiRow/EmojiRow";
import Header from "../Header/Header";
import SearchInput from "../SearchInput/SearchInput";

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = { searchField: "" }
    }

    searchFieldChange = event => this.setState({ searchField: event.target.value })

    render() {
        return (
            <div>
                <Header />
                <SearchInput text={this.state.searchField} changeFieldFunction={this.searchFieldChange} />
                <EmojiResults searchField={this.state.searchField} />
            </div>
        )
    }
}

export default MainPage;