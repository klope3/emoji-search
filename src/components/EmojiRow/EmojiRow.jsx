import React from "react";
import emojis from "../../emojiList.json";
import "./EmojiRow.css"

class EmojiRow extends React.Component {
    handleClick = event => {
        const clickedEmoji = emojis.find(item => item.title === event.target.dataset.emojititle);
        navigator.clipboard.writeText(clickedEmoji.symbol);
    }

    render() {
        const { emoji, searchField } = this.props;
        const emojiTitleLower = emoji.title.toLowerCase();
        const searchFieldLower = searchField.toLowerCase();
        const regex = new RegExp(`(${searchFieldLower})`);
        const splitTitle = emojiTitleLower.split(regex);
        const title = splitTitle.map(item => item === searchFieldLower ? <span className="emoji-title-bold">{item}</span> : <span>{item}</span>);
        return (
            <div className="emoji-row" data-emojititle={emoji.title} onClick={this.handleClick}>
                {emoji.symbol}
                <span className="emoji-title">{title}</span>
            </div>
        )
    }
}

export default EmojiRow;