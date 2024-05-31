import Header from "../1Header/0Header/Header";
import Footer from "../4Footer/Footer";
import "./Layout.css"
export default function Layout({children}){
    return(
        <div>
            <Header/>
            <br/>
            <main className="main" >
                {children}
            </main>
            <Footer/>
        </div>
    )
}












