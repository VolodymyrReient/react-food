import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";

import { getAllCategories } from "../../api";
import Preloader from "../Preloader/Preloader";
import CategoryList from "../CategoryList/CategoryList";
import Search from "../Search/Search";

function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filtredCatalog, setFiltered] = useState([]);

    const { pathname, search } = useLocation();
    const { push } = useHistory();

    const handleSearch = (str) => {
        setFiltered(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        push({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFiltered(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split("=")[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filtredCatalog} />
            )}
        </>
    );
}

export default Home;
