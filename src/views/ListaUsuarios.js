import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function ListaUsuarios() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
          <Card className="card-plain table-plain-bg">
            <Card.Header>
              <Card.Title as="h4">Gerenciamento de Usuários</Card.Title>
              <p className="card-category">Aqui está um resumo dos usuários e seus níveis de acesso</p>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive px-0">
              <Table className="table-hover">
                <thead>
                  <tr>
                    <th className="border-0">ID</th>
                    <th className="border-0">Nome</th>
                    <th className="border-0">Data de Criação</th>
                    <th className="border-0">Nível de Acesso</th>
                    <th className="border-0">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Vinicius Gonçalves</td>
                    <td>01/01/2024</td>
                    <td>Master</td>
                    <td>
                      <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                      <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Santos</td>
                    <td>02/01/2024</td>
                    <td>Usuário</td>
                    <td>
                      <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                      <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Felipe Valderramas</td>
                    <td>03/01/2024</td>
                    <td>Gerente</td>
                    <td>
                      <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                      <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Leo</td>
                    <td>04/01/2024</td>
                    <td>Usuário</td>
                    <td>
                      <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                      <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Lucas Borges</td>
                    <td>05/01/2024</td>
                    <td>Gerente</td>
                    <td>
                      <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                      <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>Alisson Santana</td>
                    <td>06/01/2024</td>
                    <td>Master</td>
                    <td>
                      <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                      <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ListaUsuarios;
