import React, { Fragment } from 'react';

class StorePicker extends React.Component {
    render() {
        return (
            <form className="store-selector">
                <input type="text" required placeholder="store name" />
            </form>
        )
    }
}

export default StorePicker;