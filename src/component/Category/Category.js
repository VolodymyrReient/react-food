import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getFilteredCategory } from "../../api";

import Preloader from "../Preloader/Preloader";
import MealList from "../MealList/MealList";

function Category() {
    const { goBack } = useHistory();
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);

    return (
        <>
            <button className="btn" onClick={goBack}>
                Go Back
            </button>
            {meals.length === 0 ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export default Category;
