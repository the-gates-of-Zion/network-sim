import { applyNodeChanges, applyEdgeChanges } from 'reactflow';
import { nanoid } from 'nanoid';
import { create } from 'zustand';
 
export const useStore = create((set:any, get:any) => ({
  nodes: [],
  edges: [],
 
  onNodesChange(changes:any) {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
 
  onEdgesChange(changes:any) {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
 
  addEdge(data:any) {
    const id = nanoid(6);
    const edge = { id, ...data };
 
    set({ edges: [edge, ...get().edges] });
  },
}));