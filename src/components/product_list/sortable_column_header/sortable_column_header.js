import React from 'react';
import "./Sortable_colum_header.css";

const SortableColumnHeader = (props) => {
    return (
        <th>
            {props.column}
            <button className="SortableColumnHeader_current">&#x25b2;</button>
            <button>&#x25bc;</button>
        </th>
    )
}

export default SortableColumnHeader;