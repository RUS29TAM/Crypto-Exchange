import './App.css';
import {BrowserRouter, Switch, Route, Link, Routes, Navigate} from "react-router-dom";
import {Layout, Typography, Space} from "antd";
import {Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News} from "./components";

function App() {
    return (
        <div className='app'>
            <div className='navbar'>
                <Navbar/>
            </div>
            <div className='main'>
                <Layout>
                    <div className='routes'>
                        <Routes>
                            <Route exact index path='/' element={<Homepage/>}/>
                            <Route path='/exchanges' element={<Exchanges/>}/>
                            <Route path='/cryptocurrencies' element={<Cryptocurrencies/>}/>
                            <Route path='/crypto/:coinId' element={<CryptoDetails/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='*' element={<Navigate to='/'/>}/>
                        </Routes>
                    </div>
                </Layout>
                <div className='footer'>
                    <Typography.Title level={5} style={{color: "white", textAlign: "center",}}>
                        Crypto Exchange <br/>
                        All rights reserved &copy; RUS29TAM
                    </Typography.Title>
                    <Space>
                        <Link to='/'>Home</Link>
                        <Link to='/exchanges'>Exchanges</Link>
                        <Link to='/news'>News</Link>
                    </Space>
                </div>
            </div>

        </div>
    );
}

export default App;
