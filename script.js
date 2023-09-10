function toggleMode(){

    const mode = document.documentElement
    mode.classList.toggle("light")
    
    const  profileImage = document.querySelector("#profile img")

    if(mode.classList.contains("light")){

       profileImage.setAttribute("src", "assets/avatar-light-stan.png")
       profileImage.setAttribute("alt", "Imagen no light mode")
       
    }else{
        profileImage.setAttribute("src", "assets/avatar.png")
        profileImage.setAttribute("alt", "foto do maykbrito dark mode")
    }
    
}


// Eu estava bastente confuso em relação ao nome da variável "html", eu mudava e ainda assim funcionava, eu achei que tinha de ser igualzinho a tag no documento html como no video o "const html" mas percebi que é so a declaração de uma variavel constante, que faz referência ao documento html raiz "document.documentElement". O unico jeito desse codigo não rodar é mudando a referência ou mesmo a classe que estamos mexendo.

