import React, { useState } from "react";

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

function ListaTarefasGerenteAvaliacao() {
  // Estados para armazenar as avaliações editáveis
  const [avaliacoes, setAvaliacoes] = useState({
    1: { atividades: 4.8, equipe: 4.5, comunicacao: 4.7, entregas: 4.9 },
    2: { atividades: 4.6, equipe: 4.4, comunicacao: 4.8, entregas: 4.7 },
    3: { atividades: 4.9, equipe: 4.2, comunicacao: 4.6, entregas: 4.5 },
  });

  // Função para atualizar as avaliações
  const handleAvaliacaoChange = (id, field, value) => {
    setAvaliacoes((prevAvaliacoes) => ({
      ...prevAvaliacoes,
      [id]: {
        ...prevAvaliacoes[id],
        [field]: value,
      },
    }));
  };

  return (
    <>
      <Container fluid>
        <Row>
          {/* Exemplo de cards de resumo */}
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
                      <Card.Title as="h4">3</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr />
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Atualizar Agora
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col md="12">
            <Card className="card-plain table-plain-bg">
              <Card.Header>
                <Card.Title as="h4">Gerenciamento de Sprints</Card.Title>
                <p className="card-category">Aqui está um resumo das suas sprints</p>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Responsável</th>
                      <th className="border-0">Data de Criação</th>
                      <th className="border-0">Nome</th>
                      <th className="border-0">Descrição</th>
                      <th className="border-0">(avl) Def..Escopo</th>
                      <th className="border-0">(avl) Equipe</th>
                      <th className="border-0">(avl) Comunicação</th>
                      <th className="border-0">(avl) Entregas</th>
                      
                    </tr>
                  </thead>
                  <tbody style={{ fontSize: '12px' }}>
                    <tr>
                      <td>1</td>
                      <td>Vinicius Gonçalves</td>
                      <td>10/09/2024</td>
                      <td>Desenvolver Página Inicial</td>
                      <td>Criação da página inicial do projeto</td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[1].atividades}
                          onChange={(e) => handleAvaliacaoChange(1, 'atividades', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[1].equipe}
                          onChange={(e) => handleAvaliacaoChange(1, 'equipe', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[1].comunicacao}
                          onChange={(e) => handleAvaliacaoChange(1, 'comunicacao', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[1].entregas}
                          onChange={(e) => handleAvaliacaoChange(1, 'entregas', e.target.value)}
                        />
                      </td>
                       
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Santos</td>
                      <td>11/09/2024</td>
                      <td>Implementar API</td>
                      <td>Desenvolver a API de autenticação</td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[2].atividades}
                          onChange={(e) => handleAvaliacaoChange(2, 'atividades', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[2].equipe}
                          onChange={(e) => handleAvaliacaoChange(2, 'equipe', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[2].comunicacao}
                          onChange={(e) => handleAvaliacaoChange(2, 'comunicacao', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[2].entregas}
                          onChange={(e) => handleAvaliacaoChange(2, 'entregas', e.target.value)}
                        />
                      </td>
                       
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Felipe Valderramas</td>
                      <td>12/09/2024</td>
                      <td>Testar Funcionalidades</td>
                      <td>Realizar testes unitários das funcionalidades</td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[3].atividades}
                          onChange={(e) => handleAvaliacaoChange(3, 'atividades', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[3].equipe}
                          onChange={(e) => handleAvaliacaoChange(3, 'equipe', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[3].comunicacao}
                          onChange={(e) => handleAvaliacaoChange(3, 'comunicacao', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          step="0.1"
                          value={avaliacoes[3].entregas}
                          onChange={(e) => handleAvaliacaoChange(3, 'entregas', e.target.value)}
                        />
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

export default ListaTarefasGerenteAvaliacao;
