const container = document.getElementById('container')

const templateCharacter = (item) => {
    return `
    <div class='character-container'>
    <div>
    <p>Name: ${item.character.name}</p>
    <img src=${item.character.images.webp.image_url} />
    </div>
    `
}

const fetchCharacters = () => {
    fetch('https://api.jikan.moe/v4/manga/1032/characters')
        .then(data => data.json())
        .then(item => {
            //get all character
            let content = ''
                // item.data.map(CharacterData => content += templateCharacter(CharacterData))
                // container.innerHTML = content

            // if you want to take/show the main character or anything use "filter"
            let main = item.data.filter(data => data.role === 'Main')
            main.map(CharacterData => content += templateCharacter(CharacterData))
            container.innerHTML = content
        })
}




fetchCharacters()