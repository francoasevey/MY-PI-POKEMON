/*
const getApiInfo = async () =>{
    try {
        const Api = await axios
          .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
          .then((data) => {
            return data.data.results;
          })
          .then((data) => {
            return Promise.all(data.map((res) => axios.get(res.url))); //entro a cada elemento url y le hago un get
          })
          .then((data) => {
            return data.map((res) => res.data); // guardo todo la informacion de cada pokemon con todos su datos en mi variable Api
          });
    
        let arrayApi = Api.map((el) => {
          return {
            id: el.id,
            name: el.name,
            hp: el.stats[0].base_stat,
            attack: el.stats[1].base_stat,
            defense: el.stats[2].base_stat,
            speed: el.stats[5].base_stat,
            height: el.height,
            weight: el.weight,
            imageDefault: el.sprites.other.home.front_default,
            types: el.types.map((e) => e.type.name),
          };
        });
        return arrayApi;
      } catch (error) {
        console.log(error);
      }
};

const getApiInfoType = async () => {
   const apiUrl = await axios.get(`https://pokeapi.co/api/v2/type`);
   const apiInfo = await apiUrl.data.results.map(e => {
       return{
           id : e.id,
           name: e.name,
       };
   });
   await Type.bulkCreate(apiInfo);
return apiInfo;
};

*/