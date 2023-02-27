import React from 'react';
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography
import {useGetCryptosQuery} from "../services/cryptoApi";

const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery();
    console.log(data)
    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Crypto Currencies' value={5}/></Col> {/*level={12} = 12 пробелов, в дизайне всего 24 => займет половину экрана*/}
                <Col span={12}><Statistic title='Total Exchanges' value={5}/></Col> {/*level={12} = 12 пробелов, в дизайне всего 24 => займет половину экрана*/}
                <Col span={12}><Statistic title='Total Market Cap' value={5}/></Col> {/*level={12} = 12 пробелов, в дизайне всего 24 => займет половину экрана*/}
                <Col span={12}><Statistic title='Total 24h Volume' value={5}/></Col> {/*level={12} = 12 пробелов, в дизайне всего 24 => займет половину экрана*/}
                <Col span={12}><Statistic title='Total Markets' value={5}/></Col> {/*level={12} = 12 пробелов, в дизайне всего 24 => займет половину экрана*/}
            </Row>
        </>

    );
};

export default Homepage;