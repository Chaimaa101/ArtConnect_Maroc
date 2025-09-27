import axios from "axios" 
import { createContext, useEffect, useState } from "react" 

export const Context = createContext() 

function ContextGenerale({ children }) {
  const [categories, setCategories] = useState([]) 
  const [evenements, setEvenements] = useState([]) 
  const [artisans, setArtisans] = useState([]) 
  const [oeuvres, setOeuvres] = useState([]) 
  const [isModalOpen, setIsModalOpen] = useState(false) 
  const [selectedData, setSelectedData] = useState(null) 
  const [favoris, setFavoris] = useState( JSON.parse(localStorage.getItem("favoris")) ||[]) 

  localStorage.setItem("favoris", JSON.stringify(favoris))

   useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favoris));
  }, [favoris]);

  const openModalWithData = (eventData = null) => {
    setSelectedData(eventData.data) 
    setIsModalOpen(true) 
  } 

  const closeModal = () => {
    setIsModalOpen(false) 
    setSelectedData(null) 
  } 

  const fetchData = async (endpoint, setter) => {
    try {
      const response = await axios.get(`http://localhost:3000/${endpoint}`) 
      setter(response.data)
    } catch (error) {
      console.error(`Error fetching ${endpoint}:`, error) 
    }
  } 

  const fetchCategories = () => fetchData('categories', setCategories) 
  const fetchEvenements = () => fetchData('evenements', setEvenements) 
  const fetchArtisans = () => fetchData('artisans', setArtisans) 
  const fetchOeuvres = () => fetchData('oeuvres', setOeuvres) 

  
  const ajouter = async (endpoint, data  ) => {
    try {
      const response = await axios.post(`http://localhost:3000/${endpoint}`,data)

      if (response.status === 200 || response.status === 201) {
        closeModal() 
      }
    } catch (error) {
      console.error("Error saving :", error) 
    }
  }

  const addToFavoris = async (data) => {
  try {
    setFavoris((prev) => {
      // éviter doublons
      if (prev.find((favo) => favo.id === data.id)) return prev;
      return [...prev, data];
    });
  } catch (error) {
    console.error("Error saving :", error)
  }
}
const fetchFavoris = () =>{
 JSON.parse(localStorage.getItem("users"))
}

const supprimerFavoris = (id) => {

    setFavoris(favoris.filter(favo => favo.id !== id))
}

  const modifier = async (endpoint, data,id  ) => {
    try {
      const response = await axios.patch(`http://localhost:3000/${endpoint}/${id}`,data)

      if (response.status === 200 || response.status === 201) {
        closeModal() 
      }
    } catch (error) {
      console.error("Error updating :", error) 
    
      return false 
    }
  }

  const supprimer = async (endpoint,id) => {
    try {
      await axios.delete(`http://localhost:3000/${endpoint}/${id}`) 

    } catch (error) {
      console.error("Error deleting :", error) 

    }
  } 

  useEffect(() => {
    fetchCategories() 
    fetchEvenements() 
    fetchArtisans() 
    fetchOeuvres() 
  }, []) 

  return (
    <Context.Provider
      value={{
        categories,
        evenements,
        artisans,
        oeuvres,
        isModalOpen,
        selectedData,
        openModalWithData,
        addToFavoris,
        closeModal,
        ajouter,
        modifier,
        supprimer,
        favoris,
        supprimerFavoris
      }}
    >
      {children}
    </Context.Provider>
  ) 
}

export default ContextGenerale 