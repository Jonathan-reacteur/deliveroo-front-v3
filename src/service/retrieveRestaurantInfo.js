import axios from "axios";

const retrieveRestaurantInfo = async () => {
  const ADRESSE_INFOS_RESTAURANT = "https://deliveroo-backendv1.herokuapp.com/";
  const response = await axios.get(ADRESSE_INFOS_RESTAURANT).catch((error) => {
    //       // Affichera d'éventuelles erreurs, notamment en cas de problème de connexion Internet.

    console.log(error);
  });

  return response;
};

export default retrieveRestaurantInfo;
