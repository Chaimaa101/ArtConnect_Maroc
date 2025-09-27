import React, { useContext, useState } from "react";
import Search from "../Components/search";
import Bartitre from "../Components/Bartitre";
import AddEvent from "../Components/AddEvent";
import AddCategory from "../Components/AddCategory";
import AddOeuvre from "../Components/AddOeuvre";
import AddArtisan from "../Components/AddArtisan";
import { Context } from "../Context/ContextGenerale";
import Card from "../Components/Card";

function Admin() {
  const [activeTab, setActiveTab] = useState("oeuvres");
  const { handleCloseModal, isModalOpen } = useContext(Context);
  const { categories, evenements, oeuvres, artisans } = useContext(Context);

  return (
    <>
      <Search />

      <div className="flex space-x-2 border-b-2 border-[#f0cb9a] mb-4 mt-6">
        <button
          className={`tab-button ${
            activeTab === "oeuvres" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("oeuvres")}
        >
          Oeuvres
        </button>
        <button
          className={`tab-button ${
            activeTab === "categories" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("categories")}
        >
          Catégories
        </button>
        <button
          className={`tab-button ${
            activeTab === "evenements" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("evenements")}
        >
          Événements
        </button>
        <button
          className={`tab-button ${
            activeTab === "artisans" ? "tab-active" : ""
          }`}
          onClick={() => setActiveTab("artisans")}
        >
          Artisans
        </button>
      </div>

      <div className="mb-10">
        <Bartitre
          title={
            activeTab === "oeuvres"
              ? "Oeuvres"
              : activeTab === "categories"
              ? "Catégories"
              : activeTab === "evenements"
              ? "Événements"
              : "Artisans"
          }
          role={true}
        >
          {activeTab === "evenements" &&
            evenements.map((event) => (
              <Card key={event.id} data={event} isAdmin={true} />
            ))}
          {activeTab === "categories" &&
            categories.map((event) => (
              <Card key={event.id} data={event} isAdmin={true} />
            ))}
          {activeTab === "oeuvres" &&
            oeuvres.map((event) => (
              <Card key={event.id} data={event} isAdmin={true} />
            ))}
          {activeTab === "artisans" &&
            artisans.map((event) => (
              <Card key={event.id} data={event} isAdmin={true} />
            ))}
        </Bartitre>
      </div>

      {activeTab === "oeuvres" && (
        <AddOeuvre isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
      {activeTab === "categories" && (
        <AddCategory isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
      {activeTab === "evenements" && (
        <AddEvent isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
      {activeTab === "artisans" && (
        <AddArtisan isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default Admin;
