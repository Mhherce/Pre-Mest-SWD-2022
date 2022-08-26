import logo from './pre.jpg';


function Image() {
    return (
<div className="Image">
     <img src={logo}  alt="logo"/>
</div>
);
}



function Gallary() {
    return(
        <>
            <Image />
            <Image />
            <Image />
        </>
      
    )
}

export default Gallary;
