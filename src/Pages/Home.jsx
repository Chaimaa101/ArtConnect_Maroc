import Search from "../Components/search";
import Bartitre from "../Components/Bartitre";
import Card from "../Components/Card";
import { useContext } from "react";
import { Context } from "../Context/ContextGenerale";

export default function Home() {
  const { categories, evenements, oeuvres, artisans } = useContext(Context);

  return (
    <>
      <Search />
      <div className="w-full flex justify-center">
        <img
          src="src/assets/morocco.jpg"
          alt="Morocco Skyline"
          className="max-w-4xl"
        />
      </div>

      <div className="mb-10">
        <Bartitre
          title="Categories"
          items={categories}
          renderItem={(data) => (
            <Card key={data.id} data={data} section="categories" />
          )}
        />

        <Bartitre
          title="À la une"
          items={oeuvres.map((oeuvre) => {
            const category = categories.find(
              (cat) => cat.id == oeuvre.categorieId
            );
            return {
              ...oeuvre,
              categorieNom: category ? category.nom : "Sans catégorie",
            };
          })}
          renderItem={(data) => (
            <Card key={data.id} data={data} section="oeuvres" />
          )}
        />

        <Bartitre
          title="Événements à venir"
          items={evenements}
          renderItem={(data) => (
            <Card key={data.id} data={data} section="evenements" />
          )}
        />

        <Bartitre
          title="Artisan du mois"
          items={artisans}
          renderItem={(data) => (
            <Card key={data.id} data={data} section="artisans" />
          )}
        />
      </div>
    </>
  );
}
