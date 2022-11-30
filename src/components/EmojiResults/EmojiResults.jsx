import React from "react";
import emojis from "../../emojiList.json";
import EmojiRow from "../EmojiRow/EmojiRow";

const maxItems = 20;

class EmojiResults extends React.Component {
    render() {
        const { searchField } = this.props;
        return (
            <div>
                {emojis
                    .filter(item => item.title.toLowerCase().includes(searchField.toLowerCase()))
                    .slice(0, maxItems)
                    .map((item, index) => <EmojiRow key={item.title} emoji={item} searchField={searchField} />)}
                {/* <EmojiRow emoji={emojis[6]} searchField={searchField} /> */}
            </div>
        )
    }
}

export default EmojiResults;