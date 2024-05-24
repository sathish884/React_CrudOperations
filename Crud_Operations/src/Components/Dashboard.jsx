import React from 'react';
import { Card, Col, Row } from 'antd';
import './Dashboard.css';

function Dashboard() {
    return (
        <>
            <Row gutter={16}>
                <Col span={8}>
                    <Card className='card' title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className='card' title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
                <Col span={8}>
                    <Card className='card' title="Card title" bordered={false}>
                        Card content
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard


