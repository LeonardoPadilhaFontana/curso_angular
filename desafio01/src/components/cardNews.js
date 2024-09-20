class CardNews extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({mode:"open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class","card_left");
        const cardRight = document.createElement("div");
        cardRight.setAttribute("class","card_right");

        const autor = document.createElement("span");
        autor.textContent = 'By '+ (this.getAttribute('autor') || "anonymous");
        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute('title')
        linkTitle.href = this.getAttribute('link-url')
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute('content')

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        let newsImage = document.createElement('img');
        newsImage.src = this.getAttribute('photo')||"/desafio01/assets/default_photo.jpg";
        newsImage.alt='Foto da noticia';
        cardRight.appendChild(newsImage); ;


        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent=`
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Segoe UI', sans-serif;
            }

            .card{
                width: 100%;
                -webkit-box-shadow: 9px 11px 9px -1px rgba(0,0,0,0.75);
                -moz-box-shadow: 9px 11px 9px -1px rgba(0,0,0,0.75);
                box-shadow: 9px 11px 9px -1px rgba(0,0,0,0.75);
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                color: black;
            }

            .card_left, .card_right {

            }

            .card_left {
                display: flex;
                flex-direction:  column;
                justify-content: center;
                padding: 10px;
            }

            .card_left > span {
                font-weight: 400;
            }

            .card_left > a {
                margin-top: 15px;
                font-size: 50px;
                text-decoration: none;
                color: black;
                font-weight: bold;
            }

            .card_left > p {
                color: gray;
            }
            img {
                width: 300px;  /* Largura fixa */
                height: 300px; /* Altura fixa */
                object-fit: cover; /* Faz com que a imagem preencha o espaço sem distorcer */
            }
        `
        return style;
    }
}


customElements.define("card-news",CardNews);