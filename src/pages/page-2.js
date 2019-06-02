import React from 'react'
import { Link } from 'gatsby'
import { Button, Card, CardBody, CardImage, CardTitle, CardText } from 'mdbreact';

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Button color="primary">Elegant</Button>
    <Card>
        <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg" waves />
        <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <Button href="#">Button</Button>
        </CardBody>
    </Card>
  </Layout>
)

export default SecondPage
