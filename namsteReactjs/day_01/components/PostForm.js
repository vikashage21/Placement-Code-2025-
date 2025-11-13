import React, { useContext, useState } from "react";
import { DataContext } from "../app";
import { useNavigate } from "react-router-dom";
function RecipeForm() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        ingredients: "",
        instructions: "",
        prepTimeMinutes: "",
        cookTimeMinutes: "",
        servings: "",
        difficulty: "",
        cuisine: "",
        caloriesPerServing: "",
        tags: "",
        userId: "",
        image: "",
        rating: "",
        reviewCount: "",
        mealType: "",
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Convert comma-separated fields into arrays
        const formattedData = {
            ...formData,
            ingredients: formData.ingredients.split(",").map((i) => i.trim()),
            instructions: formData.instructions.split(".").map((i) => i.trim()).filter(Boolean),
            tags: formData.tags.split(",").map((i) => i.trim()),
            mealType: formData.mealType.split(",").map((i) => i.trim()),
        };

        fetch('https://dummyjson.com/recipes/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                formattedData
            })
        })
            .then(res => res.json())
            .then(console.log);

    };

    return (
        <div className="container mt-5 mb-5">

            <h2 className="text-center mb-4">Add a New Recipe</h2>
            <form method="post" action='https://dummyjson.com/recipes/add' onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
                {/* Name */}
                <div className="mb-3">
                    <label className="form-label">Recipe Name</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Ingredients */}
                <div className="mb-3">
                    <label className="form-label">Ingredients (comma-separated)</label>
                    <textarea
                        name="ingredients"
                        className="form-control"
                        rows="3"
                        value={formData.ingredients}
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Instructions */}
                <div className="mb-3">
                    <label className="form-label">Instructions (separate by full stops)</label>
                    <textarea
                        name="instructions"
                        className="form-control"
                        rows="4"
                        value={formData.instructions}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Prep Time (minutes)</label>
                        <input
                            type="number"
                            name="prepTimeMinutes"
                            className="form-control"
                            value={formData.prepTimeMinutes}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="form-label">Cook Time (minutes)</label>
                        <input
                            type="number"
                            name="cookTimeMinutes"
                            className="form-control"
                            value={formData.cookTimeMinutes}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Other Info */}
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Servings</label>
                        <input
                            type="number"
                            name="servings"
                            className="form-control"
                            value={formData.servings}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Difficulty</label>
                        <input
                            type="text"
                            name="difficulty"
                            className="form-control"
                            value={formData.difficulty}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Cuisine</label>
                        <input
                            type="text"
                            name="cuisine"
                            className="form-control"
                            value={formData.cuisine}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Calories, Rating, Review Count */}
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Calories per Serving</label>
                        <input
                            type="number"
                            name="caloriesPerServing"
                            className="form-control"
                            value={formData.caloriesPerServing}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            step="0.1"
                            className="form-control"
                            value={formData.rating}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Review Count</label>
                        <input
                            type="number"
                            name="reviewCount"
                            className="form-control"
                            value={formData.reviewCount}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Image, Tags, Meal Type */}
                <div className="mb-3">
                    <label className="form-label">Image URL</label>
                    <input
                        type="text"
                        name="image"
                        className="form-control"
                        value={formData.image}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Tags (comma-separated)</label>
                    <input
                        type="text"
                        name="tags"
                        className="form-control"
                        value={formData.tags}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Meal Type (comma-separated)</label>
                    <input
                        type="text"
                        name="mealType"
                        className="form-control"
                        value={formData.mealType}
                        onChange={handleChange}
                    />
                </div>

                {/* Submit Button */}
                <button onClick={() => navigate('/')} type="submit" className="btn btn-primary w-100 mt-3">
                    Submit Recipe
                </button>
            </form>
        </div>
    );
}

export default RecipeForm;
