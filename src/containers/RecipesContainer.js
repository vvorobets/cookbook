import React from "react";
import RecipeCard from "../components/RecipeCard";
// class RecipesContainer extends React.Component {
//   render() {
//     return <div />;
//   }
// }

const RecipesContainer = () => (
  <div>
    {RecipeCard({ title: "Title1", desc: "Desc1" })}
    {RecipeCard({ title: "Title2", desc: "Desc2" })}
  </div>
);

export default RecipesContainer;
