import { useState, useEffect } from "react";

const SearchButton = ({ handelSearchValue }) => {

    let [searchValue, setSearchValue] = useState('')

    const inputHandel = (e) => {
        setSearchValue(e.target.value)

    }

    const handelForm = (e) => {

        e.preventDefault()
        // sending the value from this component to parent components
        handelSearchValue(searchValue)

    }

    // ✅ useEffect ensures parent updates happen *after* render
    useEffect(() => {
        handelSearchValue(searchValue);
    }, [searchValue]);

    return (
        <div className="search-container" >

            <form className="" onSubmit={handelForm}>
                <input className="form-control"  type="text" placeholder="Search here ..." onChange={inputHandel} />

                <button className="btn btn-primary"> search 🔎</button>
            </form>

        </div>
    )

}

export default SearchButton;