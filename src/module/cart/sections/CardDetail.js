import {Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, List, Row} from "reactstrap";

export default function CardDetail({detailData}) {

    const formatToIDR = (idr) => {
        const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return `${'Rp '}${parsed}`;
    }

    const mappingCategory = (value) => {
        switch (value) {
            case 'small':
                return '2 - 4 orang'
            case 'medium':
                return '4 - 6 orang'
            case '6 - 8 orang':
                return '6 - 8 orang'
            default:
                return ''
        }
    }
    return (
        <div id="cardDetail">
            <Container className="container">
                <Row className="row justify-content-md-between flex-wrap">
                    <Col md="8" className="col-md-8 m-md-0 p-md-0 detail-package">
                        <p className="fw-bold text-capitalize ms-3 mt-2">tentang paket</p>
                        <p className="fw-bold text-capitalize ms-3">include</p>
                        <List>
                            <li className="text-secondary">Apa saja yang termasuk dalam paket misal
                                durasi max 12
                                Jam
                            </li>
                            <li className="text-secondary">Sudah termasuk bensin selama 12 jam</li>
                            <li className="text-secondary">Sudah termasuk Tiket wisata</li>
                            <li className="text-secondary">Sudah termasuk pajak</li>
                        </List>
                        <p className="fw-bold text-capitalize ms-3">exclude</p>
                        <List>
                            <li className="text-secondary">Tidak termasuk biaya makan sopir Rp
                                75.000/hari
                            </li>
                            <li className="text-secondary">Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya
                                Rp 20.000/jam
                            </li>
                            <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
                        </List>
                        <p className="fw-bold text-capitalize ms-3">refund, reschedule, overtime</p>
                        <List>
                            <li className="text-secondary">Tidak termasuk biaya makan sopir Rp
                                75.000/hari
                            </li>
                            <li className="text-secondary">Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya
                                Rp 20.000/jam
                            </li>
                            <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
                            <li className="text-secondary">Tidak termasuk biaya makan sopir Rp
                                75.000/hari
                            </li>
                            <li className="text-secondary">Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya
                                Rp 20.000/jam
                            </li>
                            <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
                            <li className="text-secondary">Tidak termasuk biaya makan sopir Rp
                                75.000/hari
                            </li>
                            <li className="text-secondary">Jika overtime lebih dari 12 jam akan ada
                                tambahan biaya
                                Rp 20.000/jam
                            </li>
                            <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
                        </List>
                    </Col>
                    <Col md="4" className="col-md-4 m-md-0 p-md-0 car-detail justify-content-md-end">
                        <Card className="card card-detail border-1">
                            <img src={detailData.image} className="card-img-top" alt="..."/>
                            <CardBody className="card-body">
                                <CardTitle
                                    className="card-type fw-bold fs-6 m-0 p-0">{detailData.name}</CardTitle>
                                <CardSubtitle className="d-flex align-items-center m-0 p-0">
                                    <img src="/img/ic_users.svg" className="pe-2" alt=""/>
                                    <CardText
                                        className="m-0 p-0 text-secondary fw-bold fs-6">{mappingCategory(detailData.category).toLowerCase()}</CardText>
                                </CardSubtitle>
                                <div className="d-flex justify-content-between fw-bold mt-5 mb-3">
                                    <CardText className="text-capitalize">total</CardText>
                                    <CardText>{formatToIDR(Number(detailData.price))}</CardText>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}