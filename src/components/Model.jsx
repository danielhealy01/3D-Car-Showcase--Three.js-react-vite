import { useGLTF} from "@react-three/drei";

const Model = (props) => {
  const { scene } = useGLTF(props.car);
  return <primitive object={scene} {...props} />;
};

export default Model;
