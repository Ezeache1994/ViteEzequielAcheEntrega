import"./Footer"  ;
export default function Footer(){
    return(
        <footer>
            <div>
            <h1 style={{textAlign:"center", padding:"1rem"}}>Nuestras Marcas</h1>
            <section style={{display:"flex",
            justifyContent:"space-around", padding:"3.5rem"}}>

            <figure style={{display:"flex"}}>
                <section className="BRANDBackground1">
                    <img style={{width:"200px"}} src="/public/HaloGive.png" alt="_blank" />
                </section>
                <section className="BRANDBackground2">
                    <img style={{width:"200px"}} src="/public/Anirca.png" alt="" />
                </section>
            </figure>
            <figure style={{display:"flex"}}>
                <section className="BRANDBackground3">
                    <img style={{width:"200px"}} src="/public/veco.png" alt="" />
                </section>
                <section className="BRANDBackground4">
                    <img style={{width:"200px"}} src="/public/Polycarpus (1).png" alt="" />
                </section>
            </figure>
            </section>
            </div>
            <h1 style={{textAlign:"center"}}>
            Todos los derechos reservados para Halo Give Corp Latin America © 
            
            </h1>
        </footer>
    )
}



