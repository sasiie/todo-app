
export default function HeroSection(){
    return <section id= "heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section-- content">
                <p className="section--title">Hej jag heter Sara</p>
                <h1 className="hero--section--title"> 
                <span className="hero--section--title--color"> UX/UI -designer</span> {" "}
                <br />
                Developer
                </h1>
                <p className="hero--section--description">
                    Information kring min title
                    <br />
                    Ytterligasre information kring min title
                </p>
            </div>
            <button className="btn btn-primary"> Hör av dig</button>
        </div>
        <div className="hero--section--box">
{   /*         <img src="./myImage.jpeg" alt="Of me" height= {600} width={600}/>
*/}        </div>
    </section>
}