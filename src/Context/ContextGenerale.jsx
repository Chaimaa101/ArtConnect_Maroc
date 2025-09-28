import axios from "axios" 
import { createContext, useEffect, useState } from "react" 
import { uploadToCloudinary } from "./Cloudinary" 

export const Context = createContext() 

function ContextGenerale({ children }) {
  const [categories, setCategories] = useState([]) 
  const [evenements, setEvenements] = useState([]) 
  const [artisans, setArtisans] = useState([]) 
  const [oeuvres, setOeuvres] = useState([]) 
  const [isModalOpen, setIsModalOpen] = useState(false) 
  const [selectedData, setSelectedData] = useState(null) 
  const [favoris, setFavoris] = useState(
    JSON.parse(localStorage.getItem("favoris")) || []
  ) 

  localStorage.setItem("favoris", JSON.stringify(favoris)) 

  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favoris)) 
  }, [favoris]) 

  const openModalWithData = (eventData = null) => {
    setSelectedData(eventData.data || null) 
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

  const fetchCategories = () => fetchData("categories", setCategories) 
  const fetchEvenements = () => fetchData("evenements", setEvenements) 
  const fetchArtisans = () => fetchData("artisans", setArtisans) 
  const fetchOeuvres = () => fetchData("oeuvres", setOeuvres) 

  const ajouter = async (endpoint, data) => {
    try {
      let finalData = { ...data } 

      // Si image est un File (upload depuis input)
      if (data.image instanceof File) {
        const imageUrl = await uploadToCloudinary(data.image) 
        finalData.image = imageUrl 
      }

      const response = await axios.post(
        `http://localhost:3000/${endpoint}`,
        finalData,
        {
          headers: { "Content-Type": "application/json" },
        }
      ) 

      if (response.status === 200 || response.status === 201) {
        closeModal() 
      }
      alert("Done !") 
    } catch (error) {
      console.error("Error saving :", error) 
      alert("Error !") 
    }
  } 

  const addToFavoris = async (data) => {
    try {
      setFavoris((prev) => {
        if (prev.find((favo) => favo.id === data.id)) return prev 
        return [...prev, data] 
      }) 
      alert("Done !") 
    } catch (error) {
      console.error("Error saving :", error) 
      alert("Error !") 
    }
  } 
  const fetchFavoris = () => {
    JSON.parse(localStorage.getItem("users")) 
  } 

  const supprimerFavoris = (id) => {
    setFavoris(favoris.filter((favo) => favo.id !== id)) 
    alert("Done !") 
  } 

  const modifier = async (endpoint, data, id) => {
    try {

       let finalData = { ...data } 


      if (data.image instanceof File) {
        const imageUrl = await uploadToCloudinary(data.image) 
        finalData.image = imageUrl 
      }

      const response = await axios.patch(
        `http://localhost:3000/${endpoint}/${id}`,
        finalData
      ) 

      if (response.status === 200 || response.status === 201) {
        closeModal() 
      }
      alert("Done !") 
    } catch (error) {
      console.error("Error updating :", error) 
      alert("Error !") 
      return false 
    }
  } 

  const supprimer = async (endpoint, id) => {
    try {
      await axios.delete(`http://localhost:3000/${endpoint}/${id}`) 
      alert("Done !") 
    } catch (error) {
      console.error("Error deleting :", error) 
      alert("Error !") 
    }
  } 

  useEffect(() => {
    fetchCategories() 
    fetchEvenements() 
    fetchArtisans() 
    fetchOeuvres() 
    fetchFavoris() 
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
        supprimerFavoris,
      }}
    >
      {children}
    </Context.Provider>
  ) 
}

export default ContextGenerale 
