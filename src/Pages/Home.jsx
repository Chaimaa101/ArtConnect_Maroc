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
        <Bartitre title="Categories" role={false}>
          {categories.map((data) => (
            <Card key={data.id} data={data} section="categories"/>
          ))}
        </Bartitre>

        <Bartitre title="A la lune" role={false}>
          {oeuvres.map((data) => (
            <Card key={data.id} data={data} section="oeuvres"/>
          ))}
        </Bartitre>

        <Bartitre title="Evénements à venir" role={false}>
          {evenements.map((data) => (
            <Card key={data.id} data={data} section="oeuvres"/>
          ))}
        </Bartitre>

        <Bartitre title="Artisan du mois" role={false}>
          {artisans.map((data) => (
            <Card key={data.id} data={data} section="artisans"/>
          ))}
        </Bartitre>
      </div>
    </>
  );
}
