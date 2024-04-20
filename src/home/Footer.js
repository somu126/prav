
export default function Footer() {
    
    return (
        <div style={{padding: "12px 0px", backgroundColor : "black", textAlign: 'center', position:'fixed', width: '100%',height : '85px', bottom : '0', left: '0', right: '0', zIndex : '999' ,color:'white'}}>
            
            <div className="text-center">
                    <h5>
                         <a >made by chartapp</a>
                    </h5>
            </div> 

            <div className="text-center pt-1">
                <a href="https://www.linkedin.com/in/akshata-ganbote-7a3847247/" target="_blank" rel="noreferrer">
                    <i className="bi bi-linkedin mx-2" style={{fontSize : "20px"}}></i>
                </a>
                
                <a href="https://akshata-ganbote.netlify.app/" target="_blank" rel="noreferrer">
                    <i className="bi bi-globe mx-2" style={{fontSize : "20px"}}></i>
                </a>

                <a href="https://github.com/AkshataGanbote" target="_blank" rel="noreferrer">
                    <i className="bi bi-github mx-2" style={{fontSize : "21px"}}></i>
                </a>

                <a href="mailto:akshataganbote61843@gmail.com" target="_blank" rel="noreferrer">
                    <i className="bi bi-envelope-fill mx-2" style={{fontSize : "21px"}}></i>
                </a>
            </div>
            {/* <footer style={{backgroundColor: 'crimson', color:'springgreen', textAlign: 'center', position:'fixed', width: '100%',height : '50px', bottom : '0', left: '0', right: '0', zIndex : '999'}}><h1>THIS IS MY FOOTER</h1></footer> */}
        </div>
       
    )
}