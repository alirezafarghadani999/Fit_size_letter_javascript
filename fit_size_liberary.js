function fit_letter(max_letter,txt){
    text_retern = ""

    if (max_letter > txt.length){
        text_retern += txt
        hg = 0
        for (let index = 0; index < (max_letter-txt.length); index++) {
            hg = index
        }
        document.write(text_retern+"<div style='height:"+hg+"px;'></div>")
    }
    else if (max_letter == txt.length) {
        document.write(text_retern)

    }else{
        for (let index = 0; index < max_letter-3; index++) {
            text_retern += txt[index]
            
        }
        text_retern += "..."
        document.write(text_retern)
        
    }

}
