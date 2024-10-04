import { create } from 'zustand'

const storeZustand = create((set) => ({
    pokemons: [],
    setPokemons: (pokemons) => set({ pokemons: pokemons }),
    location: localStorage.getItem('location') || '/',
    setLocation: (location) => set({ location: location }),

    pokemonBusqueda: '', // almacena el valor de la barra de busqueda
    setPokemonBusqueda: (pokemonBusqueda) => set({ pokemonBusqueda: pokemonBusqueda }), // actualiza el valor de la barra de busqueda

    pokemonMomentaneo: JSON.parse(localStorage.getItem('pokemonDelCarousel')) || [], // almacena el valor de la barra de busqueda
    setPokemonMomentaneo: (pokemonMomentaneo) => set({ pokemonMomentaneo: pokemonMomentaneo }), // actualiza el valor de la barra de busqueda


   activeMenu: false, // almacena el valor de la barra de busqueda del header
   setActiveMenu: (activeMenu) => set({ activeMenu: activeMenu }), // actualiza el valor de la barra de busqueda del header

   reiniciarMenu: false, // almacena el valor de la barra de busqueda del header
   setReiniciarMenu: (reiniciarMenu) => set({ reiniciarMenu: reiniciarMenu }), // actualiza el valor de la barra de busqueda del header

   agrandarImagen: "", // agranda la imagen seleccionada
   setAgrandarImagen: (agrandarImagen) => set({ agrandarImagen: agrandarImagen }), // actualiza el valor de imagen seleccionada
}))

export default storeZustand;