import { Container, Row, Col} from 'react-bootstrap';

// import { FaGithub , FaFacebook, FaYoutube ,FaInstagram} from "react-icons/fa";

import { PiFacebookLogoDuotone} from "react-icons/pi";
import { PiYoutubeLogoDuotone} from "react-icons/pi";
import { PiInstagramLogoDuotone } from "react-icons/pi";


function Footer(){  
    return (
        <div style={{background:"#171717", color:"white"}} className='py-5 foot' >
            <Container>
                <Row>
                    <Col className='text-center text-md-start px-3'>
                        <h2><a href="#!">넷마블문화재단</a></h2>
                        <address>서울특별시 구로구 디지털로26길 38, G-Tower 넷마블</address>
                        <p>Copyright &copy; Netmarble Corp. All Rights Reserved.</p>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col md={6}>
                        <ul className='d-flex justify-content-center justify-content-md-start'>
                            <li><a href="#!">개인정보처리방침</a></li>
                            <li className='px-3'>|</li>
                            <li><a href="#!">SNS 저작물 이용 동의서</a></li>
                            <li className='px-3'>|</li>
                            <li><a href="#!">이메일 문의</a></li>
                            <li className='px-3'>|</li>
                            <li><a href="#!">주무관청</a></li>
                            <li className='px-3'>|</li>
                            <li><a href="#!">국세청</a></li>
                        </ul>
                    </Col>
                    <Col md={6} className='d-flex justify-content-center justify-content-md-end'>
                        <ul className='d-flex gap-3 '>
                            <li><a href="#!"><PiFacebookLogoDuotone /></a></li>
                            <li><a href="#!"><PiYoutubeLogoDuotone /></a></li>
                            <li><a href="#!"><PiInstagramLogoDuotone /></a></li>
                        </ul>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}

export default Footer