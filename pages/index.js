import { Button, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { FaCrosshairs } from 'react-icons/fa';
import Typewriter from '../components/Typewhiter';

export default function Home() {
  return (
    <Row className='mt-8 justify-content-center'>
      <Col md={7} xs={12} className='text-center'>
        <h1 className='fw-bolder text-custom-gray-darker mb-5 1h-base display-5'>
          <Typewriter text='Comida Saudável e gostosa direto da sua casa'/>
        </h1>
        <Link href='restaurants'>
          <Button variant="custom-red" size="lg" className='text-white'>
            <FaCrosshairs className='pb-1'/>
            <span className='px-2 fw-bolder'>ENCONTRAR AGORA</span>
          </Button>
        </Link>
      </Col>
    </Row>
  )
}
