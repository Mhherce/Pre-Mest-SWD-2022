import star from "../images/star1.png"



function Card(props){
    return(
       <div className="card">
            <img src={props.imag} alt={props.info} width={props.width} height={props.height}/>
            <p className="p-one">
                <img src={star} alt="star_img"/>
                <p>{props.rating} <span id="rate">{props.rate}</span></p>
            </p>
            <p className="p-two">{props.cartext}</p>
            <p className="p-three"><span id="card-p">{props.text}</span>/ person</p>

       </div>
    );
}


export default Card;



{/* <section id="card">
<div className="card-img">
  <h3>{info}</h3>
  <img src={imag} alt={native} width={wide} height={high} />  
</div>
<div className="card-rating">
  <img src={image1} alt={native1} width={wide1} height={high1} /> 
  <p>{text}</p> 
  <p className="card-p">{text1}</p> 
</div>
<div className="card-text"></div>
</section> */}