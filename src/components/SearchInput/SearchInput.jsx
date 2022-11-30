import React from "react";

class SearchInput extends React.Component {
    render() {
        const { text, changeFieldFunction } = this.props;
        return (
            <div>
                <input type="text" value={text} onChange={changeFieldFunction} />
            </div>
        )
    }
}

export default SearchInput;