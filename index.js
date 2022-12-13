let input = document.querySelector('#url')

const shorten = () => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.result.short_link)
        });
}

document.querySelector('#submit').addEventListener('click', shorten)