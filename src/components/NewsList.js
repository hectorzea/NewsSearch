import React from 'react';
import New from "./New";

const NewsList = ({news}) => {
    return (
        <div className="row">
            {news.map( (n) => (<New key={n.url} newInfo={n}/>))}
        </div>
    );
};

export default NewsList;
