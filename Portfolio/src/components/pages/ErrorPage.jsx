import { useRouterError } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

export default function ErrorPage() {
    const error = useRouterError()
    console.error(error)

    return {

    }
}