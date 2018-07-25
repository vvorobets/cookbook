import React from "react";
import RecipeCard from "../components/RecipeCard";
// class RecipesContainer extends React.Component {
//   render() {
//     return <div />;
//   }
// }

const RecipesContainer = () => (
  <React.Fragment>
    {RecipeCard({ title: "Title1", desc: "Desc1" })}
    {RecipeCard({ title: "Title2", desc: "Desc2" })}
    {RecipeCard({ title: "Title3", desc: "Desc3" })}
    {RecipeCard({ title: "Title4", desc: "Desc4" })}
    {RecipeCard({ title: "Title5", desc: "Desc5" })}
    {RecipeCard({ title: "Title6", desc: "Desc6" })}
  </React.Fragment>
);

export default RecipesContainer;
