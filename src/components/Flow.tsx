import ReactFlow, { 
    Background, 
    Controls,
    Panel
} from 'reactflow';
import 'reactflow/dist/style.css';

function Flow(props: any) {
    return (
      <div style={{ height: "100vh" }}>
        <ReactFlow {...props} >
            <Background />
            <Controls />
            <Panel position="top-left">top-left</Panel>
        </ReactFlow>
      </div>
    );
  }
  

export default Flow;