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

function ListaTarefasGerente() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-tasks text-warning"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Total de Tarefas</p>
                      <Card.Title as="h4">120</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar Agora
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-success">
                      <i className="nc-icon nc-check-2 text-success"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tarefas Concluídas</p>
                      <Card.Title as="h4">85</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Último dia
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-danger">
                      <i className="nc-icon nc-alert-circle-i text-danger"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Tarefas Pendentes</p>
                      <Card.Title as="h4">35</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  Nas últimas 24 horas
                </div>
              </Card.Footer>
            </Card>
          </Col>

          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-primary">
                      <i className="nc-icon nc-badge text-primary"></i>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Avaliação Média</p>
                      <Card.Title as="h4">4.5</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        
        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Gerenciamento de Tarefas</Card.Title>
                <p className="card-category">Aqui está um resumo das suas tarefas</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Proprietário</th>
                      <th className="border-0">Nome da Tarefa</th>
                      <th className="border-0">Descrição</th>
                      <th className="border-0">Avaliação Média</th>
                      <th className="border-0">Sprint</th> {/* Coluna Sprint */}
                      <th className="border-0">Ações</th>
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: '12px' }}>
                    <tr>
                      <td>1</td>
                      <td>Vinicius Gonçalves</td>
                      <td>Desenvolver Página Inicial</td>
                      <td>Criação da página inicial do projeto</td>
                      <td>4.8</td>
                      <td>Sprint 1</td> {/* Sprint associada */}
                      <td>
                        <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                        <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Santos</td>
                      <td>Implementar API</td>
                      <td>Desenvolver a API de autenticação</td>
                      <td>4.5</td>
                      <td>Sprint 2</td> {/* Sprint associada */}
                      <td>
                        <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                        <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Felipe Valderramas</td>
                      <td>Testar Funcionalidades</td>
                      <td>Realizar testes unitários das funcionalidades</td>
                      <td>4.9</td>
                      <td>Sprint 3</td> {/* Sprint associada */}
                      <td>
                        <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                        <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Leo</td>
                      <td>Documentação do Projeto</td>
                      <td>Criação da documentação técnica</td>
                      <td>4.2</td>
                      <td>Sprint 1</td> {/* Sprint associada */}
                      <td>
                        <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                        <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Lucas Borges</td>
                      <td>Revisar Código</td>
                      <td>Revisão do código fonte das funcionalidades</td>
                      <td>4.7</td>
                      <td>Sprint 2</td> {/* Sprint associada */}
                      <td>
                        <i className="fas fa-edit" style={{ cursor: 'pointer' }}></i>
                        <i className="fas fa-trash" style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Alisson Santana</td>
                      <td>Deploy do Sistema</td>
                      <td>Fazer o deploy na nuvem</td>
                      <td>4.6</td>
                      <td>Sprint 3</td> {/* Sprint associada */}
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

export default ListaTarefasGerente;
