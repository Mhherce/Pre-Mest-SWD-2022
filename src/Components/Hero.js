

function Hero({children,tittle}){
    return(
        <div id="hero">
            <p id="tittle">{tittle}</p>
            {children}
        </div>
    );
}

export default Hero;