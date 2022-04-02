import React, {useState} from "react";

const SearchResult = () => {
    const [result, setResult] = useState([]);
    return (<>
        <div className="bg-gray-200 my-2 mx-4 p-3">
            <h2>Product Name</h2>
            <h3>Price</h3>
            <p>Vendor name</p>
        </div>
    </>)
}

export default SearchResult;