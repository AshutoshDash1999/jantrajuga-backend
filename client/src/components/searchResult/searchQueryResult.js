import React, { useState } from "react";

const SearchQueryResult = ({search}) => {
    const [queryInput, setQueryInput] = useState("");
    const [queryResultList, setQueryResultList] = useState([]);

    const data = localStorage.getItem('Name');

    console.log(data);
    // console.log(search);
    return(<>
        
    </>)
}

export default SearchQueryResult;