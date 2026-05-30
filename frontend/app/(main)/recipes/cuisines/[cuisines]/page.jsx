"use client";

import { useParams } from "next/navigation";
import RecipeGrid from "@/components/RecipeGrid";
import { getMealsByArea } from "@/actions/mealdb.actions";

export default function CuisinesRecipesPage() {
    const params = useParams();
    const cuisine = params.cuisines;

    return (
        <RecipeGrid
            type="cuisine"
            value={cuisine}
            fetchAction={getMealsByArea}
            backLink="/dashboard"
        />
    );
}