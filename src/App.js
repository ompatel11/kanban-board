import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaskItem from './TaskItem';
import { BsThreeDotsVertical } from 'react-icons/bs';

function App() {
  const boards = [
    'design',
    'development',
    'deployment'
  ]
  function handleDrop(e) {
    e.preventDefault();
    if (boards.includes(e.target.id)) {
      const data = e.dataTransfer.getData("text/plain");
      const dragItem = document.getElementById(data);
      e.target.appendChild(dragItem);
    }
  }
  return (
    <div className="Tasks">

      <Row>
        <Col>
          <div
            className='design-drop-zone drop-zone'
            id="design"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <Row className='design-heading'>
              <Col md='11'>
                <h4 className='heading'>Design</h4>
              </Col>
              <Col md='1'>
                <BsThreeDotsVertical></BsThreeDotsVertical>
              </Col>

            </Row>
            <TaskItem heading={'Implement Kanban Board'} description={'Create UI in Figma'} priority={'high'} id='item-1'></TaskItem>
            <TaskItem heading={'Edit Feature'} description={'Create UI design'} priority={'medium'} id='item-2'></TaskItem>

          </div>
        </Col>
        <Col>
          <div
            className='development-drop-zone drop-zone'
            id="development"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <Row>
              <Col md='11'>
                <h4 className='heading'>Development & Testing</h4>
              </Col>
              <Col md='1'>
                <BsThreeDotsVertical></BsThreeDotsVertical>
              </Col>

            </Row>
          </div></Col>
        <Col>
          <div
            className='testing-drop-zone drop-zone'
            id="deployment"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          >
            <Row>
              <Col md='11'>
                <h4 className='heading'>Deployed</h4>
              </Col>
              <Col md='1'>
                <BsThreeDotsVertical></BsThreeDotsVertical>
              </Col>

            </Row>
          </div>
        </Col>
      </Row>





    </div>
  );
}

export default App;
