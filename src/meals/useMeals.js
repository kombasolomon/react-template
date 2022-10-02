import { useEffect, useState } from "react";

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rawMeals, setRawMeals] = useState([]);
  useEffect(() => {
    const loadMeals = async () => {
      const response = await fetch("/meals");
      console.log(response);
      const rawMealResponse = await response.json();
      setRawMeals(rawMealResponse);
      setIsLoading(false);
    };
    loadMeals();
  }, []);
  return {
    isLoading,
    meals: rawMeals.map((rawMeal) => ({
      ...rawMeal,
      plannedDate: new Date(rawMeal.plannedDate),
    })),
    setRawMeals: setRawMeals,
  };
};
