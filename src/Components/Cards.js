
import Card from "./Card";
import Hero from "./Hero"



function Cards(){
    return(
        <div className="cards">
           <Hero   tittle="SOLD OUT">
                <Card 
                    imag ={require("../images/image11.png")}
                    info = "card_info"
                    width = {300}
                    height = {400}
                    rating = "5.0"
                    rate = "(6).USA"
                    cartext= "life lessons with katie zaferes"
                    text = "From $136"
                />
           </Hero>
           <Hero tittle="SOLD OUT">
                <Card 
                        
                    imag ={require("../images/wedding-photography 1.png")}
                    info = "card_info"
                    width = {300}
                    height = {400}
                    rating = "5.0"
                    rate = "(30).USA"
                    cartext= "learn wedding photography"
                    text = "From $125"
                />
           </Hero>
      
            
                <Card 
                    imag ={require("../images/mountain-bike 1.png")}
                    info = "card_info"
                    width = {300}
                    height = {400}
                    rating = "4.8"
                    rate = "(2).USA"
                    cartext= "Group mountain biking"
                    text = "From $50"
                />
          
        </div>
    );
}


export default Cards;