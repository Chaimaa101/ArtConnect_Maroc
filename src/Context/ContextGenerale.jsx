import axios from "axios" 
import { createContext, useEffect, useState } from "react" 

export const Context = createContext() 
function ContextGenerale({children}) {
  const [categories, setCategories] = useState([]) 
  const [evenements, setEvenements] = useState([]) 
  const [artisans, setArtisans] = useState([]) 
  const [oeuvres, setOeuvres] = useState([]) 
   const [isModalOpen, setIsModalOpen] = useState(false);
  
   
  const handleCloseModal = () => setIsModalOpen(false);
   const handleOpenModal = () => setIsModalOpen(true);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/categories`) 
      setCategories(response.data) 
      console.log("Fetched Categories: ", response.data) 
    } catch (error) {
      console.error("Error fetching Categories:", error) 
    }
  } 

  const fetchEvenements = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/evenements`) 
      setEvenements(response.data) 
      console.log("Fetched Evenements: ", response.data) 
    } catch (error) {
      console.error("Error fetching Evenements :", error) 
    }
  }

  const fetchArtisans = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/artisans`) 
      setArtisans(response.data) 
      console.log("Fetched Artisans: ", response.data) 
    } catch (error) {
      console.error("Error fetching Artisans :", error) 
    }
  } 

  const fetchOeuvres = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/oeuvres`) 
      setOeuvres(response.data) 
      console.log("Fetched Oeuvres: ", response.data) 
    } catch (error) {
      console.error("Error fetching Oeuvres :", error) 
    }
  } 

  useEffect(() => {
    fetchCategories() 
    fetchEvenements() 
    fetchArtisans() 
    fetchOeuvres() 
  }, []) 

const AddEvent = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("category", category);
  formData.append("ville", ville);
  formData.append("date", date);
  formData.append("description", description);
  formData.append("image", image);
  try{
    
    const res = await axios.post("http://localhost:8000/evenements",formData);
  
    if (res.ok) {
      alert("Événement ajouté ✅");
    } else {
      alert("Erreur ❌");
    }
  }catch(error){
    console.log(error)
  }

};


  return (
    <>
      <Context.Provider
        value={{
          categories,
          setCategories,
          oeuvres,
          setOeuvres,
          evenements,
          setEvenements,
          artisans,
          setArtisans,
          AddEvent,
          setIsModalOpen,
          handleCloseModal,
          handleOpenModal,
          isModalOpen
        }}
      >
        {children}
      </Context.Provider>
    </>
  ) 
}

export default ContextGenerale 
