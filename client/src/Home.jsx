import React from 'react'
import "./Home.css"

const Home = () => {
    return (
        <>
            <main>
                <section className="Home-section">
                    <div className="container">
                        <div className="home-content">
                            <p>we are the World Best It company</p>
                            <h1>Welcome to Mern Project</h1>
                            <p>are you ready to take your business to the next level with cutting-edht IT solutins? Look no further! At mern project we specialize in providing innovative IT services and solutins tailored to meet you unqur needs.</p>
                            <div className="btn btn-group">
                                <a className= "btn-1" href="/contact"> connect now </a>
                                <a className= "btn-1" href=".services"> Learn More</a>

                            </div>
                        </div>
                        <div className="home-image">
                            <img src="home.jpg" alt="" width="400" height="450"/>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default Home
