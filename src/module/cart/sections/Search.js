import { Fragment, useState } from "react";
import {
    Container,
    Input,
    Label,
    FormGroup,
    Button,
    Col,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    Form, List
} from "reactstrap";
import { API } from "../../../common/API";

export default function Search(){
    const [nameCar, setNameCar]= useState('')
    const [category, setCategory] = useState('')
    const [isRented, setIsRented] = useState(false)
    const [price, setPrice] = useState('')
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isSubmitted, setIsSubmited] = useState(false)
    const [detailData, setDetailData] = useState({})
    const [isClick, setIsClick] = useState(false)

    const fetchData = () => {
        const params = `name=${nameCar}&category=${category}&isRented=${isRented}&${mappingPrice(price)}`
        API.get(`admin/v2/car?${params}&page=1&pageSize=10`).then(res=>{
            setData(res.data.cars)
            console.info(`admin/v2/car?${params}&page=1&pageSize=10`);
        }).catch(err =>{
            console.log('err:', err)
        }).finally(()=>{
            setIsLoading(false)
        })
    }

    const fetchDataDetail = (id) => {
        API.get(`admin/car/${id}`).then(res=>{
            setDetailData(res.data)
        }).catch(err =>{
            console.log('err:', err)
        })
    }

    const mappingPrice = (price) => {
        switch(price){
            case 'low':
                return 'minPrice=0&maxPrice=400000'
            case 'medium':
                return 'minPrice=400000&maxPrice=600000'
            case 'high':
                return 'minPrice=600000&maxPrice=1000000'
            default:
                return ''
        }
    }

    const formatToIDR = (idr) => {
        const parsed = idr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return `${'Rp '}${parsed}`;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmited(true)
        setIsLoading(true)
        fetchData();
    }

    const handleClick = (id) => {
        setIsClick(true)
        fetchDataDetail(id);
    }

    return (
        <>
            <section id="formSewa" className="mb-5">
                <Container className="container">
                    <Row className="row">
                        <Col md={10} className="col-md-10">
                            <Form className="my-sm-4 d-block d-md-flex justify-content-around align-self-center">
                                <FormGroup className="my-md-3 input-grup align-content-center justify-content-center">
                                    <Label htmlFor="name" className="form-label">Nama Mobil</Label>
                                    <Input type="text" className="form-control d-inline" id="name" disabled={isSubmitted}
                                           aria-describedby="emailHelp" placeholder="Ketik nama/tipe mobil"
                                           width="208" onChange={e=>setNameCar(e.target.value)}/>
                                </FormGroup>
                                <FormGroup className="my-3 input-grup align-content-center justify-content-center">
                                    <Label htmlFor="kapasitas" className="form-label">Kategori</Label>
                                    <Input type="select" id="kapasitas" className="form-select text-secondary" onChange={e=>setCategory(e.target.value)}>
                                        <option hidden >Masukkan Kapasitas Mobil</option>
                                        <option className="text-black" value="small">2 - 4 orang</option>
                                        <option className="text-black" value="medium">4 - 6 orang</option>
                                        <option className="text-black" value="large">6 - 8 orang</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="my-3 input-grup align-content-center justify-content-center">
                                    <Label htmlFor="harga" className="form-label">Harga</Label>
                                    <Input type="select" id="harga" className="form-select text-secondary" disabled={isSubmitted} onChange={e=>setPrice(e.target.value)}>
                                        <option hidden >Masukkan harga sewa per hari</option>
                                        <option className="text-black" value="low">Rp. 400.000</option>
                                        <option className="text-black" value="medium">Rp. 400.000 - Rp.600.000</option>
                                        <option className="text-black" value="high"> > Rp.600.000</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup className="my-3 input-grup align-content-center justify-content-center">
                                    <Label htmlFor="status" className="form-label">Status</Label>
                                    <Input type="select" id="status" className="form-select text-secondary" disabled={isSubmitted} onChange={e=>setIsRented(e.target.value)}>
                                        <option className="text-black" value={true}>Disewa</option>
                                        <option className="text-black" value={false}>Free</option>
                                    </Input>
                                </FormGroup>
                                {isClick ?
                                    ("")
                                     : isSubmitted ? (
                                        <Button type="submit" className="btn btn-primary align-self-center btn-edit"
                                                onClick={() => {
                                                    setIsSubmited(false)
                                                    setData([])
                                                    setIsClick(false)
                                                }}>Edit</Button>
                                    ) : (
                                        <Button onClick={handleSubmit}
                                                className="btn btn-primary align-self-center">Cari Mobil</Button>
                                    )
                                }
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </section>

            <div id="cardResult">
                <Container className="container">
                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : !isClick ? (
                        <Row className="row justify-content-center">
                            {data.map(car=>{
                                return (
                                    // <CarCard key={car.id} name={car.name} image={car.image} price={car.price} id={car.id} />
                                        <Fragment key={car.id}>
                                            <Col md="4" className="col-md-4 m-0 p-0">
                                                <Card className="card card-result border-1" style={{width: "21rem"}}>
                                                    <img src={car.image} className="card-img-top" alt={car.name} />
                                                    <CardBody className="card-body">
                                                        <CardTitle className="card-type">{car.name}</CardTitle>
                                                        <CardSubtitle tag="h5" className="card-title fw-bold">{formatToIDR(car.price)} / hari</CardSubtitle>
                                                        <CardText className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing
                                                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CardText>
                                                        <Button onClick={()=>handleClick(car.id)} className="btn btn-primary w-100">Pilih Mobil</Button>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Fragment>
                                )
                            })}
                        </Row>
                    ) : (
                        <div id="cardDetail">
                            <Container className="container">
                                <Row className="row justify-content-md-between flex-wrap">
                                    <Col md="8" className="col-md-8 m-md-0 p-md-0 detail-package">
                                        <p className="fw-bold text-capitalize ms-3 mt-2">tentang paket</p>
                                        <p className="fw-bold text-capitalize ms-3">include</p>
                                        <List>
                                            <li className="text-secondary">Apa saja yang termasuk dalam paket misal durasi max 12
                                                Jam
                                            </li>
                                            <li className="text-secondary">Sudah termasuk bensin selama 12 jam</li>
                                            <li className="text-secondary">Sudah termasuk Tiket wisata</li>
                                            <li className="text-secondary">Sudah termasuk pajak</li>
                                        </List>
                                        <p className="fw-bold text-capitalize ms-3">exclude</p>
                                        <List>
                                            <li className="text-secondary">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li className="text-secondary">Jika overtime lebih dari 12 jam akan ada tambahan biaya
                                                Rp 20.000/jam
                                            </li>
                                            <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
                                        </List>
                                        <p className="fw-bold text-capitalize ms-3">refund, reschedule, overtime</p>
                                        <List>
                                            <li className="text-secondary">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li className="text-secondary">Jika overtime lebih dari 12 jam akan ada tambahan biaya
                                                Rp 20.000/jam
                                            </li>
                                            <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
                                            <li className="text-secondary">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li className="text-secondary">Jika overtime lebih dari 12 jam akan ada tambahan biaya
                                                Rp 20.000/jam
                                            </li>
                                            <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
                                            <li className="text-secondary">Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li className="text-secondary">Jika overtime lebih dari 12 jam akan ada tambahan biaya
                                                Rp 20.000/jam
                                            </li>
                                            <li className="text-secondary">Tidak termasuk akomodasi penginapan</li>
                                        </List>
                                    </Col>
                                    <Col md="4" className="col-md-4 m-md-0 p-md-0 car-detail justify-content-md-end">
                                        <Card className="card card-detail border-1">
                                            <img src={detailData.image} className="card-img-top" alt="..."/>
                                            <CardBody className="card-body">
                                                <CardTitle className="card-type fw-bold fs-6 m-0 p-0">{detailData.name}</CardTitle>
                                                <CardSubtitle className="d-flex align-items-center m-0 p-0">
                                                    <img src="/img/ic_users.svg" className="pe-2" alt=""/>
                                                    <CardText className="m-0 p-0 text-secondary fw-bold fs-6">{detailData.category}</CardText>
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
                    )}
                </Container>
            </div>
        </>
    )
}




