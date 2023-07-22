fetch("https://pokeapi.co/api/v2/pokemon/ditto").then(response => console.log(response.json())).then(response =>
    { console.log(response)} )

fetch("https://pokeapi.co/api/v2/pokemon-species/132/").then(res => console.log(res.json())).then(res=>{console.log(res)})